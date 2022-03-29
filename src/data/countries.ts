/* eslint-disable @typescript-eslint/naming-convention */

export interface Country {
  ID: number;
  COUNTRY_NAME: string;
  COUNTRY_SUB?: string;
  ISO?: string;
  EMOJI?: string;
}

export const countries: Country[] = [
  {
    ID: 1,
    COUNTRY_NAME: 'Afghanistan',
    ISO: 'AF',
    EMOJI: '🇦🇫'
  },
  {
    ID: 2,
    COUNTRY_NAME: 'Albania',
    ISO: 'AL',
    EMOJI: '🇦🇱'
  },
  {
    ID: 3,
    COUNTRY_NAME: 'Algeria',
    ISO: 'DZ',
    EMOJI: '🇩🇿'
  },
  {
    ID: 4,
    COUNTRY_NAME: 'Andorra',
    ISO: 'AD',
    EMOJI: '🇦🇩'
  },
  {
    ID: 5,
    COUNTRY_NAME: 'Angola',
    ISO: 'AO',
    EMOJI: '🇦🇴'
  },
  {
    ID: 6,
    COUNTRY_NAME: 'Antigua and Barbuda',
    ISO: 'AG',
    EMOJI: '🇦🇬'
  },
  {
    ID: 7,
    COUNTRY_NAME: 'Argentina',
    ISO: 'AR',
    EMOJI: '🇦🇷'
  },
  {
    ID: 8,
    COUNTRY_NAME: 'Armenia',
    ISO: 'AM',
    EMOJI: '🇦🇲'
  },
  {
    ID: 9,
    COUNTRY_NAME: 'Aruba',
    ISO: 'AW',
    EMOJI: '🇦🇼'
  },
  {
    ID: 10,
    COUNTRY_NAME: 'Australia',
    ISO: 'AU',
    EMOJI: '🇦🇺'
  },
  {
    ID: 11,
    COUNTRY_NAME: 'Austria',
    ISO: 'AT',
    EMOJI: '🇦🇹'
  },
  {
    ID: 12,
    COUNTRY_NAME: 'Azerbaijan',
    ISO: 'AZ',
    EMOJI: '🇦🇿'
  },
  {
    ID: 13,
    COUNTRY_NAME: 'Bahrain',
    ISO: 'BH',
    EMOJI: '🇧🇭'
  },
  {
    ID: 14,
    COUNTRY_NAME: 'Bangladesh',
    ISO: 'BD',
    EMOJI: '🇧🇩'
  },
  {
    ID: 15,
    COUNTRY_NAME: 'Barbados',
    ISO: 'BB',
    EMOJI: '🇧🇧'
  },
  {
    ID: 16,
    COUNTRY_NAME: 'Belarus',
    ISO: 'BY',
    EMOJI: '🇧🇾'
  },
  {
    ID: 17,
    COUNTRY_NAME: 'Belgium',
    ISO: 'BE',
    EMOJI: '🇧🇪'
  },
  {
    ID: 18,
    COUNTRY_NAME: 'Belize',
    ISO: 'BZ',
    EMOJI: '🇧🇿'
  },
  {
    ID: 19,
    COUNTRY_NAME: 'Benin',
    ISO: 'BJ',
    EMOJI: '🇧🇯'
  },
  {
    ID: 20,
    COUNTRY_NAME: 'Bhutan',
    ISO: 'BT',
    EMOJI: '🇧🇹'
  },
  {
    ID: 21,
    COUNTRY_NAME: 'Bolivia',
    ISO: 'BO',
    EMOJI: '🇧🇴'
  },
  {
    ID: 22,
    COUNTRY_NAME: 'Bosnia and Herzegovina',
    ISO: 'BA',
    EMOJI: '🇧🇦'
  },
  {
    ID: 23,
    COUNTRY_NAME: 'Botswana',
    ISO: 'BW',
    EMOJI: '🇧🇼'
  },
  {
    ID: 24,
    COUNTRY_NAME: 'Brazil',
    ISO: 'BR',
    EMOJI: '🇧🇷'
  },
  {
    ID: 25,
    COUNTRY_NAME: 'Brunei Darussalam',
    COUNTRY_SUB: 'formerly Burma',
    ISO: 'BN',
    EMOJI: '🇧🇳'
  },
  {
    ID: 26,
    COUNTRY_NAME: 'Bulgaria',
    ISO: 'BG',
    EMOJI: '🇧🇬'
  },
  {
    ID: 27,
    COUNTRY_NAME: 'Burkina Faso',
    ISO: 'BF',
    EMOJI: '🇧🇫'
  },
  {
    ID: 28,
    COUNTRY_NAME: 'Myanmar',
    COUNTRY_SUB: 'formerly Burma',
    ISO: 'MM',
    EMOJI: '🇲🇲'
  },
  {
    ID: 29,
    COUNTRY_NAME: 'Burundi',
    ISO: 'BI',
    EMOJI: '🇧🇮'
  },
  {
    ID: 30,
    COUNTRY_NAME: 'Cambodia',
    ISO: 'KH',
    EMOJI: '🇰🇭'
  },
  {
    ID: 31,
    COUNTRY_NAME: 'Cameroon',
    ISO: 'CM',
    EMOJI: '🇨🇲'
  },
  {
    ID: 32,
    COUNTRY_NAME: 'Canada',
    ISO: 'CA',
    EMOJI: '🇨🇦'
  },
  {
    ID: 33,
    COUNTRY_NAME: 'Canada',
    COUNTRY_SUB: 'formerly Dominion of Newfoundland',
    ISO: 'CA',
    EMOJI: '🇨🇦'
  },
  {
    ID: 34,
    COUNTRY_NAME: 'Cape Verde',
    ISO: 'CV',
    EMOJI: '🇨🇻'
  },
  {
    ID: 35,
    COUNTRY_NAME: 'Central African Republic',
    ISO: 'CF',
    EMOJI: '🇨🇫'
  },
  {
    ID: 36,
    COUNTRY_NAME: 'Chad',
    ISO: 'TD',
    EMOJI: '🇹🇩'
  },
  {
    ID: 37,
    COUNTRY_NAME: 'Chile',
    ISO: 'CL',
    EMOJI: '🇨🇱'
  },
  {
    ID: 38,
    COUNTRY_NAME: 'Colombia',
    ISO: 'CO',
    EMOJI: '🇨🇴'
  },
  {
    ID: 39,
    COUNTRY_NAME: 'Comoros',
    ISO: 'KM',
    EMOJI: '🇰🇲'
  },
  {
    ID: 40,
    COUNTRY_NAME: 'Cook Islands',
    ISO: 'CK',
    EMOJI: '🇨🇰'
  },
  {
    ID: 41,
    COUNTRY_NAME: 'Costa Rica',
    ISO: 'CR',
    EMOJI: '🇨🇷'
  },
  {
    ID: 42,
    COUNTRY_NAME: 'Croatia',
    ISO: 'HR',
    EMOJI: '🇭🇷'
  },
  {
    ID: 43,
    COUNTRY_NAME: 'Cuba',
    ISO: 'CU',
    EMOJI: '🇨🇺'
  },
  {
    ID: 44,
    COUNTRY_NAME: 'Cyprus',
    ISO: 'CY',
    EMOJI: '🇨🇾'
  },
  {
    ID: 45,
    COUNTRY_NAME: 'Czechia',
    ISO: 'CZ',
    EMOJI: '🇨🇿'
  },
  {
    ID: 46,
    COUNTRY_NAME: 'Democratic Republic of the Congo',
    ISO: 'CD',
    EMOJI: '🇨🇩'
  },
  {
    ID: 47,
    COUNTRY_NAME: 'Denmark',
    ISO: 'DK',
    EMOJI: '🇩🇰'
  },
  {
    ID: 48,
    COUNTRY_NAME: 'Djibouti',
    ISO: 'DJ',
    EMOJI: '🇩🇯'
  },
  {
    ID: 49,
    COUNTRY_NAME: 'Dominica',
    ISO: 'DM',
    EMOJI: '🇩🇲'
  },
  {
    ID: 50,
    COUNTRY_NAME: 'Dominican Republic',
    ISO: 'DO',
    EMOJI: '🇩🇴'
  },
  {
    ID: 51,
    COUNTRY_NAME: 'Ecuador',
    ISO: 'EC',
    EMOJI: '🇪🇨'
  },
  {
    ID: 52,
    COUNTRY_NAME: 'Egypt',
    ISO: 'EG',
    EMOJI: '🇪🇬'
  },
  {
    ID: 53,
    COUNTRY_NAME: 'El Salvador',
    ISO: 'SV',
    EMOJI: '🇸🇻'
  },
  {
    ID: 54,
    COUNTRY_NAME: 'Equatorial Guinea',
    ISO: 'GQ',
    EMOJI: '🇬🇶'
  },
  {
    ID: 55,
    COUNTRY_NAME: 'Eritrea',
    ISO: 'ER',
    EMOJI: '🇪🇷'
  },
  {
    ID: 56,
    COUNTRY_NAME: 'Estonia',
    ISO: 'EE',
    EMOJI: '🇪🇪'
  },
  {
    ID: 57,
    COUNTRY_NAME: 'Eswatini',
    COUNTRY_SUB: 'half-series allocation',
    ISO: 'SZ',
    EMOJI: '🇸🇿'
  },
  {
    ID: 58,
    COUNTRY_NAME: 'Ethiopia',
    ISO: 'ET',
    EMOJI: '🇪🇹'
  },
  {
    ID: 59,
    COUNTRY_NAME: 'Federated States of Micronesia',
    ISO: 'FM',
    EMOJI: '🇫🇲'
  },
  {
    ID: 60,
    COUNTRY_NAME: 'Fiji',
    COUNTRY_SUB: 'half-series allocation',
    ISO: 'FJ',
    EMOJI: '🇫🇯'
  },
  {
    ID: 61,
    COUNTRY_NAME: 'Finland',
    ISO: 'FI',
    EMOJI: '🇫🇮'
  },
  {
    ID: 62,
    COUNTRY_NAME: 'France',
    COUNTRY_SUB: 'and its Overseas departments\/territories',
    ISO: 'FR',
    EMOJI: '🇫🇷'
  },
  {
    ID: 63,
    COUNTRY_NAME: 'Gabon',
    ISO: 'GA',
    EMOJI: '🇬🇦'
  },
  {
    ID: 64,
    COUNTRY_NAME: 'Georgia',
    ISO: 'GE',
    EMOJI: '🇬🇪'
  },
  {
    ID: 65,
    COUNTRY_NAME: 'Germany',
    ISO: 'DE',
    EMOJI: '🇩🇪'
  },
  {
    ID: 66,
    COUNTRY_NAME: 'Ghana',
    ISO: 'GH',
    EMOJI: '🇬🇭'
  },
  {
    ID: 67,
    COUNTRY_NAME: 'Greece',
    ISO: 'GR',
    EMOJI: '🇬🇷'
  },
  {
    ID: 68,
    COUNTRY_NAME: 'Grenada',
    ISO: 'GD',
    EMOJI: '🇬🇩'
  },
  {
    ID: 69,
    COUNTRY_NAME: 'Guatemala',
    ISO: 'GT',
    EMOJI: '🇬🇹'
  },
  {
    ID: 70,
    COUNTRY_NAME: 'Guinea',
    ISO: 'GN',
    EMOJI: '🇬🇳'
  },
  {
    ID: 71,
    COUNTRY_NAME: 'Guinea-Bissau',
    ISO: 'GW',
    EMOJI: '🇬🇼'
  },
  {
    ID: 72,
    COUNTRY_NAME: 'Guyana',
    ISO: 'GY',
    EMOJI: '🇬🇾'
  },
  {
    ID: 73,
    COUNTRY_NAME: 'Haiti',
    ISO: 'HT',
    EMOJI: '🇭🇹'
  },
  {
    ID: 74,
    COUNTRY_NAME: 'Honduras',
    ISO: 'HN',
    EMOJI: '🇭🇳'
  },
  {
    ID: 75,
    COUNTRY_NAME: 'Hong Kong',
    COUNTRY_SUB: 'Special Administrative Region of the People\'s Republic of China',
    ISO: 'HK',
    EMOJI: '🇭🇰'
  },
  {
    ID: 76,
    COUNTRY_NAME: 'Hungary',
    ISO: 'HU',
    EMOJI: '🇭🇺'
  },
  {
    ID: 77,
    COUNTRY_NAME: 'Iceland',
    ISO: 'IS',
    EMOJI: '🇮🇸'
  },
  {
    ID: 78,
    COUNTRY_NAME: 'India',
    ISO: 'IN',
    EMOJI: '🇮🇳'
  },
  {
    ID: 79,
    COUNTRY_NAME: 'Indonesia',
    ISO: 'ID',
    EMOJI: '🇮🇩'
  },
  {
    ID: 80,
    COUNTRY_NAME: 'International Civil Aviation Organization',
    COUNTRY_SUB: 'international organization'
  },
  {
    ID: 81,
    COUNTRY_NAME: 'Iran',
    ISO: 'IR',
    EMOJI: '🇮🇷'
  },
  {
    ID: 82,
    COUNTRY_NAME: 'Iraq',
    ISO: 'IQ',
    EMOJI: '🇮🇶'
  },
  {
    ID: 83,
    COUNTRY_NAME: 'Ireland',
    ISO: 'IE',
    EMOJI: '🇮🇪'
  },
  {
    ID: 84,
    COUNTRY_NAME: 'Israel',
    ISO: 'IL',
    EMOJI: '🇮🇱'
  },
  {
    ID: 85,
    COUNTRY_NAME: 'Italy',
    ISO: 'IT',
    EMOJI: '🇮🇹'
  },
  {
    ID: 86,
    COUNTRY_NAME: 'Ivory Coast',
    ISO: 'CI',
    EMOJI: '🇨🇮'
  },
  {
    ID: 87,
    COUNTRY_NAME: 'Jamaica',
    ISO: 'JM',
    EMOJI: '🇯🇲'
  },
  {
    ID: 88,
    COUNTRY_NAME: 'Japan',
    ISO: 'JP',
    EMOJI: '🇯🇵'
  },
  {
    ID: 89,
    COUNTRY_NAME: 'Jordan',
    ISO: 'JO',
    EMOJI: '🇯🇴'
  },
  {
    ID: 90,
    COUNTRY_NAME: 'Kazakhstan',
    ISO: 'KZ',
    EMOJI: '🇰🇿'
  },
  {
    ID: 91,
    COUNTRY_NAME: 'Kenya',
    ISO: 'KE',
    EMOJI: '🇰🇪'
  },
  {
    ID: 92,
    COUNTRY_NAME: 'Kiribati',
    ISO: 'KI',
    EMOJI: '🇰🇮'
  },
  {
    ID: 93,
    COUNTRY_NAME: 'Kuwait',
    ISO: 'KW',
    EMOJI: '🇰🇼'
  },
  {
    ID: 94,
    COUNTRY_NAME: 'Kyrgyzstan',
    ISO: 'KG',
    EMOJI: '🇰🇬'
  },
  {
    ID: 95,
    COUNTRY_NAME: 'Laos',
    COUNTRY_SUB: 'officially Lao People\'s Democratic Republic',
    ISO: 'LA',
    EMOJI: '🇱🇦'
  },
  {
    ID: 96,
    COUNTRY_NAME: 'Latvia',
    ISO: 'LV',
    EMOJI: '🇱🇻'
  },
  {
    ID: 97,
    COUNTRY_NAME: 'Lebanon',
    ISO: 'LB',
    EMOJI: '🇱🇧'
  },
  {
    ID: 98,
    COUNTRY_NAME: 'Lesotho',
    ISO: 'LS',
    EMOJI: '🇱🇸'
  },
  {
    ID: 99,
    COUNTRY_NAME: 'Liberia',
    ISO: 'LR',
    EMOJI: '🇱🇷'
  },
  {
    ID: 100,
    COUNTRY_NAME: 'Libya',
    ISO: 'LY',
    EMOJI: '🇱🇾'
  },
  {
    ID: 101,
    COUNTRY_NAME: 'Liechtenstein',
    COUNTRY_SUB: 'uses prefixes allocated to Switzerland',
    ISO: 'LI',
    EMOJI: '🇱🇮'
  },
  {
    ID: 102,
    COUNTRY_NAME: 'Lithuania',
    ISO: 'LT',
    EMOJI: '🇱🇹'
  },
  {
    ID: 103,
    COUNTRY_NAME: 'Luxembourg',
    ISO: 'LU',
    EMOJI: '🇱🇺'
  },
  {
    ID: 104,
    COUNTRY_NAME: 'Macao',
    COUNTRY_SUB: 'Special Administrative Region of the People\'s Republic of China',
    ISO: 'MO',
    EMOJI: '🇲🇴'
  },
  {
    ID: 105,
    COUNTRY_NAME: 'Madagascar',
    ISO: 'MG',
    EMOJI: '🇲🇬'
  },
  {
    ID: 106,
    COUNTRY_NAME: 'Malawi',
    ISO: 'MW',
    EMOJI: '🇲🇼'
  },
  {
    ID: 107,
    COUNTRY_NAME: 'Malaysia',
    ISO: 'MY',
    EMOJI: '🇲🇾'
  },
  {
    ID: 108,
    COUNTRY_NAME: 'Maldives',
    ISO: 'MV',
    EMOJI: '🇲🇻'
  },
  {
    ID: 109,
    COUNTRY_NAME: 'Mali',
    ISO: 'ML',
    EMOJI: '🇲🇱'
  },
  {
    ID: 110,
    COUNTRY_NAME: 'Malta',
    ISO: 'MT',
    EMOJI: '🇲🇹'
  },
  {
    ID: 111,
    COUNTRY_NAME: 'Marshall Islands',
    ISO: 'MH',
    EMOJI: '🇲🇭'
  },
  {
    ID: 112,
    COUNTRY_NAME: 'Mauritania',
    ISO: 'MR',
    EMOJI: '🇲🇷'
  },
  {
    ID: 113,
    COUNTRY_NAME: 'Mauritius',
    ISO: 'MU',
    EMOJI: '🇲🇺'
  },
  {
    ID: 114,
    COUNTRY_NAME: 'Mexico',
    ISO: 'MX',
    EMOJI: '🇲🇽'
  },
  {
    ID: 115,
    COUNTRY_NAME: 'Moldova',
    ISO: 'MD',
    EMOJI: '🇲🇩'
  },
  {
    ID: 116,
    COUNTRY_NAME: 'Monaco',
    ISO: 'MC',
    EMOJI: '🇲🇨'
  },
  {
    ID: 117,
    COUNTRY_NAME: 'Mongolia',
    ISO: 'MN',
    EMOJI: '🇲🇳'
  },
  {
    ID: 118,
    COUNTRY_NAME: 'Montenegro',
    ISO: 'ME',
    EMOJI: '🇲🇪'
  },
  {
    ID: 119,
    COUNTRY_NAME: 'Morocco',
    ISO: 'MA',
    EMOJI: '🇲🇦'
  },
  {
    ID: 120,
    COUNTRY_NAME: 'Mozambique',
    ISO: 'MZ',
    EMOJI: '🇲🇿'
  },
  {
    ID: 121,
    COUNTRY_NAME: 'Namibia',
    ISO: 'NA',
    EMOJI: '🇳🇦'
  },
  {
    ID: 122,
    COUNTRY_NAME: 'Nauru',
    ISO: 'NR',
    EMOJI: '🇳🇷'
  },
  {
    ID: 123,
    COUNTRY_NAME: 'Nepal',
    ISO: 'NP',
    EMOJI: '🇳🇵'
  },
  {
    ID: 124,
    COUNTRY_NAME: 'Netherlands',
    ISO: 'NL',
    EMOJI: '🇳🇱'
  },
  {
    ID: 125,
    COUNTRY_NAME: 'Netherlands',
    COUNTRY_SUB: 'former Netherlands Antilles',
    ISO: 'NL',
    EMOJI: '🇳🇱'
  },
  {
    ID: 126,
    COUNTRY_NAME: 'New Zealand',
    ISO: 'NZ',
    EMOJI: '🇳🇿'
  },
  {
    ID: 127,
    COUNTRY_NAME: 'Nicaragua',
    ISO: 'NI',
    EMOJI: '🇳🇮'
  },
  {
    ID: 128,
    COUNTRY_NAME: 'Niger',
    ISO: 'NE',
    EMOJI: '🇳🇪'
  },
  {
    ID: 129,
    COUNTRY_NAME: 'Nigeria',
    ISO: 'NG',
    EMOJI: '🇳🇬'
  },
  {
    ID: 130,
    COUNTRY_NAME: 'Niue',
    COUNTRY_SUB: 'provisinal allocation',
    ISO: 'NU',
    EMOJI: '🇳🇺'
  },
  {
    ID: 131,
    COUNTRY_NAME: 'North Korea',
    ISO: 'KP',
    EMOJI: '🇰🇵'
  },
  {
    ID: 132,
    COUNTRY_NAME: 'North Macedonia',
    ISO: 'MK',
    EMOJI: '🇲🇰'
  },
  {
    ID: 133,
    COUNTRY_NAME: 'Norway',
    ISO: 'NO',
    EMOJI: '🇳🇴'
  },
  {
    ID: 134,
    COUNTRY_NAME: 'Oman',
    ISO: 'OM',
    EMOJI: '🇴🇲'
  },
  {
    ID: 135,
    COUNTRY_NAME: 'Pakistan',
    ISO: 'PK',
    EMOJI: '🇵🇰'
  },
  {
    ID: 136,
    COUNTRY_NAME: 'Palau',
    ISO: 'PW',
    EMOJI: '🇵🇼'
  },
  {
    ID: 137,
    COUNTRY_NAME: 'State of Palestine',
    ISO: 'PS',
    EMOJI: '🇵🇸'
  },
  {
    ID: 138,
    COUNTRY_NAME: 'Panama',
    ISO: 'PA',
    EMOJI: '🇵🇦'
  },
  {
    ID: 139,
    COUNTRY_NAME: 'Papua New Guinea',
    ISO: 'PG',
    EMOJI: '🇵🇬'
  },
  {
    ID: 140,
    COUNTRY_NAME: 'Paraguay',
    ISO: 'PY',
    EMOJI: '🇵🇾'
  },
  {
    ID: 141,
    COUNTRY_NAME: 'Peru',
    ISO: 'PE',
    EMOJI: '🇵🇪'
  },
  {
    ID: 142,
    COUNTRY_NAME: 'Philippines',
    ISO: 'PH',
    EMOJI: '🇵🇭'
  },
  {
    ID: 143,
    COUNTRY_NAME: 'Poland',
    ISO: 'PL',
    EMOJI: '🇵🇱'
  },
  {
    ID: 144,
    COUNTRY_NAME: 'Portugal',
    ISO: 'PT',
    EMOJI: '🇵🇹'
  },
  {
    ID: 145,
    COUNTRY_NAME: 'Qatar',
    ISO: 'QA',
    EMOJI: '🇶🇦'
  },
  {
    ID: 146,
    COUNTRY_NAME: 'China',
    COUNTRY_SUB: 'People\'s Republic of China',
    ISO: 'CN',
    EMOJI: '🇨🇳'
  },
  {
    ID: 147,
    COUNTRY_NAME: 'Republic of the Congo',
    ISO: 'CG',
    EMOJI: '🇨🇬'
  },
  {
    ID: 148,
    COUNTRY_NAME: 'Romania',
    ISO: 'RO',
    EMOJI: '🇷🇴'
  },
  {
    ID: 149,
    COUNTRY_NAME: 'Russia',
    ISO: 'RU',
    EMOJI: '🇷🇺'
  },
  {
    ID: 150,
    COUNTRY_NAME: 'Rwanda',
    ISO: 'RW',
    EMOJI: '🇷🇼'
  },
  {
    ID: 151,
    COUNTRY_NAME: 'Saint Kitts and Nevis',
    ISO: 'KN',
    EMOJI: '🇰🇳'
  },
  {
    ID: 152,
    COUNTRY_NAME: 'Saint Lucia',
    COUNTRY_SUB: 'half-series allocation',
    ISO: 'LC',
    EMOJI: '🇱🇨'
  },
  {
    ID: 153,
    COUNTRY_NAME: 'Saint Vincent and the Grenadines',
    ISO: 'VC',
    EMOJI: '🇻🇨'
  },
  {
    ID: 154,
    COUNTRY_NAME: 'San Marino',
    ISO: 'SM',
    EMOJI: '🇸🇲'
  },
  {
    ID: 155,
    COUNTRY_NAME: 'São Tomé and Príncipe',
    ISO: 'ST',
    EMOJI: '🇸🇹'
  },
  {
    ID: 156,
    COUNTRY_NAME: 'Saudi Arabia',
    ISO: 'SA',
    EMOJI: '🇸🇦'
  },
  {
    ID: 157,
    COUNTRY_NAME: 'Senegal',
    ISO: 'SN',
    EMOJI: '🇸🇳'
  },
  {
    ID: 158,
    COUNTRY_NAME: 'Serbia',
    ISO: 'RS',
    EMOJI: '🇷🇸'
  },
  {
    ID: 159,
    COUNTRY_NAME: 'Seychelles',
    ISO: 'SC',
    EMOJI: '🇸🇨'
  },
  {
    ID: 160,
    COUNTRY_NAME: 'Sierra Leone',
    ISO: 'SL',
    EMOJI: '🇸🇱'
  },
  {
    ID: 161,
    COUNTRY_NAME: 'Singapore',
    ISO: 'SG',
    EMOJI: '🇸🇬'
  },
  {
    ID: 162,
    COUNTRY_NAME: 'Slovakia',
    ISO: 'SK',
    EMOJI: '🇸🇰'
  },
  {
    ID: 163,
    COUNTRY_NAME: 'Slovenia',
    ISO: 'SI',
    EMOJI: '🇸🇮'
  },
  {
    ID: 164,
    COUNTRY_NAME: 'Solomon Islands',
    ISO: 'SB',
    EMOJI: '🇸🇧'
  },
  {
    ID: 165,
    COUNTRY_NAME: 'Somalia',
    ISO: 'SO',
    EMOJI: '🇸🇴'
  },
  {
    ID: 166,
    COUNTRY_NAME: 'South Africa',
    ISO: 'ZA',
    EMOJI: '🇿🇦'
  },
  {
    ID: 167,
    COUNTRY_NAME: 'South Korea',
    ISO: 'KR',
    EMOJI: '🇰🇷'
  },
  {
    ID: 168,
    COUNTRY_NAME: 'South Sudan',
    COUNTRY_SUB: 'provisinal allocation',
    ISO: 'SS',
    EMOJI: '🇸🇸'
  },
  {
    ID: 169,
    COUNTRY_NAME: 'Spain',
    ISO: 'ES',
    EMOJI: '🇪🇸'
  },
  {
    ID: 170,
    COUNTRY_NAME: 'Sri Lanka',
    ISO: 'LK',
    EMOJI: '🇱🇰'
  },
  {
    ID: 171,
    COUNTRY_NAME: 'Sudan',
    COUNTRY_SUB: 'half-series allocation',
    ISO: 'SD',
    EMOJI: '🇸🇩'
  },
  {
    ID: 172,
    COUNTRY_NAME: 'Suriname',
    ISO: 'SR',
    EMOJI: '🇸🇷'
  },
  {
    ID: 173,
    COUNTRY_NAME: 'Sweden',
    ISO: 'SE',
    EMOJI: '🇸🇪'
  },
  {
    ID: 174,
    COUNTRY_NAME: 'Switzerland',
    ISO: 'CH',
    EMOJI: '🇨🇭'
  },
  {
    ID: 175,
    COUNTRY_NAME: 'Syria',
    ISO: 'SY',
    EMOJI: '🇸🇾'
  },
  {
    ID: 176,
    COUNTRY_NAME: 'Taiwan',
    ISO: 'TW',
    EMOJI: '🇹🇼'
  },
  {
    ID: 177,
    COUNTRY_NAME: 'Tajikistan',
    ISO: 'TJ',
    EMOJI: '🇹🇯'
  },
  {
    ID: 178,
    COUNTRY_NAME: 'Tanzania',
    ISO: 'TZ',
    EMOJI: '🇹🇿'
  },
  {
    ID: 179,
    COUNTRY_NAME: 'Thailand',
    ISO: 'TH',
    EMOJI: '🇹🇭'
  },
  {
    ID: 180,
    COUNTRY_NAME: 'The Bahamas',
    ISO: 'BS',
    EMOJI: '🇧🇸'
  },
  {
    ID: 181,
    COUNTRY_NAME: 'The Gambia',
    ISO: 'GM',
    EMOJI: '🇬🇲'
  },
  {
    ID: 182,
    COUNTRY_NAME: 'Timor-Leste',
    ISO: 'TL',
    EMOJI: '🇹🇱'
  },
  {
    ID: 183,
    COUNTRY_NAME: 'Togo',
    ISO: 'TG',
    EMOJI: '🇹🇬'
  },
  {
    ID: 184,
    COUNTRY_NAME: 'Tonga',
    ISO: 'TO',
    EMOJI: '🇹🇴'
  },
  {
    ID: 185,
    COUNTRY_NAME: 'Trinidad and Tobago',
    ISO: 'TT',
    EMOJI: '🇹🇹'
  },
  {
    ID: 186,
    COUNTRY_NAME: 'Tunisia',
    ISO: 'TN',
    EMOJI: '🇹🇳'
  },
  {
    ID: 187,
    COUNTRY_NAME: 'Turkey',
    ISO: 'TR',
    EMOJI: '🇹🇷'
  },
  {
    ID: 188,
    COUNTRY_NAME: 'Turkmenistan',
    ISO: 'TM',
    EMOJI: '🇹🇲'
  },
  {
    ID: 189,
    COUNTRY_NAME: 'Tuvalu',
    ISO: 'TV',
    EMOJI: '🇹🇻'
  },
  {
    ID: 190,
    COUNTRY_NAME: 'Uganda',
    ISO: 'UG',
    EMOJI: '🇺🇬'
  },
  {
    ID: 191,
    COUNTRY_NAME: 'Ukraine',
    ISO: 'UA',
    EMOJI: '🇺🇦'
  },
  {
    ID: 192,
    COUNTRY_NAME: 'United Arab Emirates',
    ISO: 'AE',
    EMOJI: '🇦🇪'
  },
  {
    ID: 193,
    COUNTRY_NAME: 'United Kingdom',
    ISO: 'GB',
    EMOJI: '🇬🇧'
  },
  {
    ID: 194,
    COUNTRY_NAME: 'United Kingdom',
    COUNTRY_SUB: 'and its overseas territories\/Crown dependencies',
    ISO: 'GB',
    EMOJI: '🇬🇧'
  },
  {
    ID: 195,
    COUNTRY_NAME: 'United Nations',
    COUNTRY_SUB: 'international organization'
  },
  {
    ID: 196,
    COUNTRY_NAME: 'United States',
    ISO: 'US',
    EMOJI: '🇺🇸'
  },
  {
    ID: 197,
    COUNTRY_NAME: 'Uruguay',
    ISO: 'UY',
    EMOJI: '🇺🇾'
  },
  {
    ID: 198,
    COUNTRY_NAME: 'Uzbekistan',
    ISO: 'UZ',
    EMOJI: '🇺🇿'
  },
  {
    ID: 199,
    COUNTRY_NAME: 'Vanuatu',
    ISO: 'VU',
    EMOJI: '🇻🇺'
  },
  {
    ID: 200,
    COUNTRY_NAME: 'Vatican City',
    ISO: 'VA',
    EMOJI: '🇻🇦'
  },
  {
    ID: 201,
    COUNTRY_NAME: 'Venezuela',
    ISO: 'VE',
    EMOJI: '🇻🇪'
  },
  {
    ID: 202,
    COUNTRY_NAME: 'Vietnam',
    ISO: 'VN',
    EMOJI: '🇻🇳'
  },
  {
    ID: 203,
    COUNTRY_NAME: 'Samoa',
    COUNTRY_SUB: 'former Western Samoa',
    ISO: 'WS',
    EMOJI: '🇼🇸'
  },
  {
    ID: 204,
    COUNTRY_NAME: 'World Meteorological Organization',
    COUNTRY_SUB: 'international organization'
  },
  {
    ID: 205,
    COUNTRY_NAME: 'Yemen',
    ISO: 'YE',
    EMOJI: '🇾🇪'
  },
  {
    ID: 206,
    COUNTRY_NAME: 'Zambia',
    ISO: 'ZM',
    EMOJI: '🇿🇲'
  },
  {
    ID: 207,
    COUNTRY_NAME: 'Zimbabwe',
    ISO: 'ZW',
    EMOJI: '🇿🇼'
  }
];
