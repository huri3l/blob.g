import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const formatDate = (date: string) => {
  return format(parseISO(date), "dd 'de' MMM 'de' yyyy", {
    locale: ptBR,
  });
};
