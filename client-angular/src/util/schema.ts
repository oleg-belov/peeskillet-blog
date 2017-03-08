import { Schema } from 'normalizr';
import { UserRecord } from '../user/model';

export enum EntityType {
  USER
}

export function convertToEntity(schema: Schema, data: any, type: EntityType): any {
  switch (type) {
    case EntityType.USER:

  }
}