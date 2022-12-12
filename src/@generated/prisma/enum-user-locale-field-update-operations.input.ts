import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserLocale } from './user-locale.enum';

@InputType()
export class EnumUserLocaleFieldUpdateOperationsInput {

    @Field(() => UserLocale, {nullable:true})
    set?: keyof typeof UserLocale;
}
