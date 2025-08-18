export const compareActualActiveTimeDate = (
  activeDateTime,
  currenteDateTime
) => {
  const activeTime = new Date(activeDateTime);
  const currenteTime = new Date(currenteDateTime);

  // Validar si la fecha ingresada es válida
  if (isNaN(activeTime.getTime()) && isNaN(currenteTime.getTime())) {
    return false; // Fecha no válida
  }
  // Calcular el rango
  const startRange = new Date(activeTime); // Hora exacta ingresada
  const endRange = new Date(activeTime.getTime() + 60 * 60 * 1000); // Una hora después

  return (
    activeTime.getHours() === currenteTime.getHours() &&
    activeTime >= startRange &&
    activeTime <= endRange
  );
};

export const compareActualActiveDate = (InputCurrenteDate, InputActiveDate) => {
  const activeDate = new Date(InputActiveDate);
  const currenteDate = new Date(InputCurrenteDate);

  // Convertir a formato ISO y tomar solo la parte de la fecha
  const date1 = activeDate.toISOString().split('T')[0];
  const date2 = currenteDate.toISOString().split('T')[0];

  // Comparar las fechas
  return date1 === date2;
};