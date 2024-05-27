/* eslint-disable react/jsx-props-no-spreading */
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMask, IMaskInput } from "react-imask";
import { schema, FieldValues } from "./validationSchema";
import Head from "../../components/Head";
import OderHeader from "../../components/OderHeader";
import PayOrder from "../../components/OrderCloseAction/PayOrder";
import { Container, Form, Inner } from "./styles";
import useCart from "../../hooks/useCart";
import { CustomerData } from "../../interfaces/CustomerData";

function Payment() {
  const { payOrder } = useCart();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      document: "",
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      creditCardNumber: "",
      creditCardHolder: "",
      creditCardExpiration: "",
      creditCardSecurityCode: "",
    },
    shouldFocusError: false,
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => payOrder(data as CustomerData);

  return (
    <Container>
      <Head title='Carrinho' />
      <OderHeader />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informações pessoais</h4>

          <div className='field'>
            <Controller
              name='fullName'
              control={control}
              render={({ field }) => (
                <label htmlFor='fullName'>
                  Nome e sobrenome
                  <input type='text' id='fullName' autoComplete='name' {...field} />
                  {errors.fullName && <p className='error'>{errors.fullName.message}</p>}
                </label>
              )}
            />
          </div>

          <div className='grouped'>
            <div className='field'>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <label htmlFor='email'>
                    E-mail
                    <input type='email' id='email' autoComplete='email' {...field} />
                    {errors.email && <p className='error'>{errors.email.message}</p>}
                  </label>
                )}
              />
            </div>

            <div className='field'>
              <Controller
                name='mobile'
                control={control}
                render={({ field }) => (
                  <label htmlFor='mobile'>
                    Celular
                    <IMaskInput
                      type='tel'
                      id='mobile'
                      autoComplete='tel'
                      mask='(00) 90000-0000'
                      {...field}
                    />
                    {errors.mobile && <p className='error'>{errors.mobile.message}</p>}
                  </label>
                )}
              />
            </div>

            <div className='field'>
              <Controller
                name='document'
                control={control}
                render={({ field }) => (
                  <label htmlFor='document'>
                    CPF/CNPJ
                    <IMaskInput
                      type='text'
                      id='document'
                      mask={[
                        { mask: "000.000.000-00", maxLength: 11 },
                        { mask: "00.000.000/0000-00" },
                      ]}
                      {...field}
                    />
                    {errors.document && <p className='error'>{errors.document.message}</p>}
                  </label>
                )}
              />
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className='field'>
            <Controller
              name='zipCode'
              control={control}
              render={({ field }) => (
                <label htmlFor='zipCode'>
                  CEP
                  <IMaskInput
                    type='text'
                    id='zipCode'
                    autoComplete='postal-code'
                    mask='00000-000'
                    style={{ width: "120px" }}
                    {...field}
                  />
                  {errors.zipCode && <p className='error'>{errors.zipCode.message}</p>}
                </label>
              )}
            />
          </div>

          <div className='field'>
            <Controller
              name='street'
              control={control}
              render={({ field }) => (
                <label htmlFor='street'>
                  Endereço
                  <input type='text' id='street' autoComplete='name' {...field} />
                  {errors.street && <p className='error'>{errors.street.message}</p>}
                </label>
              )}
            />
          </div>

          <div className='grouped'>
            <div className='field'>
              <Controller
                name='number'
                control={control}
                render={({ field }) => (
                  <label htmlFor='number'>
                    Número
                    <input type='number' id='number' {...field} />
                    {errors.number && <p className='error'>{errors.number.message}</p>}
                  </label>
                )}
              />
            </div>

            <div className='field'>
              <Controller
                name='complement'
                control={control}
                render={({ field }) => (
                  <label htmlFor='complement'>
                    Complemento
                    <input type='text' id='complement' {...field} />
                    {errors.complement && <p className='error'>{errors.complement.message}</p>}
                  </label>
                )}
              />
            </div>
          </div>

          <div className='grouped'>
            <div className='field'>
              <Controller
                name='neighborhood'
                control={control}
                render={({ field }) => (
                  <label htmlFor='neighborhood'>
                    Bairro
                    <input type='text' id='neighborhood' {...field} />
                    {errors.neighborhood && <p className='error'>{errors.neighborhood.message}</p>}
                  </label>
                )}
              />
            </div>

            <div className='field'>
              <Controller
                name='city'
                control={control}
                render={({ field }) => (
                  <label htmlFor='city'>
                    Cidade
                    <input type='text' id='city' {...field} />
                    {errors.city && <p className='error'>{errors.city.message}</p>}
                  </label>
                )}
              />
            </div>

            <div className='field'>
              <Controller
                name='state'
                control={control}
                render={({ field }) => (
                  <label htmlFor='state'>
                    Estado
                    <select id='state' {...field}>
                      <option value=''>Selecione</option>
                      <option value='AC'>Acre</option>
                      <option value='AL'>Alagoas</option>
                      <option value='AP'>Amapá</option>
                      <option value='AM'>Amazonas</option>
                      <option value='BA'>Bahia</option>
                      <option value='CE'>Ceará</option>
                      <option value='ES'>Espírito Santo</option>
                      <option value='GO'>Goiás</option>
                      <option value='MA'>Maranhão</option>
                      <option value='MT'>Mato Grosso</option>
                      <option value='MS'>Mato Grosso do Sul</option>
                      <option value='MG'>Minas Gerais</option>
                      <option value='PA'>Pará</option>
                      <option value='PB'>Paraíba</option>
                      <option value='PR'>Paraná</option>
                      <option value='PE'>Pernambuco</option>
                      <option value='PI'>Piauí</option>
                      <option value='RJ'>Rio de Janeiro</option>
                      <option value='RN'>Rio Grande do Norte</option>
                      <option value='RS'>Rio Grande do Sul</option>
                      <option value='RO'>Rondônia</option>
                      <option value='RR'>Roraima</option>
                      <option value='SC'>Santa Catarina</option>
                      <option value='SP'>São Paulo</option>
                      <option value='SE'>Sergipe</option>
                      <option value='TO'>Tocantins</option>
                      <option value='DF'>Distrito Federal</option>
                    </select>
                    {errors.state && <p className='error'>{errors.state.message}</p>}
                  </label>
                )}
              />
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='filed'>
            <Controller
              name='creditCardNumber'
              control={control}
              render={({ field }) => (
                <label htmlFor='creditCardNumber'>
                  Número do cartão
                  <IMaskInput
                    type='text'
                    id='creditCardNumber'
                    mask={[
                      { mask: "0000 0000 0000 0000" },
                      { mask: "0000 000000 0000", maxLength: 14 },
                      { mask: "0000 000000 00000", maxLength: 15 },
                    ]}
                    {...field}
                  />
                  {errors.creditCardNumber && (
                    <p className='error'>{errors.creditCardNumber.message}</p>
                  )}
                </label>
              )}
            />
          </div>
          <div className='filed'>
            <Controller
              name='creditCardHolder'
              control={control}
              render={({ field }) => (
                <label htmlFor='creditCardHolder'>
                  Nome impresso no cartão
                  <input type='text' id='creditCardHolder' autoComplete='name' {...field} />
                  {errors.creditCardHolder && (
                    <p className='error'>{errors.creditCardHolder.message}</p>
                  )}
                </label>
              )}
            />
          </div>

          <div className='grouped'>
            <div className='filed'>
              <Controller
                name='creditCardExpiration'
                control={control}
                render={({ field }) => (
                  <label htmlFor='creditCardExpiration'>
                    Validade (MM/AA)
                    <IMaskInput
                      type='text'
                      id='creditCardExpiration'
                      mask={[
                        {
                          mask: "MM/YY",
                          blocks: {
                            MM: {
                              mask: IMask.MaskedRange,
                              from: 1,
                              to: 12,
                            },
                            YY: {
                              mask: IMask.MaskedRange,
                              from: new Date().getFullYear() - 2000,
                              to: 99,
                            },
                          },
                        },
                      ]}
                      {...field}
                    />
                    {errors.creditCardExpiration && (
                      <p className='error'>{errors.creditCardExpiration.message}</p>
                    )}
                  </label>
                )}
              />
            </div>
            <div className='filed'>
              <Controller
                name='creditCardSecurityCode'
                control={control}
                render={({ field }) => (
                  <label htmlFor='creditCardSecurityCode'>
                    Código de segurança (CVV)
                    <IMaskInput
                      type='tel'
                      id='creditCardSecurityCode'
                      autoComplete='tel'
                      mask='0000'
                      {...field}
                    />
                    {errors.creditCardSecurityCode && (
                      <p className='error'>{errors.creditCardSecurityCode.message}</p>
                    )}
                  </label>
                )}
              />
            </div>
          </div>
          <PayOrder />
        </Form>
      </Inner>
    </Container>
  );
}

export default Payment;
