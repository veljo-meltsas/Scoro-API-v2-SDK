import { IAddress } from '../../shared/types/address.type'

export interface IInvoice {
  payment_type: 'banktransfer' | 'cash' | 'cardpayment' | 'credit' | 'barter'
  fine: string
  quote_id: number[]
  order_id: number[]
  prepayment_id: number[]
  credited_invoices: number[]
  prepayment_sum?: number // Only for view command
  real_estate_id: number
  reference_no: string
  company_name?: string // Available in view/modify request
  person_name?: string // Available in view/modify request
  company_address?: IAddress // Available in view request
  project_name?: string // Used only for user-based API
  vat_code?: string // Only used if line-based VAT setting is not activated
  currency_rate?: number // Exchange rate when invoice is issued
  paid_sum?: number // Received amount
  payment_fee?: number // Payment fee
  receivable_sum?: number // Receivable amount
  generation_type?: 'manual' | 'automated' // Possible values manual (created by user) or automated (generated by scheduled invoice rule)
  scheduled_invoice_id?: number // Recurring invoice ID
  accounting_period_from?: string // Accounting period start
  accounting_period_to?: string // Accounting period end
  pay_now_link: string
  is_role_based: boolean // If document is role based or service based
  local_price_list_id?: number // Local price list ID, available for role-based documents
  id: number // Document ID
  no: number // Document number
  discount: number // Overall discount
  discount2?: number | null // First additional discount
  discount3?: number | null // Second additional discount
  sum: number // Total sum after discounts without VAT
  vat_sum: number // Total VAT sum
  vat: number // VAT percent
  vat_code_id: number // Invoice default vat_code_id
  company_id: number // ID of the related client
  person_id: number // ID of the related contact person
  company_address_id: number // If a company has multiple addresses
  interested_party_id: number // ID of the interested party
  interested_party_address_id: number // See company_address_id
  project_id: number // ID of the related project
  currency: string // Used currency
  owner_id: number // User ID of the user that is responsible for the document
  owner_email: string // Email of user that is responsible for the document
  date: string // Document date (YYYY-mm-dd)
  deadline: string // Document deadline (YYYY-mm-dd)
  status: 'paid' | 'unpaid' // Status of the document
  description: string // Document description
  account_id: string // Related business entity
  is_sent: boolean // If document is sent
  lines?: IInvoiceLine[] // Document lines, null for list request and filled for view requests
  modified_date: string // The date when document was last modified (YYYY-mm-dd HH:ii:ss)
  created_date: string // The date and time when document was created (YYYY-mm-dd HH:ii:ss)
  custom_fields?: { id: string; name: string; value: unknown; type: string }[] // Custom fields, only filled on view requests
  is_deleted?: boolean // Is deleted
  deleted_date?: string // The date when object was deleted (DATE_ISO8601 - Y-m-d\TH:i:sP)
}

interface IDepotAmount {
  depot_id: number
  amount: number
  serial_no: string
}

interface IInvoiceLine {
  depot_amounts?: IDepotAmount[]
  dates?: Record<string, number> // Empty on list requests
  product_name?: string // Available in view/modify request
  product_code?: string // Only used if "Product code" addon is activated
  finance_account_name?: string // Name of the related finance account
  finance_object_name?: string // Name of the related accounting object
  finance_object_symbol?: string // Symbol of the related accounting object
  supplier_name?: string // Name of the contact supplying the product on this line
  project_name?: string // Name of the related project
  vat_code?: string // VAT code
  doer_email?: string // Email of the user doing the work
  role_name?: string | null // Name of the role doing the work
  id: number // Document line ID
  product_id: number // ID of the product
  comment?: string // Line comment
  comment2?: string // Second line comment
  price: number // Unit price
  amount: number // Amount
  amount2?: number // Additional amount
  discount?: number // Line discount
  sum: number // Line sum without VAT
  vat?: number // Line tax percent
  vat_code_id?: number // Line tax id
  unit?: string // Unit name
  finance_object_id?: number // ID of the related accounting object
  finance_account_id?: number // ID of the related finance account
  finance_account_symbol?: string // Symbol of the related finance account
  cost?: number // Line cost
  supplier_id?: number // ID of the contact supplying the product on this line
  doer_id?: number // ID of the user doing the work
  role_id?: number | null // ID of the role doing the work
  is_internal?: boolean // Shows whether line is counted as internal or external
  project_id?: number // ID of the related project
  custom_fields?: { id: string; name: string; value: unknown; type: string }[] // Custom fields, only filled on view requests
}
