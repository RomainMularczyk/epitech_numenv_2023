export type Form = {
  id: string;
  required: boolean;
  label: string;
  name: string;
  style?: string;
  type?: string;
}

export type Session = {
  speaker: string;
  title: string;
  date: Date;
  time: string;
  place: string;
  discord: string;
  description: string;
}

export type Challenge = {
  algorithm: "SHA-256",
  challenge: string;
  salt: string;
  signature: string;
  number: number;
}

