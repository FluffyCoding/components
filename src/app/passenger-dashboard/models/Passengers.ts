export interface Passengers {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkedInDate?: number ;
  children: Child[] | null;
}

export interface Child{
  name?: String;
  age?: number;
}
