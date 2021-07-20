import { db } from '../../firebase';

export const getDataBranch = async () => {
   const branch = await db.collection('ramas').get();
   return branch;
}

export const getDataProvince = async () => {
    const province = await db.collection('provincias').get();
    return province
};

export const getDataSchedule = async () => {
    const schedule = await db.collection('schedule').get();
    return schedule
}

export const getDataModality = async () => {
    const modality = await db.collection('modality').get();
    return modality
}