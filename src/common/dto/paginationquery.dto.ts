import { Type } from "class-transformer"
import { IsOptional, IsPositive } from "class-validator"

export class PaginationqueryDto {
    @IsOptional()
    @IsPositive()
    limit: number

    @IsOptional()
    @IsPositive()
    offset: number
}
