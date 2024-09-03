import nodemailer from 'nodemailer';
import { envs } from '../../config';

export class EmailGateway {
  constructor() {}

  static async sendEmailVerifyAccount({
    email,
    name,
    lastName,
    token,
  }: {
    email: string;
    name: string;
    lastName: string;
    token: string;
  }): Promise<{}> {
    const transport = nodemailer.createTransport({
      host: envs.SMTP_HOST,
      port: Number(envs.SMTP_PORT),
      auth: {
        user: envs.SMTP_USER,
        pass: envs.SMTP_PASS,
      },
    });

    await transport.sendMail({
      from: `${envs.SYSTEM_NAME} <gsgroup@gmail.com>`,
      to: email,
      subject: `${envs.SYSTEM_NAME} - Confirma tu cuenta`,
      text: 'Valida tu dirección email para acceder a tu cuenta por completo',
      html: `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${envs.SYSTEM_NAME} - Confirma tu cuenta</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          </style>
          <style>
            body {
              background-color: #f6f6f6;
              font-family: 'Poppins', sans-serif;
              font-weight: 400;
              font-style: normal;
              font-size: 16px;
              color: #334155;
              margin: 0;
              padding: 0;
            }
            h1 {
              text-align: center;
              color: #059669;
              margin-top: 0;
            }
            p {
              margin: 0;
            }
            a {
              all: unset;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 10px;

              display: flex;
              flex-direction: column;
              gap: 20px;
              align-items: center;
            }
            .content_mail {
              width: 100%;
            }
            .button {
              all: unset;
              cursor: pointer;
              display: inline-block;
              padding: 10px 20px;

              background-color: #10b981;
              color: #fff;
              text-decoration: none;
              border-radius: 5px;
              transition: 0.2s;

              &:hover {
                background-color: #059669;
              }
            }

            .mini_content {
              font-size: 13px;
              color: #a1a1aa;
            }
            .footer {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .alert_message {
              font-size: 13px;
              color: #a1a1aa;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Te damos la bienvenida a ${envs.SYSTEM_NAME} 👋</h1>

            <div class="content_mail">
              <p>Hola ${name} ${lastName}</p>
              <p>Confirma tu dirección de correo para completar tu registro:</p>
            </div>

            <a href="${envs.FRONTEND_URL}/auth/verify/${token}">
              <button class="button">Confirmar mi dirección de correo electrónico</button>
            </a>

            <p class="mini_content">
              SynergyControl es mucho más que un simple sistema; es la solución definitiva para facilitar y optimizar todas
              las operaciones de tu empresa. Con una interfaz intuitiva y poderosas capacidades, nuestra plataforma te permite
              crear productos, gestionar inventarios, realizar ventas, fidelizar clientes, administrar empleados, crear
              tareas, controlar datos, generar informes, gestionar facturación y mucho más, todo en un solo lugar.
            </p>

            <div class="footer">
              <p class="alert_message">Si no creaste esta cuenta, por favor ignora este correo electrónico.</p>
              <p class="alert_message">Este es un servicio de notificación por correo.</p>
              <p class="alert_message">&copy; 2024 InnovaBox Solutions. Todos los derechos reservados</p>
            </div>
          </div>
        </body>
      </html>
      `,
    });

    return {};
  }

  static async sendLoginAccount({
    email,
    name,
    lastName,
    password,
  }: {
    email: string;
    name: string;
    lastName: string;
    password: string;
  }): Promise<{}> {
    const transport = nodemailer.createTransport({
      host: envs.SMTP_HOST,
      port: Number(envs.SMTP_PORT),
      auth: {
        user: envs.SMTP_USER,
        pass: envs.SMTP_PASS,
      },
    });

    await transport.sendMail({
      from: `${envs.SYSTEM_NAME} <gsgroup@gmail.com>`,
      to: email,
      subject: `${envs.SYSTEM_NAME} - Confirma tu cuenta`,
      text: 'Valida tu dirección email para acceder a tu cuenta por completo',
      html: `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${envs.SYSTEM_NAME} - Confirma tu cuenta</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          </style>
          <style>
            body {
              background-color: #f6f6f6;
              font-family: 'Poppins', sans-serif;
              font-weight: 400;
              font-style: normal;
              font-size: 16px;
              color: #334155;
              margin: 0;
              padding: 0;
            }
            h1 {
              text-align: center;
              color: #059669;
              margin-top: 0;
            }
            p {
              margin: 0;
            }
            a {
              all: unset;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 10px;

              display: flex;
              flex-direction: column;
              gap: 20px;
              align-items: center;
            }
            .content_mail {
              width: 100%;
            }
            .password_box {
              position: relative;
              padding: 2px 10px;
              border-radius: 10px;
              background-color: #f1f5f9;
              display: inline-flex;
              flex-direction: row;
              gap: 5px;
              align-items: center;
              justify-content: center;
            }
            .password_content {
              font-weight: 500;
              font-size: 16px;
              color: #047857;
            }
            .button {
              all: unset;
              cursor: pointer;
              display: inline-block;
              padding: 10px 20px;

              background-color: #10b981;
              color: #fff;
              text-decoration: none;
              border-radius: 5px;
              transition: 0.2s;

              &:hover {
                background-color: #059669;
              }
            }
            .mini_content {
              font-size: 13px;
              color: #a1a1aa;
            }
            .footer {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .alert_message {
              font-size: 13px;
              color: #a1a1aa;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Te damos la bienvenida a ${envs.SYSTEM_NAME} 👋</h1>

            <div class="content_mail">
              <p>Hola ${name} ${lastName}</p>
              <p>Te han agregado como colaborador en el sistema SynergyControl, confirma tu cuenta y accede a tu empresa</p>
              <br />
              <p>
                Hemos generado una contraseña temporal para tu acceso. Te pedimos que no la compartas con nadie y que la
                cambies lo antes posible.
              </p>

              <div class="password_box">
                <span class="password_content">${password}</span>
              </div>
            </div>

            <a href="${envs.FRONTEND_URL}/auth">
              <button class="button">Ir a mi cuenta</button>
            </a>

            <p class="mini_content">
              SynergyControl es mucho más que un simple sistema, es la solución definitiva para facilitar y optimizar todas
              las operaciones empresariales. Con una interfaz intuitiva y poderosas capacidades, nuestra plataforma te permite
              crear productos, gestionar inventarios, realizar ventas, fidelizar clientes, administrar empleados, crear
              tareas, controlar datos, generar informes, gestionar facturación y mucho más, todo en un solo lugar.
            </p>

            <div class="footer">
              <p class="alert_message">Si no creaste esta cuenta, por favor ignora este correo electrónico.</p>
              <p class="alert_message">Este es un servicio de notificación por correo.</p>
              <p class="alert_message">&copy; 2024 InnovaBox Solutions. Todos los derechos reservados</p>
            </div>
          </div>
        </body>
      </html>
      `,
    });

    return {};
  }

