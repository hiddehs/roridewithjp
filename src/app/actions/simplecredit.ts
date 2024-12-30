'use server'

import { redirect } from 'next/navigation'
import { db } from '@vercel/postgres'

export async function getSimpleCredit (id: string) {
  if (id) {
    console.log(`Saving simple credit registration for ${id}`)
    const query = `
        INSERT INTO credits (name, bike_name, phone, paid)
        VALUES ($1, 'unknown', '0', false) -- false as the default for paid
            RETURNING *;
    `
    try {
      await db.query(query, [`DIRECT PAYMENT ID ${id}`])  // Use the proper method for your DB driver
      return redirect('https://tikkie.me/pay/ptbtjc8t4japo9gg8qo9')
    } catch (error) {
      console.error('Error inserting credit:', error)
      // throw new Error("Failed to insert credit.");
    }
  }

  // https://tikkie.me/pay/ptbtjc8t4japo9gg8qo9
  return redirect('https://tikkie.me/pay/ptbtjc8t4japo9gg8qo9')
}
