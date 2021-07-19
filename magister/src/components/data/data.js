import { db } from '../../firebase';



export const getDataBranch = async () => {
   const branch = await db.collection('ramas').get();
   return branch;
}

export const getDataProvince = async () => {
    const province = await db.collection('provincias').get();
    return province
};