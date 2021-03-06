import { TestAppModule } from './../../../../app.test.module';
/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MockBackend} from "@angular/http/testing";
import {RequestOptions, BaseRequestOptions, Http} from "@angular/http";
import {RestangularModule} from "ng2-restangular";
import {BuildConfigViewWrapperComponent} from "./view-wrapper.buildconfig.component";
import {BuildConfigViewToolbarComponent} from "../view-toolbar/view-toolbar.buildconfig.component";
import {BuildConfigViewComponent} from "../view/view.buildconfig.component";
import {MomentModule} from "angular2-moment";
import {BuildConfigDeleteDialog} from "../delete-dialog/delete-dialog.buildconfig.component";
import {ModalModule} from "ngx-modal";
import {FormsModule} from "@angular/forms";
import {KubernetesStoreModule} from "../../../kubernetes.store.module";
import {Fabric8CommonModule} from "../../../../common/common.module";

describe('BuildConfigViewWrapperComponent', () => {
  let buildconfig: BuildConfigViewWrapperComponent;
  let fixture: ComponentFixture<BuildConfigViewWrapperComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          Fabric8CommonModule,
          FormsModule,
          MomentModule,
          ModalModule,
          RouterTestingModule.withRoutes([]),
          RestangularModule.forRoot(),
          KubernetesStoreModule,
          TestAppModule
        ],
        declarations: [
          BuildConfigViewWrapperComponent,
          BuildConfigViewToolbarComponent,
          BuildConfigViewComponent,
          BuildConfigDeleteDialog,
        ],
        providers: [
          MockBackend,
          { provide: RequestOptions, useClass: BaseRequestOptions },
          {
            provide: Http, useFactory: (backend, options) => {
              return new Http(backend, options);
            }, deps: [MockBackend, RequestOptions],
          },
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildConfigViewWrapperComponent);
    buildconfig = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(buildconfig).toBeTruthy(); });
});
