import {extrapolateString, getCountryByCallSign, matchCallSign} from './call-sign.helper';

describe('extrapolateString', () => {
  it('should pass for char inputs - 2 digits', () => {
    const result = extrapolateString('DR', 'DZ');
    expect(result).toEqual(['DR', 'DS', 'DT', 'DU', 'DV', 'DW', 'DX', 'DY', 'DZ']);
  });
  it('should pass for char inputs - 3 digits', () => {
    const result = extrapolateString('SSN', 'SSZ');
    expect(result).toEqual(['SSN', 'SSO', 'SSP', 'SSQ', 'SSR', 'SSS', 'SST', 'SSU', 'SSV', 'SSW', 'SSX', 'SSY', 'SSZ']);
  });
  it('should pass for numeric inputs', () => {
    const result = extrapolateString('P5', 'P9');
    expect(result).toEqual(['P5', 'P6', 'P7', 'P8', 'P9']);
  });
});

describe('matchCallSign', () => {
  [
    {cs: 'DR', compareTo: 'DR', match: true},
    {cs: 'DR', compareTo: 'dr', match: true},
    {cs: 'dr', compareTo: 'DR', match: true},
    {cs: 'dr', compareTo: 'dr', match: true},
    {cs: 'dr5ace', compareTo: 'dr', match: true},
    {cs: 'DR', compareTo: 'FR', match: false},
    {cs: 'DR', compareTo: 'fr', match: false},
    {cs: 'dr', compareTo: 'FR', match: false},
    {cs: 'dr', compareTo: 'fr', match: false},
    {cs: 'dc', compareTo: 'dd-dt', match: false},
    {cs: 'dd', compareTo: 'dd-dt', match: true},
    {cs: 'dh', compareTo: 'dd-dt', match: true},
    {cs: 'DH', compareTo: 'dd-dt', match: true},
    {cs: 'dh', compareTo: 'DD-DT', match: true},
    {cs: 'dt', compareTo: 'dd-dt', match: true},
    {cs: 'du', compareTo: 'dd-dt', match: false},
    {cs: 'dc1qwe', compareTo: 'dd-dt', match: false},
    {cs: 'dd2qwe', compareTo: 'dd-dt', match: true},
    {cs: 'dh3qwe', compareTo: 'dd-dt', match: true},
    {cs: 'dt4qwe', compareTo: 'dd-dt', match: true},
    {cs: 'du5qwe', compareTo: 'dd-dt', match: false},
    {cs: 'dd4qw', compareTo: 'DA–DR', match: false},
  ].forEach(_ => it('should match: ' + _.cs + ' - ' + _.compareTo, () => {
    expect(matchCallSign(_.cs, _.compareTo)).toBe(_.match);
  }));
});

describe('getCountryByCallSign', () => {
  [
    {cs: 'dd6dg', country: 'Germany'},
    {cs: 'e5egf', country: 'Cook Islands'},
    {cs: 'hb3xt', country: 'Switzerland'},
    {cs: 'sst4mk', country: 'Sudan'},
    {cs: 'sth4ba', country: 'Sudan'},
    {cs: 'hb3yt', country: 'Liechtenstein'},
  ].forEach(_ => it('should match: ' + _.cs + ' - ' + _.country, () => {
    expect(getCountryByCallSign(_.cs)?.COUNTRY_NAME).toBe(_.country);
  }));

});
