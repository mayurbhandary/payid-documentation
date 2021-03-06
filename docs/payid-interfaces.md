---
id: payid-interfaces
title: Interfaces
sidebar_label: Interfaces
---

See also: [PayID API Reference](https://api.payid.org).

The PayID protocol includes the following interface definitions.

### PaymentInformation type

```ts
interface PaymentInformation {
  addresses: Address[]
  payId?: string
  memo?: string
}
```

### AddressDetailsType

```ts
enum AddressDetailsType {
  CryptoAddress = 'CryptoAddressDetails'
  FiatAddress = 'FiatAddressDetails'
}
```

### CryptoAddressDetails

```ts
interface CryptoAddressDetails {
  address: string
  tag?: string
}
```

### FiatAddressDetails

```ts
interface FiatAddressDetails {
  accountNumber: string
  routingNumber?: string
}
```

### Address

```ts
interface Address {
  paymentNetwork: string
  environment?: string
  addressDetailsType: AddressDetailsType
  addressDetails: CryptoAddressDetails | FiatAddressDetails
}
```
