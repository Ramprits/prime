export abstract class Address {
    constructor() {}

    private _address: string | undefined;
    public get address(): string | undefined {
        return this._address;
    }
    public set address(address: string | undefined) {
        this._address = address;
    }
}
export abstract class Contact extends Address {
    private _mobile: string | undefined;
    public get mobile(): string | undefined {
        return this._mobile;
    }
    public set mobile(mobile: string | undefined) {
        this._mobile = mobile;
    }
    private _email: string | undefined;
    public get email(): string | undefined {
        return this._email;
    }
    public set email(email: string | undefined) {
        this._email = email;
    }

    private _office: string | undefined;
    public get office(): string | undefined {
        return this._office;
    }
    public set office(office: string | undefined) {
        this._office = office;
    }

    constructor() {
        super();
    }
}

export class Employee extends Contact {
    private _firstName: string | undefined;
    public set firstName(firstName: string | undefined) {
        this._firstName = firstName;
    }
    public get firstName(): string | undefined {
        return this._firstName;
    }
    private _lastName: string | undefined;
    public get lastName(): string | undefined {
        return this._lastName;
    }
    public set lastName(lastName: string | undefined) {
        this._lastName = lastName;
    }

    constructor() {
        super();
    }
}