  static async sendEmailRecoverPassword({
    email,
    name,
    lastName,
    token,
  }: {
    email: string;
    name: string;
    lastName: string;
    token: string;
  }): Promise<{}> {
    const transport = nodemailer.createTransport({
      host: envs.SMTP_HOST,
      port: Number(envs.SMTP_PORT),
      auth: {
        user: envs.SMTP_USER,
        pass: envs.SMTP_PASS,
      },
    });

    await transport.sendMail({
      from: `${envs.SYSTEM_NAME} <gsgroup@gmail.com>`,
      to: email,
      subject: `${envs.SYSTEM_NAME} - Recuperar mi cuenta`,
      text: 'Recupera el acceso a tu cuenta',
      html: `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${envs.SYSTEM_NAME} - Confirma tu cuenta</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          </style>
          <style>
            body {
              background-color: #f6f6f6;
              font-family: 'Poppins', sans-serif;
              font-weight: 400;
              font-style: normal;
              font-size: 16px;
              color: #334155;
              margin: 0;
              padding: 0;
            }
            h1 {
              text-align: center;
              color: #059669;
              margin-top: 0;
            }
            p {
              margin: 0;
            }
            a {
              all: unset;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 10px;

              display: flex;
              flex-direction: column;
              gap: 20px;
              align-items: center;
            }
            .content_mail {
              width: 100%;
            }
            .button {
              all: unset;
              cursor: pointer;
              display: inline-block;
              padding: 10px 20px;

              background-color: #10b981;
              color: #fff;
              text-decoration: none;
              border-radius: 5px;
              transition: 0.2s;

              &:hover {
                background-color: #059669;
              }
            }
            .mini_content {
              font-size: 13px;
              color: #a1a1aa;
            }
            .footer {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .alert_message {
              font-size: 13px;
              color: #a1a1aa;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Cambiar mi contraseña 🙈</h1>

            <div class="content_mail">
              <p>Hola ${name} ${lastName}</p>
              <p>Vamos a recuperar el acceso a tu cuenta</p>
              <br />
              <p>
                Nos has solicitado recuperar el acceso a SynergyControl. No te preocupes, es muy común. Para crear una nueva
                contraseña, haz clic en el siguiente enlace:
              </p>
            </div>

            <a href="${envs.FRONTEND_URL}/auth/change-password/${token}">
              <button class="button">Cambiar mi contraseña</button>
            </a>

            <p class="mini_content">
              SynergyControl es mucho más que un simple sistema, es la solución definitiva para facilitar y optimizar todas
              las operaciones empresariales. Con una interfaz intuitiva y poderosas capacidades, nuestra plataforma te permite
              crear productos, gestionar inventarios, realizar ventas, fidelizar clientes, administrar empleados, crear
              tareas, controlar datos, generar informes, gestionar facturación y mucho más, todo en un solo lugar.
            </p>

            <div class="footer">
              <p class="alert_message">
                Si no solicitaste este cambio de contraseña, por favor ignora este correo electrónico.
              </p>
              <p class="alert_message">Este es un servicio de notificación por correo.</p>
              <p class="alert_message">&copy; 2024 InnovaBox Solutions. Todos los derechos reservados</p>
            </div>
          </div>
        </body>
      </html>
      `,
    });

    return {};
  }
}
