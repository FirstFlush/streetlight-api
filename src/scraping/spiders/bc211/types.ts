



// loose shape just to give me type hints
export type BC211SearchResultRaw = {
  type?: unknown;
  name_primary?: unknown;
  description?: unknown;
  last_verified_on?: unknown;
  lastVerifiedOn?: unknown;
  contactDetails?: { contact: any }[];
  [key: string]: unknown;
};


export type PdfData = Uint8Array;


export interface BC211SearchResult {
  type: string;
  name_primary: string;
  description: string;
  last_verified_on: string;
  lastVerifiedOn: string;
  contactDetails: ContactDetail[];
}

export interface ContactDetail {
  contact: ContactInfo;
}

export type ContactInfo =
  | PhysicalLocationContact
  | PostalAddressContact
  | PhoneNumberContact
  | EmailAddressContact
  | WebsiteContact;


interface BaseContact {
  purpose?: string;
  label?: string;
  type: string;
}

interface PhysicalLocationContact extends BaseContact {
  latitude: number;
  longitude: number;
  precision: string;
  line1: string;
  city: string;
  stateProvince: string;
  country: string;
  zipPostalCode: string;
}

interface PostalAddressContact extends BaseContact {
  line1: string;
  city: string;
  stateProvince: string;
  country: string;
  zipPostalCode: string;
}

interface PhoneNumberContact extends BaseContact {
  number: string;
}

interface EmailAddressContact extends BaseContact {
  address: string;
}

interface WebsiteContact extends BaseContact {
  url: string;
}
