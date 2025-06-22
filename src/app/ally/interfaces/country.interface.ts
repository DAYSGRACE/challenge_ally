export interface CountryTimezoneDTO {
    timezone: string;
}

export interface CountryDTO {
    id: number;
    name: string;
    capital: string;
    flag: string;
    timezones: CountryTimezoneDTO[];
}
