const formatDate = (value: Date): string =>
  new Date(value).toLocaleDateString('pt-br');

export default formatDate;
