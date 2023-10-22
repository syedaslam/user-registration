export interface User {
    userName: string;
    email: string;
    addressList: Address[];
}

export interface Address {
    city: string;
    state: string;
    pincode: number;
}

