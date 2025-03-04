"use server";

import { signIn } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, password, universityCard, universityId } = params;

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(users).values({
      fullName,
      email,
      password: hashedPassword,
      universityCard,
      universityId,
    });
    signInWithCredentials({ email, password });
    return { success: true };
  } catch (err) {
    console.error("Database error:", err);
    throw new Error("An error occurred while signing up");
  }
};

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  try {
    const results = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (results?.error) return { success: false, error: results.error };
    return { success: true };
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("An error occurred while signing in");
  }
};
