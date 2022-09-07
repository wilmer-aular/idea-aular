//FUNCION PARA MOSTRAR LAS IMAGENES DE LAS PROPIEDADES
export const getListWithImage = (list) => {
	let countHome = 0;
	let countApart = 0;
	let countOffice = 0;
	const entities = list.map((i) => {
		if (i.type === 'House') {
			if (countHome === 4) countHome = 0;
			i.imgUrl = `media/images/${i.type}/${countHome}.jpg`;
			i.indexImg = countHome;
			countHome += 1;
		} else if (i.type === 'Apartments') {
			if (countApart === 4) countApart = 0;
			i.imgUrl = `media/images/${i.type}/${countApart}.jpg`;
			i.indexImg = countApart;
			countApart += 1;
		}
		else {
			if (countOffice === 4) countOffice = 0;
			i.imgUrl = `media/images/${i.type}/${countOffice}.jpg`;
			i.indexImg = countOffice;
			countOffice += 1;
		}
		return i;
	})
	return entities;
}