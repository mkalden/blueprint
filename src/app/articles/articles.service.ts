import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../shared/interfaces/article';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public urlScheme = `https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)`;
  private articleCollection: AngularFirestoreCollection;
  private itemDoc: AngularFirestoreDocument<any>;
  private item: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.articleCollection = this.afs.collection('articles');
  }

  public getAllArticles(): Observable<any[]> {
    this.articleCollection = this.afs.collection(
      '/articles',
      (ref) => ref.orderBy('time', 'desc')
    );

    return this.articleCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return {...data};
      }))
    );

  }

  getArticleById(id: string): Observable<any> {
    this.itemDoc = this.afs.doc('/articles/' + id);
    return this.item = this.itemDoc.valueChanges();
  }

  public createArticle(article: Article): Promise<DocumentReference> {
    const data = {
      article,
      time: new Date()
    };
    return this.articleCollection.add(data);
  }

  updateArticle(id: string, article: Article): Promise<void> {
    const data = {
      article,
      time: new Date()
    };
    return this.articleCollection.doc(id).update(data);
  }

  deleteArticle(id: string): Promise<void> {
    return this.articleCollection.doc(id).delete();
  }
}
