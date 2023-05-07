import { Controller, Get, Param, Post, Query, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/introduce')
  introduce(): object {
    return {
      msg: 'This is introduce endpoint',
    };
  }

  @Post('/querylesson')
  getQuery(@Query('name') name: string, @Query('kelas') kelas: string): object {
    return {
      msg: 'You can get query',
      name,
      kelas,
    };
  }

  @Post('/paramlesson/:faculty/:major')
  getParam(
    @Param('faculty') faculty: string,
    @Param('major') major: string,
  ): object {
    return {
      msg: 'You can get the param',
      faculty,
      major,
    };
  }

  @Post('/bodyform')
  getForm(@Request() req): object {
    const { name, age, address } = req.param;

    return {
      msg: 'Can get body form',
      name,
      age,
      address,
    };
  }
}
