export interface CountryListResponse {
  id: string;
  imageSrc: string;
  countryName: string;
  provider: string;
  price: number;
}

export interface CountryDetailResponse {
  id: string;
  countryName: string;
  imageSrc: string;
}

export interface ProductDetailResponse {
  id: number;
  quota: string;
  price: number;
  validity: number;
  type: "DATA" | "UNLIMITED";
}
