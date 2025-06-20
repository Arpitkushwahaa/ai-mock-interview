"use server";

import { redirect } from "next/navigation";
import { db } from "@/firebase/admin";
import { getCurrentUser } from "./auth.action";

export async function updateUserProfile(formData: FormData) {
  try {
    // Get the current user
    const user = await getCurrentUser();
    if (!user) {
      return { success: false, message: "User not authenticated" };
    }

    // Extract form data
    const name = formData.get("name") as string;
    const bio = formData.get("bio") as string;

    // Validate data
    if (!name || name.trim() === "") {
      return { success: false, message: "Name is required" };
    }

    // Log the update operation for debugging
    console.log(`Updating user profile for ${user.id} with name: ${name}`);
    
    // Update user in Firestore - using set with merge to ensure complete update
    await db.collection("users").doc(user.id).set({
      name,
      bio: bio || "",
      updatedAt: new Date().toISOString(),
    }, { merge: true });
    
    // Verify the update was successful by retrieving the updated document
    const updatedUser = await db.collection("users").doc(user.id).get();
    console.log('Updated user data:', updatedUser.data());

    // Redirect to success page
    redirect("/profile/success");
  } catch (error) {
    console.error("Error updating profile:", error);
    return { success: false, message: "Failed to update profile" };
  }
}
