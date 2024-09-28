"use server";
import { db } from '@vercel/postgres';

export async function getcredit(prevState: any, formData: FormData) {
  const query = `
    INSERT INTO credits (name, bike_name, paid)
    VALUES ($1, $2, false)  -- false as the default for paid
    RETURNING *;
  `;

  // Execute the query with a database client (e.g., using 'pg' or another driver)
  const values = [formData.get("name"), formData.get("bike")];
  
  try {
    const result = await db.query(query, values);  // Use the proper method for your DB driver
    // return result.rows[0];  // Return inserted row
    return {
      success: true,
    };
  } catch (error) {
    console.error("Error inserting credit:", error);
    // throw new Error("Failed to insert credit.");
  }

  return {
    success: false,
  };
}
