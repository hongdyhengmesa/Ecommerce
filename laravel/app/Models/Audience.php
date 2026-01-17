<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\{
    BelongsTo,
    MorphMany
};

class Audience extends Model
{
    // 2. An audience has one user
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Audience belongs to Article
    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }

    // 5. An audience have many comments (polymorphic)
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

