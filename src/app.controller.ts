import {
  Controller,
  Get,
  UseInterceptors,
  Post,
  UploadedFile,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { google } = require('googleapis');
import fs = require('fs');
// const storage = MulterModule({
//   st
// })
// import {drive_v2} from 'googleapis';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      // storage: diskStorage({
      //   destination: './uploads',
      //   filename: (req, file, cb) => {
      //     // Generating a 32 random chars long string
      //     const randomName = Array(32)
      //       .fill(null)
      //       .map(() => Math.round(Math.random() * 16).toString(16))
      //       .join('');
      //     //Calling the callback passing the random name generated with the original extension name
      //     cb(null, `${randomName}${extname(file.originalname)}`);
      //   },
      // }),
    }),
  )
  uploadFile(@UploadedFile() file) {
    console.log(file);
    const fileMetadata = {
      name: 'photo.jpg',
    };
    const media = {
      mimeType: 'image/jpeg',
      body: fs.createReadStream('uploads/photo.jpg'),
    };
    // const drive = google.drive({version: 'v3', auth});
    // google.drive.files.create(
    //   {
    //     resource: fileMetadata,
    //     media: media,
    //     fields: 'id',
    //   },
    //   function(err, file) {
    //     if (err) {
    //       // Handle error
    //       console.error(err);
    //     } else {
    //       console.log('File Id: ', file.id);
    //     }
    //   },
    // );
  }
}
