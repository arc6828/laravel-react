<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $menus = [
            ['name' => 'ข้าวผัดกุ้ง', 'description' => 'ข้าวผัดกุ้งสดพร้อมเครื่องเคียง', 'price' => 80, 'image' => 'https://img.wongnai.com/p/1600x0/2018/02/14/37bc85acae8640ae89e5e7e323bb2743.jpg'],
            ['name' => 'ก๋วยเตี๋ยวเรือ', 'description' => 'ก๋วยเตี๋ยวเนื้อน้ำตกสูตรเข้มข้น', 'price' => 50, 'image' => 'https://img.wongnai.com/p/1920x0/2020/01/20/0e4c6a1ca489437985a9636f29bec582.jpg'],
            ['name' => 'ต้มยำกุ้ง', 'description' => 'ต้มยำกุ้งรสจัดจ้าน', 'price' => 120, 'image' => 'https://img.wongnai.com/p/1968x0/2018/09/21/27396ffd19e94f7e864ca44bf0b09899.jpg'],
            ['name' => 'ผัดไทย', 'description' => 'ผัดไทยเส้นเหนียวนุ่ม', 'price' => 60, 'image' => 'https://img.wongnai.com/p/1920x0/2021/08/09/f5ff71c37a2c4101b895432aae1ac01a.jpg'],
            ['name' => 'ส้มตำไทย', 'description' => 'ส้มตำไทยรสชาติกลมกล่อม', 'price' => 45, 'image' => 'https://img.wongnai.com/p/1920x0/2017/04/30/b27aca174f634b50bee8a836aa3449df.jpg'],
            ['name' => 'ไก่ทอด', 'description' => 'ไก่ทอดกรอบสูตรพิเศษ', 'price' => 75, 'image' => 'https://img.wongnai.com/p/1920x0/2020/02/10/d5634340f88846d9bb07795e0195a817.jpg'],
            ['name' => 'ข้าวมันไก่', 'description' => 'ข้าวมันไก่เนื้อนุ่มพร้อมน้ำจิ้มสูตรเด็ด', 'price' => 55, 'image' => 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg'],
            ['name' => 'ข้าวกะเพราไก่', 'description' => 'ข้าวกะเพราไก่รสเผ็ดจัดจ้าน', 'price' => 50, 'image' => 'https://img.wongnai.com/p/1968x0/2020/11/11/e30e4ab670fd43a7bf7a10d862532e7c.jpg'],
            ['name' => 'ปลาทอดราดพริก', 'description' => 'ปลากะพงทอดกรอบราดซอสรสเผ็ด', 'price' => 150, 'image' => 'https://img.wongnai.com/p/1968x0/2019/03/10/ba74b608f4484f4199e5ce59b9f75f7e.jpg'],
            ['name' => 'ลาบหมู', 'description' => 'ลาบหมูอีสานแซ่บ', 'price' => 70, 'image' => 'https://img.wongnai.com/p/1920x0/2021/05/02/c82c59e322a8426898d19f4e05f41c29.jpg'],
        ];

        foreach ($menus as $menu) {
            Menu::create($menu);
        }
    }
}
