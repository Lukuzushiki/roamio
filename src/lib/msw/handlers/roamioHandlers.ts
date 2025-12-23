import {
  Australia,
  Europe,
  Germany,
  Indonesia,
  Japan,
  Marocco,
  UnitedKingdom,
  UnitedStates,
} from "@/src/assets";
import { http, HttpResponse } from "msw";
import {
  productDataList,
  productUnlimitedList,
} from "./mockDataResponse/productListMock";

export const roamioHandlers = [
  http.get("*/countries", () => {
    return HttpResponse.json([
      {
        id: "europe",
        imageSrc: Europe,
        countryName: "Europe",
        price: 100,
        provider: "Roamio",
      },
      {
        id: "australia",
        imageSrc: Australia,
        countryName: "Australia",
        price: 10,
        provider: "Roamio",
      },
      {
        id: "united-states",
        imageSrc: UnitedStates,
        countryName: "United States",
        price: 10,
        provider: "Roamio",
      },
      {
        id: "indonesia",
        imageSrc: Indonesia,
        countryName: "Indonesia",
        price: 10,
        provider: "Roamio",
      },
      {
        id: "germany",
        imageSrc: Germany,
        countryName: "Germany",
        price: 10,
        provider: "Roamio",
      },
      {
        id: "united-kingdom",
        imageSrc: UnitedKingdom,
        countryName: "United Kingdom",
        price: 10,
        provider: "Roamio",
      },
      {
        id: "marocco",
        imageSrc: Marocco,
        countryName: "Marocco",
        price: 10,
        provider: "Roamio",
      },
      {
        id: "japan",
        imageSrc: Japan,
        countryName: "Japan",
        price: 10,
        provider: "Roamio",
      },
    ]);
  }),
  http.get("*/countries/product/:id", () => {
    return HttpResponse.json([...productDataList, ...productUnlimitedList]);
  }),
  http.get("*/countries/:id", ({ params }) => {
    const { id } = params;

    switch (id) {
      case "europe":
        return HttpResponse.json({
          id: id,
          countryName: "Europe",
          imageSrc: Europe,
        });
      case "australia":
        return HttpResponse.json({
          id: id,
          countryName: "Australia",
          imageSrc: Australia,
        });
      case "united-states":
        return HttpResponse.json({
          id: id,
          countryName: "United States",
          imageSrc: UnitedStates,
        });
      case "indonesia":
        return HttpResponse.json({
          id: id,
          countryName: "Indonesia",
          imageSrc: Indonesia,
        });
      case "germany":
        return HttpResponse.json({
          id: id,
          countryName: "Germany",
          imageSrc: Germany,
        });
      case "united-kingdom":
        return HttpResponse.json({
          id: id,
          countryName: "United Kingdom",
          imageSrc: UnitedKingdom,
        });
      case "marocco":
        return HttpResponse.json({
          id: id,
          countryName: "Marocco",
          imageSrc: Marocco,
        });
      case "japan":
        return HttpResponse.json({
          id: id,
          countryName: "Japan",
          imageSrc: Japan,
        });
      default:
        return HttpResponse.json({
          id: id,
          countryName: "Europe",
          imageSrc: Europe,
        });
    }
  }),
  http.post("*/auth/login", async ({ request }) => {
    const { email, password } = (await request.json()) as {
      email: string;
      password: string;
    };

    if (email === "" || password === "") {
      return HttpResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    return HttpResponse.json({ token: "mocked_jwt_token" });
  }),
  http.post("*/auth/register", async ({ request }) => {
    const { email, password, name } = (await request.json()) as {
      email: string;
      password: string;
      name: string;
    };

    if (email === "" || password === "" || name === "") {
      return HttpResponse.json(
        { message: "Email, password, and name are required." },
        { status: 400 }
      );
    }

    return HttpResponse.json({ name: name, email: email });
  }),
  http.post("*/checkout", async ({ request }) => {
    const { product } = (await request.json()) as {
      product: {
        id: number;
        type: "DATA" | "UNLIMITED";
        quota: string;
        price: number;
        validity: number;
      };
    };

    if (!product || !product.id) {
      return HttpResponse.json(
        { message: "Product information is required." },
        { status: 400 }
      );
    }

    return HttpResponse.json({ ...product }, { status: 200 });
  }),
];
