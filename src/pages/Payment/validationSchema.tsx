import { isValidCNPJ, isValidCPF, isValidPhone } from "@brazilian-utils/brazilian-utils";
import isValidCreditCard from "card-validator";
import * as yup from "yup";

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Nome e sobrenome, obrigatório.")
      .min(3, "Nome e sobrenome muito curto!")
      .matches(/(\w.+\s).+/gi, "O nome deve conter o sobrenome."),
    email: yup
      .string()
      .email("Por favor, insira um e-mail válido.")
      .required("O e-mail é obrigatório!"),
    mobile: yup
      .string()
      .required("O número de telefone é obrigatório.")
      .matches(/^[0-9]+$/, "O número de telefone deve conter apenas dígitos")
      .transform((value) => value.replace(/[^\d]/g, ""))
      .test("validationMobile", "Celular inválido.", (value) => isValidPhone(value)),
    document: yup
      .string()
      .required("O CPF/CNPJ é obrigatório.")
      .transform((value) => value.replace(/[^\d]/g, ""))
      .test(
        "validateDocument",
        "O CPF/CNPJ é inválido",
        (value) => isValidCPF(value) || isValidCNPJ(value),
      ),
    zipCode: yup
      .string()
      .required("O CEP é obrigatório.")
      .transform((value) => value.replace(/[^\d]+/g, "")),
    street: yup.string().required("O Endereço é obrigatório."),
    number: yup.string().required("O Número é obrigatório."),
    complement: yup.string(),
    neighborhood: yup.string().required("O Bairro é obrigatório."),
    city: yup.string().required("A Cidade é obrigatória."),
    state: yup.string().required("O Estado é obrigatório."),
    creditCardNumber: yup
      .string()
      .required("O número do cartão é obrigatório.")
      .transform((value) => value.replace(/[^\d]/g, ""))
      .test(
        "validateCreditCardNumber",
        "O número do cartão é inválido.",
        (value) => isValidCreditCard.number(value).isValid,
      ),
    creditCardHolder: yup
      .string()
      .required("O nome do titular é obirgatório.")
      .min(3, "O nome do titular deve ser completo.")
      .matches(/(\w.+\s).+/gi, "O nome do titular deve conter o sobrenome."),
    creditCardExpiration: yup
      .string()
      .required("A data de validade é obrigatória.")
      .transform((value) => {
        const [month, year] = value.split("/");
        if (month && year && month.length === 2 && year.length === 2) {
          return new Date(+`20${year}`, +month - 1, 1).toISOString();
        }
        return value;
      })
      .test(
        "validateCreditCardExpiration",
        "A data de validade é inválida.",
        (value) => new Date(value) >= new Date(),
      ),
    creditCardSecurityCode: yup
      .string()
      .required("O CVV é obrigatório.")
      .transform((value) => value.replace(/[^\d]+/g, ""))
      .min(3, "O CVV deve possuir entre 3 e 4 dígitos.")
      .max(4, "O CVV deve possuir entre 3 e 4 dígitos."),
  })
  .required();

export type FieldValues = yup.InferType<typeof schema>;
