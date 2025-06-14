// import { z } from 'zod';

// export const contactInfoSchema = z.discriminatedUnion('type', [
//   z.object({
//     type: z.literal('PhysicalLocation'),
//     latitude: z.number(),
//     longitude: z.number(),
//     precision: z.string(),
//     purpose: z.string().optional(),
//     label: z.string().optional(),
//     line1: z.string(),
//     city: z.string(),
//     stateProvince: z.string(),
//     country: z.string(),
//     zipPostalCode: z.string(),
//   }),
//   z.object({
//     type: z.literal('PostalAddress'),
//     purpose: z.string().optional(),
//     label: z.string().optional(),
//     line1: z.string(),
//     city: z.string(),
//     stateProvince: z.string(),
//     country: z.string(),
//     zipPostalCode: z.string(),
//   }),
//   z.object({
//     type: z.literal('PhoneNumber'),
//     purpose: z.string().optional(),
//     label: z.string().optional(),
//     number: z.string(),
//   }),
//   z.object({
//     type: z.literal('EmailAddress'),
//     purpose: z.string().optional(),
//     label: z.string().optional(),
//     address: z.string(),
//   }),
//   z.object({
//     type: z.literal('Website'),
//     purpose: z.string().optional(),
//     label: z.string().optional(),
//     url: z.string(),
//   }),
// ]);

// export const bc211Schema = z.object({
//   type: z.string(),
//   name_primary: z.string(),
//   description: z.string(),
//   last_verified_on: z.string(),
//   lastVerifiedOn: z.string().optional(),
//   contactDetails: z.array(contactInfoSchema),
// });

// export type BC211SearchResult = z.infer<typeof bc211Schema>;
