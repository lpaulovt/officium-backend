import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash(process.env.ADMIN_PASSWORD, 8);

  await connection.query(`
    INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
      values('${id}', 'admin', 'email@admin.com.br', '${password}', true, 'now()', 'xxxxxx')
  `);

  await connection.close;
}

create().then(() => console.log("User admin created!"));
