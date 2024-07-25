const parseType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isType(contactType)) return contactType;
};

const parseBoolean = (isFavourite) => {
  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;
  return;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedType = parseType(contactType);
  const parsedBoolean = parseBoolean(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedBoolean,
  };
};
