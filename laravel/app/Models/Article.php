<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\{
    BelongsTo,
    HasMany,
    MorphMany
};

class Article extends Model
{
    // 3. Article belongs to Author
    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class);
    }

    // 4. An article have many audiences
    public function audiences(): HasMany
    {
        return $this->hasMany(Audience::class);
    }

    // 6. An article have many comments (polymorphic)
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

