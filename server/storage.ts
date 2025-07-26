// Simplified types without Drizzle dependencies
export interface ContactInquiry {
  id: number;
  fullName: string;
  email: string;
  businessName: string;
  phoneNumber: string | null;
  industry: string | null;
  businessChallenge: string;
  preferredContactMethod: string | null;
  createdAt: Date;
}

export interface InsertContactInquiry {
  fullName: string;
  email: string;
  businessName: string;
  phoneNumber?: string | null;
  industry?: string | null;
  businessChallenge: string;
  preferredContactMethod?: string | null;
}

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: number): Promise<ContactInquiry | undefined>;
}

export class MemStorage implements IStorage {
  private contactInquiries: Map<number, ContactInquiry>;
  private currentInquiryId: number;

  constructor() {
    this.contactInquiries = new Map();
    this.currentInquiryId = 1;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentInquiryId++;
    const inquiry: ContactInquiry = { 
      ...insertInquiry, 
      id,
      phoneNumber: insertInquiry.phoneNumber ?? null,
      industry: insertInquiry.industry ?? null,
      preferredContactMethod: insertInquiry.preferredContactMethod ?? null,
      createdAt: new Date()
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async getContactInquiry(id: number): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }
}

export const storage = new MemStorage();
