const DAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export const getFormattedDate = () => {
  const date = new Date();
  return `${DAYS[date.getDay()]}, ${date.getDate()} de ${MONTHS[date.getMonth()]} ${date.getFullYear()}`.toUpperCase();
};

export const getTodayDay = () => DAYS[new Date().getDay()];

const formatDayToPlural = (day) => {
  const dayMap = {
    'Segunda': 'SEGUNDAS',
    'Terça': 'TERÇAS',
    'Quarta': 'QUARTAS',
    'Quinta': 'QUINTAS',
    'Sexta': 'SEXTAS',
    'Sábado': 'SÁBADOS',
  };
  return dayMap[day] || day.toUpperCase();
};

export const formatDaysList = (days) => {
  const dayOrder = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const sortedDays = days.toSorted((a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b));
  return sortedDays.map(formatDayToPlural).join(' / ');
};
