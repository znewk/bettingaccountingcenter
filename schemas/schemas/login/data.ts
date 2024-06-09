import { number, z } from "zod";

export const emailRule = z
  .string()
  .email("Неправильный формат e-mail адреса");

export const usernameRule = z
  .string()
  // .email()
  .min(5, "Минимальная длина имени пользователя - 5 символов");

export const phoneRule = z
  .string()
  .regex(
    new RegExp(/^\+\d\(\d{3}\)-\d{3}-\d{2}-\d{2}$/),
    "Формат номера телефона должен быть +X(XXX)-XXX-XX-XX",
  );

export const passwordRule = z
  .string()
  .min(8, "Минимальная длина пароля - 8 символов")
  // .regex(new RegExp(/\d/), "Пароль должен содержать хотя бы 1 цифру") // Цифра
  // .regex(new RegExp(/[a-z]/), "Пароль должен содержать строчные буквы") // строчная буква
  // .regex(new RegExp(/[A-Z]/), "Пароль должен содержать заглавные буквы") // заглавная буква
  // .regex(new RegExp(/^\S*$/), "Пароль не должен содержать пробелов") // Не содержит пробелы
  // .regex(
  //   new RegExp(/(.*[+~!@#$%^&*='">,?].*)/),
  //   'Пароль должен содержать хотя бы один из следующих символов "+~!@#$%^&*=\'">,?"',
  // ) // Содержит ~!@#$%^&*-_=+,.'";:|/?
  // .regex(
  //   new RegExp(/^[^(){}[\]<]*$/),
  //   "Пароль не должен содержать символы '(){}[]<'",
  // ) // Не содержит (){}[]<
  // .regex(
  //   new RegExp(
  //     /^(?:(?!123|234|345|456|567|678|789|890|210|321|432|543|654|765|876|987|098).)*$/,
  //   ),
  //   "Пароль не должен содержать последовательности чисел",
  // )
  // .regex(
  //   new RegExp(/^(?:(?!(\d)\1{2}).)*$/),
  //   "Пароль не должен содержать повторяющиеся цифры",
  // );
