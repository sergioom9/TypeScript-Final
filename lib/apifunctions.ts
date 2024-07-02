type PhoneInfo = {
  is_valid: boolean;
  country: string;
};

type CountryInfo = {
  capital: string;
};

type CapitalInfo = {
  datetime: string;
};

export const getInformationFromPhone = async (
  phone: string
): Promise<PhoneInfo> => {
  const url = "https://api.api-ninjas.com/v1/validatephone?number=" + phone;
  console.log("getinfofromphone");
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": "nyUaq934E+v/f8wd3lGEdQ==Zxh8OOK7GzEP9WAb",
    },
  });

  if (data.status !== 200) {
    console.error("Error:", data.status, data.statusText);
    throw new Error("Error");
  }

  const response = await data.json();
  return response;
};

export const getInformationFromCountry = async (
  country: string
): Promise<CountryInfo[]> => {
  console.log("getinfofromcountry");
  const url = "https://api.api-ninjas.com/v1/country?name=" + country;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": "nyUaq934E+v/f8wd3lGEdQ==Zxh8OOK7GzEP9WAb",
    },
  });

  if (data.status !== 200) {
    console.error("Error:", data.status, data.statusText);
    throw new Error("Error");
  }

  const response = await data.json();
  return response;
};

export const getCapitalInfo = async (capital: string): Promise<CapitalInfo> => {
  console.log("getinfofromcapital");
  const url = "https://api.api-ninjas.com/v1/worldtime?city=" + capital;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": "nyUaq934E+v/f8wd3lGEdQ==Zxh8OOK7GzEP9WAb",
    },
  });
  if (data.status !== 200) {
    console.error("Error:", data.status, data.statusText);
    throw new Error("Error");
  }
  const response = await data.json();
  return response;
};
