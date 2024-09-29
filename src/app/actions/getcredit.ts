"use server";
import { db } from '@vercel/postgres';

export async function getcredit(prevState: any, formData: FormData) {
  const query = `
    INSERT INTO credits (name, bike_name, phone, paid)
    VALUES ($1, $2, false)  -- false as the default for paid
    RETURNING *;
  `;

  // Execute the query with a database client (e.g., using 'pg' or another driver)
  const values = [formData.get("name"), formData.get("name"), formData.get("phone")];
  
  try {
    await db.query(query, values);  // Use the proper method for your DB driver
    
    return {
      success: 1,
    };
  } catch (error) {
    console.error("Error inserting credit:", error);
    // throw new Error("Failed to insert credit.");
  }

  return {
    success: 2,
  };
}
