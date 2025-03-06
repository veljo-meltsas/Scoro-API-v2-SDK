export interface IExternalData {
  external_id?: string
  external_system?: string
  external_modified_date?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  uid?: string
  is_up_to_date?: boolean
  external_guests?: string[] // Array of external guests linked to calendar event
}
