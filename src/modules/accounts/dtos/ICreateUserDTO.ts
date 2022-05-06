interface ICreateUserDTO {
  org_name: string;
  email: string;
  password: string;
  org_short_descrip: string;
  street: string;
  number: number;
  zipcode: string;
  complement: string;
  city: string;
  state: string;
  district: string;
  id?: string;
}

export { ICreateUserDTO };
