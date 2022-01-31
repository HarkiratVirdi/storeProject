import { Body, Controller, Get, Param } from '@nestjs/common';
import db from '../db/database.json';
import * as fs from 'fs'
import { readDB } from 'src/utils/readDb';

@Controller('read')
export class ReadController {
    @Get(':ids')
    read(@Param() param) : Array<{}>
    {
     
        return readDB();
    }
}
