export interface ITab {
  value: string;
  text: string;
  ref: (node?: Element | null | undefined) => void; 
}