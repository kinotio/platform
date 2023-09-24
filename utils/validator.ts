import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator'

export const validateEmail = ({ email }: { email: string }) => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

export const validatePostalCode = ({
  postalCode,
  countryCode
}: {
  postalCode: string
  countryCode: string
}) => {
  if (postalCode && postcodeValidatorExistsForCountry(countryCode)) {
    return postcodeValidator(postalCode, countryCode)
  }

  return true
}
