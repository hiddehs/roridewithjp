'use server'

import { redirect } from 'next/navigation'
import { db } from '@vercel/postgres'

export async function getSimpleCredit (id: string = 'unk') {
  if (id) {
    console.log(`Saving simple credit registration for ${id}`)
    const query = `
        INSERT INTO credits (name, bike_name, phone, paid)
        VALUES ($1, 'unknown', '0', false) -- false as the default for paid
            RETURNING *;
    `
    try {
      await db.query(query, [`DIRECT PAYMENT ID ${id}`])
      return redirect('https://tikkie.me/pay/ueaob7mkc9402d6blf7c')
    } catch (error) {
      console.error('Error inserting credit:', error)
    }
  }
  return redirect('https://tikkie.me/pay/ueaob7mkc9402d6blf7c')
}
