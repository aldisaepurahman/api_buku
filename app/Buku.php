<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 *
 */
class Buku extends Model
{
  public $table = 't_buku';

  protected $fillable = [
    'judul', 'thn_rilis', 'penerbit'
  ];
}
