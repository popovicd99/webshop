<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ps', function (Blueprint $table) {
            $table->unsignedBigInteger("product_id");
            $table->integer("quantity")->default(0);;
            $table->unsignedBigInteger("size_id");
            $table->foreign("product_id")->references("id")->on("products")->onDelete('cascade');
            $table->foreign("size_id")->references("id")->on("sizes")->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ps');
    }
};
