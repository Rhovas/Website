(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './KotlinBigInteger-bignum-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./KotlinBigInteger-bignum-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Interpreter'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Interpreter'.");
    }
    if (typeof this['KotlinBigInteger-bignum-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Interpreter'. Its dependency 'KotlinBigInteger-bignum-js-ir' was not found. Please, check whether 'KotlinBigInteger-bignum-js-ir' is loaded prior to 'Interpreter'.");
    }
    root.Interpreter = factory(typeof Interpreter === 'undefined' ? {} : Interpreter, this['kotlin-kotlin-stdlib-js-ir'], this['KotlinBigInteger-bignum-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_ionspin_kotlin_bignum) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var println = kotlin_kotlin.$_$.p5;
  var Unit_getInstance = kotlin_kotlin.$_$.c3;
  var emptyList = kotlin_kotlin.$_$.x3;
  var ensureNotNull = kotlin_kotlin.$_$.j8;
  var THROW_CCE = kotlin_kotlin.$_$.z7;
  var stackTraceToString = kotlin_kotlin.$_$.m8;
  var Exception = kotlin_kotlin.$_$.v7;
  var classMeta = kotlin_kotlin.$_$.u5;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y;
  var captureStack = kotlin_kotlin.$_$.q5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var Map = kotlin_kotlin.$_$.h3;
  var isInterface = kotlin_kotlin.$_$.b6;
  var isObject = kotlin_kotlin.$_$.d6;
  var mapCapacity = kotlin_kotlin.$_$.l4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var toMutableMap = kotlin_kotlin.$_$.e5;
  var coerceAtLeast = kotlin_kotlin.$_$.v6;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var hashCode = kotlin_kotlin.$_$.y5;
  var equals = kotlin_kotlin.$_$.w5;
  var getKClass = kotlin_kotlin.$_$.b;
  var first = kotlin_kotlin.$_$.z3;
  var MutableMap = kotlin_kotlin.$_$.j3;
  var toMutableSet = kotlin_kotlin.$_$.f5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var Collection = kotlin_kotlin.$_$.d3;
  var firstOrNull = kotlin_kotlin.$_$.y3;
  var listOf = kotlin_kotlin.$_$.j4;
  var listOf_0 = kotlin_kotlin.$_$.k4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.k8;
  var last = kotlin_kotlin.$_$.i4;
  var withIndex = kotlin_kotlin.$_$.l5;
  var get_lastIndex = kotlin_kotlin.$_$.g4;
  var Pair = kotlin_kotlin.$_$.y7;
  var joinToString$default = kotlin_kotlin.$_$.d;
  var drop = kotlin_kotlin.$_$.w3;
  var plus = kotlin_kotlin.$_$.n4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.m;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.v;
  var BigDecimal = kotlin_com_ionspin_kotlin_bignum.$_$.a;
  var BigInteger = kotlin_com_ionspin_kotlin_bignum.$_$.c;
  var toString = kotlin_kotlin.$_$.p6;
  var toMutableList = kotlin_kotlin.$_$.d5;
  var retainAll = kotlin_kotlin.$_$.o4;
  var single = kotlin_kotlin.$_$.s4;
  var toString_0 = kotlin_kotlin.$_$.o8;
  var getStringHashCode = kotlin_kotlin.$_$.x5;
  var interfaceMeta = kotlin_kotlin.$_$.z5;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.n8;
  var zip = kotlin_kotlin.$_$.m5;
  var toString_1 = kotlin_kotlin.$_$.o7;
  var numberRangeToNumber = kotlin_kotlin.$_$.g6;
  var get_indices = kotlin_kotlin.$_$.d4;
  var to = kotlin_kotlin.$_$.p8;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.w;
  var getOrNull = kotlin_kotlin.$_$.b4;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.x;
  var trimIndent = kotlin_kotlin.$_$.q7;
  var List = kotlin_kotlin.$_$.g3;
  var NotImplementedError_init_$Create$ = kotlin_kotlin.$_$.l;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.t;
  var Companion_getInstance = kotlin_com_ionspin_kotlin_bignum.$_$.f;
  var toSet = kotlin_kotlin.$_$.g5;
  var reversed = kotlin_kotlin.$_$.q4;
  var objectMeta = kotlin_kotlin.$_$.l6;
  var compareTo = kotlin_kotlin.$_$.v5;
  var RoundingMode_TOWARDS_ZERO_getInstance = kotlin_com_ionspin_kotlin_bignum.$_$.d;
  var DecimalMode = kotlin_com_ionspin_kotlin_bignum.$_$.b;
  var Companion_getInstance_0 = kotlin_com_ionspin_kotlin_bignum.$_$.e;
  var generateSequence = kotlin_kotlin.$_$.x6;
  var toList = kotlin_kotlin.$_$.y6;
  var Triple = kotlin_kotlin.$_$.b8;
  var toList_0 = kotlin_kotlin.$_$.c5;
  var flatten = kotlin_kotlin.$_$.a4;
  var lastOrNull = kotlin_kotlin.$_$.h4;
  var MutableList = kotlin_kotlin.$_$.i3;
  var contains$default = kotlin_kotlin.$_$.e;
  var replace$default = kotlin_kotlin.$_$.i;
  var Comparator = kotlin_kotlin.$_$.t7;
  var compareValues = kotlin_kotlin.$_$.n5;
  var mutableMapOf = kotlin_kotlin.$_$.m4;
  var toList_1 = kotlin_kotlin.$_$.z4;
  var sortedWith = kotlin_kotlin.$_$.v4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d1;
  var charArrayOf = kotlin_kotlin.$_$.r5;
  var indexOfAny$default = kotlin_kotlin.$_$.g;
  var padStart$default = kotlin_kotlin.$_$.h;
  var repeat = kotlin_kotlin.$_$.g7;
  var charSequenceLength = kotlin_kotlin.$_$.t5;
  var toString_2 = kotlin_kotlin.$_$.h1;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.s;
  var Char = kotlin_kotlin.$_$.r7;
  var getOrNull_0 = kotlin_kotlin.$_$.c7;
  var printStackTrace = kotlin_kotlin.$_$.l8;
  var withIndex_0 = kotlin_kotlin.$_$.k5;
  var toList_2 = kotlin_kotlin.$_$.b5;
  var removePrefix = kotlin_kotlin.$_$.f7;
  var THROW_ISE = kotlin_kotlin.$_$.a8;
  var Enum = kotlin_kotlin.$_$.u7;
  var digitToInt = kotlin_kotlin.$_$.a7;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.w2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var numberToChar = kotlin_kotlin.$_$.h6;
  var toCharArray = kotlin_kotlin.$_$.k7;
  var copyToArray = kotlin_kotlin.$_$.u3;
  var charSequenceGet = kotlin_kotlin.$_$.s5;
  var isUpperCase = kotlin_kotlin.$_$.d7;
  var toBooleanStrict = kotlin_kotlin.$_$.j7;
  var first_0 = kotlin_kotlin.$_$.b7;
  //endregion
  //region block: pre-declaration
  AnalyzeException.prototype = Object.create(Exception.prototype);
  AnalyzeException.prototype.constructor = AnalyzeException;
  InputContext.prototype = Object.create(Item.prototype);
  InputContext.prototype.constructor = InputContext;
  ScopeContext.prototype = Object.create(Item.prototype);
  ScopeContext.prototype.constructor = ScopeContext;
  FunctionContext.prototype = Object.create(Item.prototype);
  FunctionContext.prototype.constructor = FunctionContext;
  LabelContext.prototype = Object.create(Item.prototype);
  LabelContext.prototype.constructor = LabelContext;
  JumpContext.prototype = Object.create(Item.prototype);
  JumpContext.prototype.constructor = JumpContext;
  ExceptionContext.prototype = Object.create(Item.prototype);
  ExceptionContext.prototype.constructor = ExceptionContext;
  PatternContext.prototype = Object.create(Item.prototype);
  PatternContext.prototype.constructor = PatternContext;
  function visit(ast) {
    var tmp0_subject = ast;
    var tmp;
    if (tmp0_subject instanceof Source_1) {
      tmp = this.visit_l0g8lt_k$(ast);
    } else {
      if (tmp0_subject instanceof Import_0) {
        tmp = this.visit_g8t6or_k$(ast);
      } else {
        if (tmp0_subject instanceof Struct_0) {
          tmp = this.visit_l35cuj_k$(ast);
        } else {
          if (tmp0_subject instanceof Block_0) {
            tmp = this.visit_iqwb4n_k$(ast);
          } else {
            if (tmp0_subject instanceof Component_1) {
              tmp = this.visit_65m3w9_k$(ast);
            } else {
              if (tmp0_subject instanceof Expression_1) {
                tmp = this.visit_19muq_k$(ast);
              } else {
                if (tmp0_subject instanceof Function_2) {
                  tmp = this.visitFunction(ast);
                } else {
                  if (tmp0_subject instanceof Declaration_5) {
                    tmp = this.visit_xhkpms_k$(ast);
                  } else {
                    if (tmp0_subject instanceof Assignment_0) {
                      tmp = this.visit_oeejlp_k$(ast);
                    } else {
                      if (tmp0_subject instanceof If_0) {
                        tmp = this.visit_yjn3hp_k$(ast);
                      } else {
                        if (tmp0_subject instanceof Conditional_0) {
                          tmp = this.visit_fzh0pc_k$(ast);
                        } else {
                          if (tmp0_subject instanceof Structural_0) {
                            tmp = this.visit_wpwm6r_k$(ast);
                          } else {
                            if (tmp0_subject instanceof For_0) {
                              tmp = this.visit_5g78j1_k$(ast);
                            } else {
                              if (tmp0_subject instanceof While_0) {
                                tmp = this.visit_j2dbej_k$(ast);
                              } else {
                                if (tmp0_subject instanceof Try_0) {
                                  tmp = this.visit_5g6y2j_k$(ast);
                                } else {
                                  if (tmp0_subject instanceof Catch_0) {
                                    tmp = this.visit_ir96kl_k$(ast);
                                  } else {
                                    if (tmp0_subject instanceof With_0) {
                                      tmp = this.visit_qvphz8_k$(ast);
                                    } else {
                                      if (tmp0_subject instanceof Label_0) {
                                        tmp = this.visit_iw6ym6_k$(ast);
                                      } else {
                                        if (tmp0_subject instanceof Break_1) {
                                          tmp = this.visit_iqzxl5_k$(ast);
                                        } else {
                                          if (tmp0_subject instanceof Continue_1) {
                                            tmp = this.visit_hzws4j_k$(ast);
                                          } else {
                                            if (tmp0_subject instanceof Return_1) {
                                              tmp = this.visit_kdw3vq_k$(ast);
                                            } else {
                                              if (tmp0_subject instanceof Throw_1) {
                                                tmp = this.visit_j0q4ds_k$(ast);
                                              } else {
                                                if (tmp0_subject instanceof Assert_0) {
                                                  tmp = this.visit_cjson0_k$(ast);
                                                } else {
                                                  if (tmp0_subject instanceof Ensure_0) {
                                                    tmp = this.visit_ed8j3o_k$(ast);
                                                  } else {
                                                    if (tmp0_subject instanceof Require_0) {
                                                      tmp = this.visit_7d0pqp_k$(ast);
                                                    } else {
                                                      if (tmp0_subject instanceof Scalar_0) {
                                                        tmp = this.visit_ktht9e_k$(ast);
                                                      } else {
                                                        if (tmp0_subject instanceof String_1) {
                                                          tmp = this.visit_l3547b_k$(ast);
                                                        } else {
                                                          if (tmp0_subject instanceof List_1) {
                                                            tmp = this.visit_qvwiuk_k$(ast);
                                                          } else {
                                                            if (tmp0_subject instanceof Object_2) {
                                                              tmp = this.visit_iwx4tx_k$(ast);
                                                            } else {
                                                              if (tmp0_subject instanceof Group_0) {
                                                                tmp = this.visit_itr4g9_k$(ast);
                                                              } else {
                                                                if (tmp0_subject instanceof Unary_0) {
                                                                  tmp = this.visit_j1ded5_k$(ast);
                                                                } else {
                                                                  if (tmp0_subject instanceof Binary_0) {
                                                                    tmp = this.visit_cv937b_k$(ast);
                                                                  } else {
                                                                    if (tmp0_subject instanceof Variable_3) {
                                                                      tmp = this.visitAccessVariable(ast);
                                                                    } else {
                                                                      if (tmp0_subject instanceof Property_2) {
                                                                        tmp = this.visit_p1i4hh_k$(ast);
                                                                      } else {
                                                                        if (tmp0_subject instanceof Index_1) {
                                                                          tmp = this.visit_iurx5o_k$(ast);
                                                                        } else {
                                                                          if (tmp0_subject instanceof Function_3) {
                                                                            tmp = this.visitInvokeFunction(ast);
                                                                          } else {
                                                                            if (tmp0_subject instanceof Method_1) {
                                                                              tmp = this.visit_i0nq6v_k$(ast);
                                                                            } else {
                                                                              if (tmp0_subject instanceof Pipeline_0) {
                                                                                tmp = this.visit_erqelk_k$(ast);
                                                                              } else {
                                                                                if (tmp0_subject instanceof Macro) {
                                                                                  tmp = this.visit_iwqs9i_k$(ast);
                                                                                } else {
                                                                                  if (tmp0_subject instanceof Lambda_1) {
                                                                                    tmp = this.visit_hhabst_k$(ast);
                                                                                  } else {
                                                                                    if (tmp0_subject instanceof Variable_4) {
                                                                                      tmp = this.visitPatternVariable(ast);
                                                                                    } else {
                                                                                      if (tmp0_subject instanceof Value_0) {
                                                                                        tmp = this.visit_j1p4cb_k$(ast);
                                                                                      } else {
                                                                                        if (tmp0_subject instanceof Predicate_0) {
                                                                                          tmp = this.visit_5aq8vz_k$(ast);
                                                                                        } else {
                                                                                          if (tmp0_subject instanceof OrderedDestructure_0) {
                                                                                            tmp = this.visit_krvfad_k$(ast);
                                                                                          } else {
                                                                                            if (tmp0_subject instanceof NamedDestructure_0) {
                                                                                              tmp = this.visit_7rvg8h_k$(ast);
                                                                                            } else {
                                                                                              if (tmp0_subject instanceof TypedDestructure_0) {
                                                                                                tmp = this.visit_hmz1a6_k$(ast);
                                                                                              } else {
                                                                                                if (tmp0_subject instanceof VarargDestructure_0) {
                                                                                                  tmp = this.visit_qm8bxv_k$(ast);
                                                                                                } else {
                                                                                                  if (tmp0_subject instanceof Type_2) {
                                                                                                    tmp = this.visit_qvr368_k$(ast);
                                                                                                  } else {
                                                                                                    noWhenBranchMatchedException();
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  RhovasAnalyzer.prototype = Object.create(Analyzer.prototype);
  RhovasAnalyzer.prototype.constructor = RhovasAnalyzer;
  Component_0.prototype = Object.create(RhovasIr.prototype);
  Component_0.prototype.constructor = Component_0;
  Struct.prototype = Object.create(Component_0.prototype);
  Struct.prototype.constructor = Struct;
  Statement.prototype = Object.create(RhovasIr.prototype);
  Statement.prototype.constructor = Statement;
  Assignment.prototype = Object.create(Statement.prototype);
  Assignment.prototype.constructor = Assignment;
  Variable.prototype = Object.create(Assignment.prototype);
  Variable.prototype.constructor = Variable;
  Property.prototype = Object.create(Assignment.prototype);
  Property.prototype.constructor = Property;
  Index.prototype = Object.create(Assignment.prototype);
  Index.prototype.constructor = Index;
  Match.prototype = Object.create(Statement.prototype);
  Match.prototype.constructor = Match;
  Conditional.prototype = Object.create(Match.prototype);
  Conditional.prototype.constructor = Conditional;
  Structural.prototype = Object.create(Match.prototype);
  Structural.prototype.constructor = Structural;
  Catch.prototype = Object.create(RhovasIr.prototype);
  Catch.prototype.constructor = Catch;
  Block.prototype = Object.create(Statement.prototype);
  Block.prototype.constructor = Block;
  Component.prototype = Object.create(Statement.prototype);
  Component.prototype.constructor = Component;
  Expression.prototype = Object.create(Statement.prototype);
  Expression.prototype.constructor = Expression;
  Function.prototype = Object.create(Statement.prototype);
  Function.prototype.constructor = Function;
  Declaration.prototype = Object.create(Statement.prototype);
  Declaration.prototype.constructor = Declaration;
  If.prototype = Object.create(Statement.prototype);
  If.prototype.constructor = If;
  For.prototype = Object.create(Statement.prototype);
  For.prototype.constructor = For;
  While.prototype = Object.create(Statement.prototype);
  While.prototype.constructor = While;
  Try.prototype = Object.create(Statement.prototype);
  Try.prototype.constructor = Try;
  With.prototype = Object.create(Statement.prototype);
  With.prototype.constructor = With;
  Label.prototype = Object.create(Statement.prototype);
  Label.prototype.constructor = Label;
  Break.prototype = Object.create(Statement.prototype);
  Break.prototype.constructor = Break;
  Continue.prototype = Object.create(Statement.prototype);
  Continue.prototype.constructor = Continue;
  Return.prototype = Object.create(Statement.prototype);
  Return.prototype.constructor = Return;
  Throw.prototype = Object.create(Statement.prototype);
  Throw.prototype.constructor = Throw;
  Assert.prototype = Object.create(Statement.prototype);
  Assert.prototype.constructor = Assert;
  Require.prototype = Object.create(Statement.prototype);
  Require.prototype.constructor = Require;
  Ensure.prototype = Object.create(Statement.prototype);
  Ensure.prototype.constructor = Ensure;
  Expression_0.prototype = Object.create(RhovasIr.prototype);
  Expression_0.prototype.constructor = Expression_0;
  Literal.prototype = Object.create(Expression_0.prototype);
  Literal.prototype.constructor = Literal;
  Scalar.prototype = Object.create(Literal.prototype);
  Scalar.prototype.constructor = Scalar;
  String_0.prototype = Object.create(Literal.prototype);
  String_0.prototype.constructor = String_0;
  List_0.prototype = Object.create(Literal.prototype);
  List_0.prototype.constructor = List_0;
  Object_0.prototype = Object.create(Literal.prototype);
  Object_0.prototype.constructor = Object_0;
  Access.prototype = Object.create(Expression_0.prototype);
  Access.prototype.constructor = Access;
  Variable_0.prototype = Object.create(Access.prototype);
  Variable_0.prototype.constructor = Variable_0;
  Property_0.prototype = Object.create(Access.prototype);
  Property_0.prototype.constructor = Property_0;
  Index_0.prototype = Object.create(Access.prototype);
  Index_0.prototype.constructor = Index_0;
  Invoke.prototype = Object.create(Expression_0.prototype);
  Invoke.prototype.constructor = Invoke;
  Function_0.prototype = Object.create(Invoke.prototype);
  Function_0.prototype.constructor = Function_0;
  Method.prototype = Object.create(Invoke.prototype);
  Method.prototype.constructor = Method;
  Pipeline.prototype = Object.create(Invoke.prototype);
  Pipeline.prototype.constructor = Pipeline;
  Group.prototype = Object.create(Expression_0.prototype);
  Group.prototype.constructor = Group;
  Unary.prototype = Object.create(Expression_0.prototype);
  Unary.prototype.constructor = Unary;
  Binary.prototype = Object.create(Expression_0.prototype);
  Binary.prototype.constructor = Binary;
  Lambda.prototype = Object.create(Expression_0.prototype);
  Lambda.prototype.constructor = Lambda;
  Pattern.prototype = Object.create(RhovasIr.prototype);
  Pattern.prototype.constructor = Pattern;
  Variable_1.prototype = Object.create(Pattern.prototype);
  Variable_1.prototype.constructor = Variable_1;
  Value.prototype = Object.create(Pattern.prototype);
  Value.prototype.constructor = Value;
  Predicate.prototype = Object.create(Pattern.prototype);
  Predicate.prototype.constructor = Predicate;
  OrderedDestructure.prototype = Object.create(Pattern.prototype);
  OrderedDestructure.prototype.constructor = OrderedDestructure;
  NamedDestructure.prototype = Object.create(Pattern.prototype);
  NamedDestructure.prototype.constructor = NamedDestructure;
  TypedDestructure.prototype = Object.create(Pattern.prototype);
  TypedDestructure.prototype.constructor = TypedDestructure;
  VarargDestructure.prototype = Object.create(Pattern.prototype);
  VarargDestructure.prototype.constructor = VarargDestructure;
  Source.prototype = Object.create(RhovasIr.prototype);
  Source.prototype.constructor = Source;
  Import.prototype = Object.create(RhovasIr.prototype);
  Import.prototype.constructor = Import;
  Type.prototype = Object.create(RhovasIr.prototype);
  Type.prototype.constructor = Type;
  function visit_0(ir) {
    var tmp0_subject = ir;
    var tmp;
    if (tmp0_subject instanceof Source) {
      tmp = this.visit_vtugyg_k$(ir);
    } else {
      if (tmp0_subject instanceof Import) {
        tmp = this.visit_r27f1e_k$(ir);
      } else {
        if (tmp0_subject instanceof Struct) {
          tmp = this.visit_vwjl76_k$(ir);
        } else {
          if (tmp0_subject instanceof Block) {
            tmp = this.visit_m5be4w_k$(ir);
          } else {
            if (tmp0_subject instanceof Component) {
              tmp = this.visit_x3tr4w_k$(ir);
            } else {
              if (tmp0_subject instanceof Expression) {
                tmp = this.visit_9kh5jp_k$(ir);
              } else {
                if (tmp0_subject instanceof Function) {
                  tmp = this.visitFunction(ir);
                } else {
                  if (tmp0_subject instanceof Declaration) {
                    tmp = this.visit_nxx3tv_k$(ir);
                  } else {
                    if (tmp0_subject instanceof Variable) {
                      tmp = this.visitAssignmentVariable(ir);
                    } else {
                      if (tmp0_subject instanceof Property) {
                        tmp = this.visitAssignmentProperty(ir);
                      } else {
                        if (tmp0_subject instanceof Index) {
                          tmp = this.visitAssignmentIndex(ir);
                        } else {
                          if (tmp0_subject instanceof If) {
                            tmp = this.visit_aoop96_k$(ir);
                          } else {
                            if (tmp0_subject instanceof Conditional) {
                              tmp = this.visit_tl397t_k$(ir);
                            } else {
                              if (tmp0_subject instanceof Structural) {
                                tmp = this.visit_spgndy_k$(ir);
                              } else {
                                if (tmp0_subject instanceof For) {
                                  tmp = this.visit_nwakwk_k$(ir);
                                } else {
                                  if (tmp0_subject instanceof While) {
                                    tmp = this.visit_ltudv0_k$(ir);
                                  } else {
                                    if (tmp0_subject instanceof Try) {
                                      tmp = this.visit_nwaag2_k$(ir);
                                    } else {
                                      if (tmp0_subject instanceof Catch) {
                                        tmp = this.visit_m4yioy_k$(ir);
                                      } else {
                                        if (tmp0_subject instanceof With) {
                                          tmp = this.visit_uhoptp_k$(ir);
                                        } else {
                                          if (tmp0_subject instanceof Label) {
                                            tmp = this.visit_m00qnd_k$(ir);
                                          } else {
                                            if (tmp0_subject instanceof Break) {
                                              tmp = this.visit_m57roe_k$(ir);
                                            } else {
                                              if (tmp0_subject instanceof Continue) {
                                                tmp = this.visit_66k4v8_k$(ir);
                                              } else {
                                                if (tmp0_subject instanceof Return) {
                                                  tmp = this.visit_v7ac8d_k$(ir);
                                                } else {
                                                  if (tmp0_subject instanceof Throw) {
                                                    tmp = this.visit_lvhkvr_k$(ir);
                                                  } else {
                                                    if (tmp0_subject instanceof Assert) {
                                                      tmp = this.visit_nd6wzn_k$(ir);
                                                    } else {
                                                      if (tmp0_subject instanceof Ensure) {
                                                        tmp = this.visit_p6mrgb_k$(ir);
                                                      } else {
                                                        if (tmp0_subject instanceof Require) {
                                                          tmp = this.visit_r7bsqg_k$(ir);
                                                        } else {
                                                          if (tmp0_subject instanceof Scalar) {
                                                            tmp = this.visit_vmw1m1_k$(ir);
                                                          } else {
                                                            if (tmp0_subject instanceof String_0) {
                                                              tmp = this.visit_vwjcjy_k$(ir);
                                                            } else {
                                                              if (tmp0_subject instanceof List_0) {
                                                                tmp = this.visit_uhvqp1_k$(ir);
                                                              } else {
                                                                if (tmp0_subject instanceof Object_0) {
                                                                  tmp = this.visit_tqbd6k_k$(ir);
                                                                } else {
                                                                  if (tmp0_subject instanceof Group) {
                                                                    tmp = this.visit_m2gkta_k$(ir);
                                                                  } else {
                                                                    if (tmp0_subject instanceof Unary) {
                                                                      tmp = this.visit_luuawe_k$(ir);
                                                                    } else {
                                                                      if (tmp0_subject instanceof Binary) {
                                                                        tmp = this.visit_nonbjy_k$(ir);
                                                                      } else {
                                                                        if (tmp0_subject instanceof Variable_0) {
                                                                          tmp = this.visitAccessVariable(ir);
                                                                        } else {
                                                                          if (tmp0_subject instanceof Property_0) {
                                                                            tmp = this.visitAccessProperty(ir);
                                                                          } else {
                                                                            if (tmp0_subject instanceof Index_0) {
                                                                              tmp = this.visitAccessIndex(ir);
                                                                            } else {
                                                                              if (tmp0_subject instanceof Function_0) {
                                                                                tmp = this.visitInvokeFunction(ir);
                                                                              } else {
                                                                                if (tmp0_subject instanceof Method) {
                                                                                  tmp = this.visit_su1yji_k$(ir);
                                                                                } else {
                                                                                  if (tmp0_subject instanceof Pipeline) {
                                                                                    tmp = this.visit_9eqie7_k$(ir);
                                                                                  } else {
                                                                                    if (tmp0_subject instanceof Lambda) {
                                                                                      tmp = this.visit_saok5g_k$(ir);
                                                                                    } else {
                                                                                      if (tmp0_subject instanceof Variable_1) {
                                                                                        tmp = this.visitPatternVariable(ir);
                                                                                      } else {
                                                                                        if (tmp0_subject instanceof Value) {
                                                                                          tmp = this.visit_luikx8_k$(ir);
                                                                                        } else {
                                                                                          if (tmp0_subject instanceof Predicate) {
                                                                                            tmp = this.visit_xypm56_k$(ir);
                                                                                          } else {
                                                                                            if (tmp0_subject instanceof OrderedDestructure) {
                                                                                              tmp = this.visit_1j11pa_k$(ir);
                                                                                            } else {
                                                                                              if (tmp0_subject instanceof NamedDestructure) {
                                                                                                tmp = this.visit_ub7cpi_k$(ir);
                                                                                              } else {
                                                                                                if (tmp0_subject instanceof TypedDestructure) {
                                                                                                  tmp = this.visit_fb27qz_k$(ir);
                                                                                                } else {
                                                                                                  if (tmp0_subject instanceof VarargDestructure) {
                                                                                                    tmp = this.visit_hjdppi_k$(ir);
                                                                                                  } else {
                                                                                                    if (tmp0_subject instanceof Type) {
                                                                                                      tmp = this.visit_uhqb0p_k$(ir);
                                                                                                    } else {
                                                                                                      noWhenBranchMatchedException();
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function get_name() {
    return this.get_function_8yrfj3_k$().get_name_woqyms_k$();
  }
  function get_generics() {
    return this.get_function_8yrfj3_k$().get_generics_1v316j_k$();
  }
  function get_receiver() {
    return first(this.get_function_8yrfj3_k$().get_parameters_cl4rkd_k$());
  }
  function get_parameters() {
    return drop(this.get_function_8yrfj3_k$().get_parameters_cl4rkd_k$(), 1);
  }
  function get_returns() {
    return this.get_function_8yrfj3_k$().get_returns_jfk3fe_k$();
  }
  function get_throws() {
    return this.get_function_8yrfj3_k$().get_throws_jy60ra_k$();
  }
  function get_name_0() {
    return this.get_getter_dqyx3o_k$().get_name_woqyms_k$();
  }
  function get_type() {
    return this.get_getter_dqyx3o_k$().get_returns_jfk3fe_k$();
  }
  function get_mutable() {
    return !(this.get_setter_jfidu0_k$() == null);
  }
  Declaration_3.prototype = Object.create(Scope.prototype);
  Declaration_3.prototype.constructor = Declaration_3;
  Definition_0.prototype = Object.create(Scope.prototype);
  Definition_0.prototype.constructor = Definition_0;
  Reference.prototype = Object.create(Type_0.prototype);
  Reference.prototype.constructor = Reference;
  Generic.prototype = Object.create(Type_0.prototype);
  Generic.prototype.constructor = Generic;
  Variant.prototype = Object.create(Type_0.prototype);
  Variant.prototype.constructor = Variant;
  EvaluateException.prototype = Object.create(Exception.prototype);
  EvaluateException.prototype.constructor = EvaluateException;
  Break_0.prototype = Object.create(Exception.prototype);
  Break_0.prototype.constructor = Break_0;
  Continue_0.prototype = Object.create(Exception.prototype);
  Continue_0.prototype.constructor = Continue_0;
  Return_0.prototype = Object.create(Exception.prototype);
  Return_0.prototype.constructor = Return_0;
  Throw_0.prototype = Object.create(Exception.prototype);
  Throw_0.prototype.constructor = Throw_0;
  AnyInitializer.prototype = Object.create(TypeInitializer.prototype);
  AnyInitializer.prototype.constructor = AnyInitializer;
  AtomInitializer.prototype = Object.create(TypeInitializer.prototype);
  AtomInitializer.prototype.constructor = AtomInitializer;
  BooleanInitializer.prototype = Object.create(TypeInitializer.prototype);
  BooleanInitializer.prototype.constructor = BooleanInitializer;
  DecimalInitializer.prototype = Object.create(TypeInitializer.prototype);
  DecimalInitializer.prototype.constructor = DecimalInitializer;
  ExceptionInitializer.prototype = Object.create(TypeInitializer.prototype);
  ExceptionInitializer.prototype.constructor = ExceptionInitializer;
  IntegerInitializer.prototype = Object.create(TypeInitializer.prototype);
  IntegerInitializer.prototype.constructor = IntegerInitializer;
  KernelInitializer.prototype = Object.create(TypeInitializer.prototype);
  KernelInitializer.prototype.constructor = KernelInitializer;
  LambdaInitializer.prototype = Object.create(TypeInitializer.prototype);
  LambdaInitializer.prototype.constructor = LambdaInitializer;
  ListInitializer.prototype = Object.create(TypeInitializer.prototype);
  ListInitializer.prototype.constructor = ListInitializer;
  NullInitializer.prototype = Object.create(TypeInitializer.prototype);
  NullInitializer.prototype.constructor = NullInitializer;
  NullableInitializer.prototype = Object.create(TypeInitializer.prototype);
  NullableInitializer.prototype.constructor = NullableInitializer;
  ObjectInitializer.prototype = Object.create(TypeInitializer.prototype);
  ObjectInitializer.prototype.constructor = ObjectInitializer;
  StringInitializer.prototype = Object.create(TypeInitializer.prototype);
  StringInitializer.prototype.constructor = StringInitializer;
  VoidInitializer.prototype = Object.create(TypeInitializer.prototype);
  VoidInitializer.prototype.constructor = VoidInitializer;
  ParseException.prototype = Object.create(Exception.prototype);
  ParseException.prototype.constructor = ParseException;
  Source_0.prototype = Object.create(DslAst.prototype);
  Source_0.prototype.constructor = Source_0;
  DslLexer.prototype = Object.create(Lexer.prototype);
  DslLexer.prototype.constructor = DslLexer;
  DslParser.prototype = Object.create(Parser.prototype);
  DslParser.prototype.constructor = DslParser;
  DslTokenType.prototype = Object.create(Enum.prototype);
  DslTokenType.prototype.constructor = DslTokenType;
  Component_2.prototype = Object.create(RhovasAst.prototype);
  Component_2.prototype.constructor = Component_2;
  Struct_0.prototype = Object.create(Component_2.prototype);
  Struct_0.prototype.constructor = Struct_0;
  Statement_0.prototype = Object.create(RhovasAst.prototype);
  Statement_0.prototype.constructor = Statement_0;
  Match_0.prototype = Object.create(Statement_0.prototype);
  Match_0.prototype.constructor = Match_0;
  Conditional_0.prototype = Object.create(Match_0.prototype);
  Conditional_0.prototype.constructor = Conditional_0;
  Structural_0.prototype = Object.create(Match_0.prototype);
  Structural_0.prototype.constructor = Structural_0;
  Catch_0.prototype = Object.create(RhovasAst.prototype);
  Catch_0.prototype.constructor = Catch_0;
  Block_0.prototype = Object.create(Statement_0.prototype);
  Block_0.prototype.constructor = Block_0;
  Component_1.prototype = Object.create(Statement_0.prototype);
  Component_1.prototype.constructor = Component_1;
  Expression_1.prototype = Object.create(Statement_0.prototype);
  Expression_1.prototype.constructor = Expression_1;
  Function_2.prototype = Object.create(Statement_0.prototype);
  Function_2.prototype.constructor = Function_2;
  Declaration_5.prototype = Object.create(Statement_0.prototype);
  Declaration_5.prototype.constructor = Declaration_5;
  Assignment_0.prototype = Object.create(Statement_0.prototype);
  Assignment_0.prototype.constructor = Assignment_0;
  If_0.prototype = Object.create(Statement_0.prototype);
  If_0.prototype.constructor = If_0;
  For_0.prototype = Object.create(Statement_0.prototype);
  For_0.prototype.constructor = For_0;
  While_0.prototype = Object.create(Statement_0.prototype);
  While_0.prototype.constructor = While_0;
  Try_0.prototype = Object.create(Statement_0.prototype);
  Try_0.prototype.constructor = Try_0;
  With_0.prototype = Object.create(Statement_0.prototype);
  With_0.prototype.constructor = With_0;
  Label_0.prototype = Object.create(Statement_0.prototype);
  Label_0.prototype.constructor = Label_0;
  Break_1.prototype = Object.create(Statement_0.prototype);
  Break_1.prototype.constructor = Break_1;
  Continue_1.prototype = Object.create(Statement_0.prototype);
  Continue_1.prototype.constructor = Continue_1;
  Return_1.prototype = Object.create(Statement_0.prototype);
  Return_1.prototype.constructor = Return_1;
  Throw_1.prototype = Object.create(Statement_0.prototype);
  Throw_1.prototype.constructor = Throw_1;
  Assert_0.prototype = Object.create(Statement_0.prototype);
  Assert_0.prototype.constructor = Assert_0;
  Require_0.prototype = Object.create(Statement_0.prototype);
  Require_0.prototype.constructor = Require_0;
  Ensure_0.prototype = Object.create(Statement_0.prototype);
  Ensure_0.prototype.constructor = Ensure_0;
  Expression_2.prototype = Object.create(RhovasAst.prototype);
  Expression_2.prototype.constructor = Expression_2;
  Literal_0.prototype = Object.create(Expression_2.prototype);
  Literal_0.prototype.constructor = Literal_0;
  Scalar_0.prototype = Object.create(Literal_0.prototype);
  Scalar_0.prototype.constructor = Scalar_0;
  String_1.prototype = Object.create(Literal_0.prototype);
  String_1.prototype.constructor = String_1;
  List_1.prototype = Object.create(Literal_0.prototype);
  List_1.prototype.constructor = List_1;
  Object_2.prototype = Object.create(Literal_0.prototype);
  Object_2.prototype.constructor = Object_2;
  Access_0.prototype = Object.create(Expression_2.prototype);
  Access_0.prototype.constructor = Access_0;
  Variable_3.prototype = Object.create(Access_0.prototype);
  Variable_3.prototype.constructor = Variable_3;
  Property_2.prototype = Object.create(Access_0.prototype);
  Property_2.prototype.constructor = Property_2;
  Index_1.prototype = Object.create(Access_0.prototype);
  Index_1.prototype.constructor = Index_1;
  Invoke_0.prototype = Object.create(Expression_2.prototype);
  Invoke_0.prototype.constructor = Invoke_0;
  Function_3.prototype = Object.create(Invoke_0.prototype);
  Function_3.prototype.constructor = Function_3;
  Method_1.prototype = Object.create(Invoke_0.prototype);
  Method_1.prototype.constructor = Method_1;
  Pipeline_0.prototype = Object.create(Invoke_0.prototype);
  Pipeline_0.prototype.constructor = Pipeline_0;
  Macro.prototype = Object.create(Invoke_0.prototype);
  Macro.prototype.constructor = Macro;
  Group_0.prototype = Object.create(Expression_2.prototype);
  Group_0.prototype.constructor = Group_0;
  Unary_0.prototype = Object.create(Expression_2.prototype);
  Unary_0.prototype.constructor = Unary_0;
  Binary_0.prototype = Object.create(Expression_2.prototype);
  Binary_0.prototype.constructor = Binary_0;
  Lambda_1.prototype = Object.create(Expression_2.prototype);
  Lambda_1.prototype.constructor = Lambda_1;
  Pattern_0.prototype = Object.create(RhovasAst.prototype);
  Pattern_0.prototype.constructor = Pattern_0;
  Value_0.prototype = Object.create(Pattern_0.prototype);
  Value_0.prototype.constructor = Value_0;
  Variable_4.prototype = Object.create(Pattern_0.prototype);
  Variable_4.prototype.constructor = Variable_4;
  OrderedDestructure_0.prototype = Object.create(Pattern_0.prototype);
  OrderedDestructure_0.prototype.constructor = OrderedDestructure_0;
  NamedDestructure_0.prototype = Object.create(Pattern_0.prototype);
  NamedDestructure_0.prototype.constructor = NamedDestructure_0;
  TypedDestructure_0.prototype = Object.create(Pattern_0.prototype);
  TypedDestructure_0.prototype.constructor = TypedDestructure_0;
  VarargDestructure_0.prototype = Object.create(Pattern_0.prototype);
  VarargDestructure_0.prototype.constructor = VarargDestructure_0;
  Predicate_0.prototype = Object.create(Pattern_0.prototype);
  Predicate_0.prototype.constructor = Predicate_0;
  Source_1.prototype = Object.create(RhovasAst.prototype);
  Source_1.prototype.constructor = Source_1;
  Import_0.prototype = Object.create(RhovasAst.prototype);
  Import_0.prototype.constructor = Import_0;
  Type_2.prototype = Object.create(RhovasAst.prototype);
  Type_2.prototype.constructor = Type_2;
  RhovasLexer.prototype = Object.create(Lexer.prototype);
  RhovasLexer.prototype.constructor = RhovasLexer;
  RhovasParser.prototype = Object.create(Parser.prototype);
  RhovasParser.prototype.constructor = RhovasParser;
  RhovasTokenType.prototype = Object.create(Enum.prototype);
  RhovasTokenType.prototype.constructor = RhovasTokenType;
  //endregion
  function set_INTERPRETER(_set____db54di) {
    init_properties_Interpreter_kt_75h916();
    INTERPRETER = _set____db54di;
  }
  function get_INTERPRETER() {
    init_properties_Interpreter_kt_75h916();
    return INTERPRETER;
  }
  var INTERPRETER;
  function get_EVALUATOR() {
    init_properties_Interpreter_kt_75h916();
    return get_INTERPRETER().evaluator_1;
  }
  function Interpreter_init_$Init$(stdout, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      stdout = println$ref();
    }
    Interpreter.call($this, stdout);
    return $this;
  }
  function Interpreter_init_$Create$(stdout, $mask0, $marker) {
    return Interpreter_init_$Init$(stdout, $mask0, $marker, Object.create(Interpreter.prototype));
  }
  function println$ref() {
    var l = function (p0) {
      println(p0);
      return Unit_getInstance();
    };
    l.callableName = 'println';
    return l;
  }
  function Interpreter(stdout) {
    this.stdout_1 = stdout;
    this.scope_1 = new Definition_0(Library_getInstance().SCOPE_1);
    this.analyzer_1 = new RhovasAnalyzer(this.scope_1);
    this.evaluator_1 = new Evaluator(this.scope_1);
  }
  Interpreter.prototype.get_stdout_jngzmc_k$ = function () {
    return this.stdout_1;
  };
  Interpreter.prototype.get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  Interpreter.prototype.get_analyzer_ma910v_k$ = function () {
    return this.analyzer_1;
  };
  Interpreter.prototype.get_evaluator_kfg5fq_k$ = function () {
    return this.evaluator_1;
  };
  Interpreter.prototype.eval_mdzo8e_k$ = function (input) {
    var original = get_INTERPRETER();
    var tmp;
    try {
      set_INTERPRETER(this);
      var tmp_0;
      try {
        tmp_0 = (new RhovasParser(input)).parse_4mmrzm_k$('source');
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ParseException) {
          var tmp_2;
          try {
            tmp_2 = (new RhovasParser(input)).parse_4mmrzm_k$('expression');
          } catch ($p) {
            var tmp_3;
            if ($p instanceof ParseException) {
              throw $p;
            } else {
              throw $p;
            }
            tmp_2 = tmp_3;
          }
          tmp_1 = tmp_2;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var ast = tmp_0;
      var obj = this.evaluator_1.visit_iveuaz_k$(this.analyzer_1.visit_eysdh9_k$(ast));
      var tmp0_subject = ast;
      var tmp_4;
      if (tmp0_subject instanceof Expression_2) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.listOf' call
        tmp$ret$0 = emptyList();
        var tmp_5 = ensureNotNull(obj.methods_1.get_ffk12n_k$('toString', tmp$ret$0));
        var tmp$ret$1;
        // Inline function 'kotlin.collections.listOf' call
        tmp$ret$1 = emptyList();
        var tmp_6 = tmp_5.invoke_ed3umv_k$(tmp$ret$1).value_1;
        tmp_4 = (!(tmp_6 == null) ? typeof tmp_6 === 'string' : false) ? tmp_6 : THROW_CCE();
      } else {
        tmp_4 = null;
      }
      tmp = tmp_4;
    } catch ($p) {
      var tmp_7;
      if ($p instanceof ParseException) {
        tmp_7 = input.diagnostic_7jnof3_k$($p.summary_1, $p.details_1, $p.range_1, $p.context_1);
      } else {
        if ($p instanceof AnalyzeException) {
          tmp_7 = input.diagnostic_7jnof3_k$($p.summary_1, $p.details_1, $p.range_1, $p.context_1);
        } else {
          if ($p instanceof EvaluateException) {
            tmp_7 = input.diagnostic_7jnof3_k$($p.summary_1, $p.details_1, $p.range_1, $p.context_1);
          } else {
            if ($p instanceof Exception) {
              tmp_7 = 'Unexpected exception: ' + $p.message + ('\n\n' + stackTraceToString($p));
            } else {
              throw $p;
            }
          }
        }
      }
      tmp = tmp_7;
    }
    finally {
      set_INTERPRETER(original);
    }
    return tmp;
  };
  Interpreter.$metadata$ = classMeta('Interpreter');
  var properties_initialized_Interpreter_kt_ze4mza;
  function init_properties_Interpreter_kt_75h916() {
    if (properties_initialized_Interpreter_kt_ze4mza) {
    } else {
      properties_initialized_Interpreter_kt_ze4mza = true;
      INTERPRETER = Interpreter_init_$Create$(null, 1, null);
    }
  }
  function AnalyzeException(summary, details, range, context) {
    Exception_init_$Init$('' + range.line_1 + ':' + range.column_1 + '-' + (range.column_1 + range.length_1 | 0) + ': ' + summary, this);
    this.summary_1 = summary;
    this.details_1 = details;
    this.range_1 = range;
    this.context_1 = context;
    captureStack(this, AnalyzeException);
  }
  AnalyzeException.prototype.get_summary_tgfqkj_k$ = function () {
    return this.summary_1;
  };
  AnalyzeException.prototype.get_details_r0zbrt_k$ = function () {
    return this.details_1;
  };
  AnalyzeException.prototype.get_range_ixu978_k$ = function () {
    return this.range_1;
  };
  AnalyzeException.prototype.get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  AnalyzeException.$metadata$ = classMeta('AnalyzeException', undefined, undefined, undefined, undefined, Exception.prototype);
  function _get_children__my42wc($this) {
    return $this.children_1;
  }
  function Item(value) {
    this.value_1 = value;
  }
  Item.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Item.$metadata$ = classMeta('Item');
  function Context(items) {
    this.items_1 = items;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.children_1 = tmp$ret$0;
  }
  Context.prototype.get_items_it823b_k$ = function () {
    return this.items_1;
  };
  Context.prototype.get_88q2op_k$ = function (item) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.get' call
    var tmp0_get = this.items_1;
    var tmp1_get = item.get_simpleName_r6f8py_k$();
    tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).get_1mhr4y_k$(tmp1_get);
    var tmp = ensureNotNull(tmp$ret$0).value_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  Context.prototype.child_1kc9wc_k$ = function () {
    var tmp$ret$5;
    // Inline function 'kotlin.also' call
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp0_mapValues = this.items_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp1_mapValuesTo = LinkedHashMap_init_$Create$(mapCapacity(tmp0_mapValues.get_size_woubt6_k$()));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = tmp0_mapValues.get_entries_p20ztl_k$();
    var tmp0_iterator = tmp0_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$0 = element.get_key_18j28a_k$();
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.Context.child.<anonymous>' call
      tmp$ret$1 = element.get_value_j01efc_k$().child_1kc9wc_k$();
      tmp1_mapValuesTo.put_3mhbri_k$(tmp, tmp$ret$1);
    }
    tmp$ret$2 = tmp1_mapValuesTo;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp1_also = new Context(tmp$ret$4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.Context.child.<anonymous>' call
    this.children_1.add_1j60pz_k$(tmp1_also);
    tmp$ret$5 = tmp1_also;
    return tmp$ret$5;
  };
  Context.prototype.merge_b8btp5_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.items_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.analyzer.Context.merge.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var k = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var v = tmp$ret$2;
      var tmp = v instanceof Item ? v : THROW_CCE();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = this.children_1;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator_0 = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$3;
        // Inline function 'dev.rhovas.interpreter.analyzer.Context.merge.<anonymous>.<anonymous>' call
        tmp$ret$3 = ensureNotNull(item.items_1.get_1mhr4y_k$(k)).value_1;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$3);
      }
      tmp$ret$4 = tmp0_mapTo;
      tmp$ret$5 = tmp$ret$4;
      tmp.merge_7xao3c_k$(tmp$ret$5);
    }
    this.children_1.clear_j9y8zo_k$();
  };
  Context.prototype.with_s1jj2w_k$ = function (items) {
    var tmp$ret$3;
    // Inline function 'kotlin.also' call
    var tmp0_also = toMutableMap(this.items_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.Context.with.<anonymous>' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(items.length), 16);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var indexedObject = items;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.analyzer.Context.with.<anonymous>.<anonymous>' call
      tmp$ret$0 = ensureNotNull(getKClassFromExpression(element).get_simpleName_r6f8py_k$());
      tmp0_associateByTo.put_3mhbri_k$(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    tmp0_also.putAll_mee1c3_k$(tmp$ret$2);
    tmp$ret$3 = tmp0_also;
    return new Context(tmp$ret$3);
  };
  Context.prototype.component1_7eebsc_k$ = function () {
    return this.items_1;
  };
  Context.prototype.copy_dkfs1z_k$ = function (items) {
    return new Context(items);
  };
  Context.prototype.copy$default_l4dl2z_k$ = function (items, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      items = this.items_1;
    return this.copy_dkfs1z_k$(items);
  };
  Context.prototype.toString = function () {
    return 'Context(items=' + this.items_1 + ')';
  };
  Context.prototype.hashCode = function () {
    return hashCode(this.items_1);
  };
  Context.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Context))
      return false;
    var tmp0_other_with_cast = other instanceof Context ? other : THROW_CCE();
    if (!equals(this.items_1, tmp0_other_with_cast.items_1))
      return false;
    return true;
  };
  Context.$metadata$ = classMeta('Context');
  function InputContext(inputs) {
    Item.call(this, inputs);
    this.inputs_1 = inputs;
  }
  InputContext.prototype.get_inputs_etxsdu_k$ = function () {
    return this.inputs_1;
  };
  InputContext.prototype.child_1kc9wc_k$ = function () {
    return this;
  };
  InputContext.prototype.merge_zdzf2h_k$ = function (children) {
  };
  InputContext.prototype.merge_7xao3c_k$ = function (children) {
    return this.merge_zdzf2h_k$(children);
  };
  InputContext.prototype.component1_7eebsc_k$ = function () {
    return this.inputs_1;
  };
  InputContext.prototype.copy_xvm0a9_k$ = function (inputs) {
    return new InputContext(inputs);
  };
  InputContext.prototype.copy$default_bxd2s1_k$ = function (inputs, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      inputs = this.inputs_1;
    return this.copy_xvm0a9_k$(inputs);
  };
  InputContext.prototype.toString = function () {
    return 'InputContext(inputs=' + this.inputs_1 + ')';
  };
  InputContext.prototype.hashCode = function () {
    return this.inputs_1.hashCode();
  };
  InputContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InputContext))
      return false;
    var tmp0_other_with_cast = other instanceof InputContext ? other : THROW_CCE();
    if (!this.inputs_1.equals(tmp0_other_with_cast.inputs_1))
      return false;
    return true;
  };
  InputContext.$metadata$ = classMeta('InputContext', undefined, undefined, undefined, undefined, Item.prototype);
  function Analyzer(context) {
    this.context_1 = context;
  }
  Analyzer.prototype.set_context_l1nspv_k$ = function (_set____db54di) {
    this.context_1 = _set____db54di;
  };
  Analyzer.prototype.get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  Analyzer.prototype.get_inputs_wrcrs2_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_88q2op_k$(getKClass(InputContext));
  };
  Analyzer.prototype.analyze_r6hxcx_k$ = function (context, block) {
    var original = this.context_1;
    var tmp = this;
    var tmp0_elvis_lhs = context;
    tmp.context_1 = tmp0_elvis_lhs == null ? original.child_1kc9wc_k$() : tmp0_elvis_lhs;
    try {
      return block();
    }finally {
      var tmp_0 = this;
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.Analyzer.analyze.<anonymous>' call
      if (context == null) {
        original.merge_b8btp5_k$();
      }
      tmp$ret$0 = original;
      tmp_0.context_1 = tmp$ret$0;
    }
  };
  Analyzer.prototype.analyze$default_9wwnk4_k$ = function (context, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = null;
    return this.analyze_r6hxcx_k$(context, block);
  };
  Analyzer.prototype.require_qhwfzp_k$ = function (condition, error) {
    if (!condition) {
      throw error();
    }
  };
  Analyzer.prototype.error_tvhd7i_k$ = function (ast, summary, details) {
    var tmp0_safe_receiver = ast.context_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : first(tmp0_safe_receiver);
    return this.error_5d2tv3_k$(summary, details, tmp1_elvis_lhs == null ? new Range(0, 1, 0, 0) : tmp1_elvis_lhs);
  };
  Analyzer.prototype.error_5d2tv3_k$ = function (summary, details, range) {
    return new AnalyzeException(summary, details, range, this.get_inputs_wrcrs2_k$(this.context_1));
  };
  Analyzer.$metadata$ = classMeta('Analyzer');
  function Data(type, bindings) {
    this.type_1 = type;
    this.bindings_1 = bindings;
  }
  Data.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Data.prototype.get_bindings_g97nah_k$ = function () {
    return this.bindings_1;
  };
  Data.prototype.component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  Data.prototype.component2_7eebsb_k$ = function () {
    return this.bindings_1;
  };
  Data.prototype.copy_13b85l_k$ = function (type, bindings) {
    return new Data(type, bindings);
  };
  Data.prototype.copy$default_ou8pyq_k$ = function (type, bindings, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.type_1;
    if (!(($mask0 & 2) === 0))
      bindings = this.bindings_1;
    return this.copy_13b85l_k$(type, bindings);
  };
  Data.prototype.toString = function () {
    return 'Data(type=' + this.type_1 + ', bindings=' + this.bindings_1 + ')';
  };
  Data.prototype.hashCode = function () {
    var result = hashCode(this.type_1);
    result = imul(result, 31) + hashCode(this.bindings_1) | 0;
    return result;
  };
  Data.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Data))
      return false;
    var tmp0_other_with_cast = other instanceof Data ? other : THROW_CCE();
    if (!equals(this.type_1, tmp0_other_with_cast.type_1))
      return false;
    if (!equals(this.bindings_1, tmp0_other_with_cast.bindings_1))
      return false;
    return true;
  };
  Data.$metadata$ = classMeta('Data');
  function RhovasAnalyzer$DeclarePhase$visit$lambda(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Redefined type.', 'The type ' + $ast.name_1 + ' is already defined in this scope.');
    };
  }
  function RhovasAnalyzer$DefinePhase$visit$lambda(this$0, $element) {
    return function () {
      return this$0.error_tvhd7i_k$($element, 'Invalid field declaration.', 'A struct field requires a defined type.');
    };
  }
  function RhovasAnalyzer$DefinePhase$visit$lambda_0($element) {
    return function (arguments_0) {
      var tmp = arguments_0.get_fkrdnv_k$(0).value_1;
      return ensureNotNull(((!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE()).get_1mhr4y_k$($element.name_1));
    };
  }
  function RhovasAnalyzer$DefinePhase$visit$lambda_1($element) {
    return function (arguments_0) {
      var tmp = arguments_0.get_fkrdnv_k$(0).value_1;
      var tmp0_set = (!(tmp == null) ? isInterface(tmp, MutableMap) : false) ? tmp : THROW_CCE();
      var tmp1_set = $element.name_1;
      var tmp2_set = arguments_0.get_fkrdnv_k$(1);
      tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
      return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
    };
  }
  function RhovasAnalyzer$DefinePhase$visit$lambda_2($ast) {
    return function (arguments_0) {
      var tmp = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('String'));
      var tmp_0 = $ast.name_1 + ' ';
      var tmp_1 = (new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object')), arguments_0.get_fkrdnv_k$(0).value_1)).methods_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      var tmp_2 = ensureNotNull(tmp_1.get_ffk12n_k$('toString', tmp$ret$0));
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$1 = emptyList();
      var tmp_3 = tmp_2.invoke_ed3umv_k$(tmp$ret$1).value_1;
      return new Object_1(tmp, tmp_0 + ((!(tmp_3 == null) ? typeof tmp_3 === 'string' : false) ? tmp_3 : THROW_CCE()));
    };
  }
  function _get_declare__qh6vbt($this) {
    return $this.declare_1;
  }
  function _get_define__7oluts($this) {
    return $this.define_1;
  }
  function _get_scope__bi2zur(_this__u8e3s4, $this) {
    return _this__u8e3s4.get_88q2op_k$(getKClass(ScopeContext));
  }
  function _get_function__m6jw1f(_this__u8e3s4, $this) {
    return _this__u8e3s4.get_88q2op_k$(getKClass(FunctionContext));
  }
  function _get_labels__ya3y1g(_this__u8e3s4, $this) {
    return _this__u8e3s4.get_88q2op_k$(getKClass(LabelContext));
  }
  function _get_jumps__fhmkd0(_this__u8e3s4, $this) {
    return _this__u8e3s4.get_88q2op_k$(getKClass(JumpContext));
  }
  function _get_exceptions__5bldl3(_this__u8e3s4, $this) {
    return _this__u8e3s4.get_88q2op_k$(getKClass(ExceptionContext));
  }
  function _get_pattern__f9i1rz(_this__u8e3s4, $this) {
    return _this__u8e3s4.get_88q2op_k$(getKClass(PatternContext));
  }
  function ScopeContext(scope) {
    Item.call(this, scope);
    this.scope_1 = scope;
  }
  ScopeContext.prototype.get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  ScopeContext.prototype.child_1kc9wc_k$ = function () {
    return new ScopeContext(new Declaration_3(this.scope_1));
  };
  ScopeContext.prototype.merge_sv58jj_k$ = function (children) {
  };
  ScopeContext.prototype.merge_7xao3c_k$ = function (children) {
    return this.merge_sv58jj_k$(children);
  };
  ScopeContext.prototype.component1_7eebsc_k$ = function () {
    return this.scope_1;
  };
  ScopeContext.prototype.copy_8eeu5f_k$ = function (scope) {
    return new ScopeContext(scope);
  };
  ScopeContext.prototype.copy$default_5ocoix_k$ = function (scope, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      scope = this.scope_1;
    return this.copy_8eeu5f_k$(scope);
  };
  ScopeContext.prototype.toString = function () {
    return 'ScopeContext(scope=' + this.scope_1 + ')';
  };
  ScopeContext.prototype.hashCode = function () {
    return hashCode(this.scope_1);
  };
  ScopeContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScopeContext))
      return false;
    var tmp0_other_with_cast = other instanceof ScopeContext ? other : THROW_CCE();
    if (!equals(this.scope_1, tmp0_other_with_cast.scope_1))
      return false;
    return true;
  };
  ScopeContext.$metadata$ = classMeta('ScopeContext', undefined, undefined, undefined, undefined, Item.prototype);
  function FunctionContext(function_0) {
    Item.call(this, function_0);
    this.function_1 = function_0;
  }
  FunctionContext.prototype.get_function_8yrfj3_k$ = function () {
    return this.function_1;
  };
  FunctionContext.prototype.child_1kc9wc_k$ = function () {
    return this;
  };
  FunctionContext.prototype.merge_lbsdr0_k$ = function (children) {
  };
  FunctionContext.prototype.merge_7xao3c_k$ = function (children) {
    return this.merge_lbsdr0_k$(children);
  };
  FunctionContext.prototype.component1_7eebsc_k$ = function () {
    return this.function_1;
  };
  FunctionContext.prototype.copy_u5vgro_k$ = function (function_0) {
    return new FunctionContext(function_0);
  };
  FunctionContext.prototype.copy$default_uq7zr7_k$ = function (function_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      function_0 = this.function_1;
    return this.copy_u5vgro_k$(function_0);
  };
  FunctionContext.prototype.toString = function () {
    return 'FunctionContext(function=' + this.function_1 + ')';
  };
  FunctionContext.prototype.hashCode = function () {
    return this.function_1 == null ? 0 : hashCode(this.function_1);
  };
  FunctionContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FunctionContext))
      return false;
    var tmp0_other_with_cast = other instanceof FunctionContext ? other : THROW_CCE();
    if (!equals(this.function_1, tmp0_other_with_cast.function_1))
      return false;
    return true;
  };
  FunctionContext.$metadata$ = classMeta('FunctionContext', undefined, undefined, undefined, undefined, Item.prototype);
  function LabelContext(labels) {
    Item.call(this, labels);
    this.labels_1 = labels;
  }
  LabelContext.prototype.get_labels_g1o1zc_k$ = function () {
    return this.labels_1;
  };
  LabelContext.prototype.child_1kc9wc_k$ = function () {
    return new LabelContext(toMutableSet(this.labels_1));
  };
  LabelContext.prototype.merge_cvdnm1_k$ = function (children) {
  };
  LabelContext.prototype.merge_7xao3c_k$ = function (children) {
    return this.merge_cvdnm1_k$(children);
  };
  LabelContext.prototype.component1_7eebsc_k$ = function () {
    return this.labels_1;
  };
  LabelContext.prototype.copy_z62tjt_k$ = function (labels) {
    return new LabelContext(labels);
  };
  LabelContext.prototype.copy$default_rv5ppz_k$ = function (labels, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      labels = this.labels_1;
    return this.copy_z62tjt_k$(labels);
  };
  LabelContext.prototype.toString = function () {
    return 'LabelContext(labels=' + this.labels_1 + ')';
  };
  LabelContext.prototype.hashCode = function () {
    return hashCode(this.labels_1);
  };
  LabelContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LabelContext))
      return false;
    var tmp0_other_with_cast = other instanceof LabelContext ? other : THROW_CCE();
    if (!equals(this.labels_1, tmp0_other_with_cast.labels_1))
      return false;
    return true;
  };
  LabelContext.$metadata$ = classMeta('LabelContext', undefined, undefined, undefined, undefined, Item.prototype);
  function JumpContext(jumps) {
    Item.call(this, jumps);
    this.jumps_1 = jumps;
  }
  JumpContext.prototype.get_jumps_itsnoc_k$ = function () {
    return this.jumps_1;
  };
  JumpContext.prototype.child_1kc9wc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    return new JumpContext(tmp$ret$0);
  };
  JumpContext.prototype.merge_cvdnm1_k$ = function (children) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(children, Collection)) {
        tmp = children.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = children.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.JumpContext.merge.<anonymous>' call
        tmp$ret$1 = element.isEmpty_y1axqb_k$();
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      this.jumps_1.clear_j9y8zo_k$();
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = children.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.JumpContext.merge.<anonymous>' call
        this.jumps_1.addAll_oxxjjk_k$(element_0);
      }
    }
  };
  JumpContext.prototype.merge_7xao3c_k$ = function (children) {
    return this.merge_cvdnm1_k$(children);
  };
  JumpContext.prototype.component1_7eebsc_k$ = function () {
    return this.jumps_1;
  };
  JumpContext.prototype.copy_z62tjt_k$ = function (jumps) {
    return new JumpContext(jumps);
  };
  JumpContext.prototype.copy$default_rv5ppz_k$ = function (jumps, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      jumps = this.jumps_1;
    return this.copy_z62tjt_k$(jumps);
  };
  JumpContext.prototype.toString = function () {
    return 'JumpContext(jumps=' + this.jumps_1 + ')';
  };
  JumpContext.prototype.hashCode = function () {
    return hashCode(this.jumps_1);
  };
  JumpContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JumpContext))
      return false;
    var tmp0_other_with_cast = other instanceof JumpContext ? other : THROW_CCE();
    if (!equals(this.jumps_1, tmp0_other_with_cast.jumps_1))
      return false;
    return true;
  };
  JumpContext.$metadata$ = classMeta('JumpContext', undefined, undefined, undefined, undefined, Item.prototype);
  function ExceptionContext(exceptions) {
    Item.call(this, exceptions);
    this.exceptions_1 = exceptions;
  }
  ExceptionContext.prototype.get_exceptions_t4e64t_k$ = function () {
    return this.exceptions_1;
  };
  ExceptionContext.prototype.child_1kc9wc_k$ = function () {
    return new ExceptionContext(toMutableSet(this.exceptions_1));
  };
  ExceptionContext.prototype.merge_3usot7_k$ = function (children) {
  };
  ExceptionContext.prototype.merge_7xao3c_k$ = function (children) {
    return this.merge_3usot7_k$(children);
  };
  ExceptionContext.prototype.component1_7eebsc_k$ = function () {
    return this.exceptions_1;
  };
  ExceptionContext.prototype.copy_bbkabx_k$ = function (exceptions) {
    return new ExceptionContext(exceptions);
  };
  ExceptionContext.prototype.copy$default_jvibcv_k$ = function (exceptions, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exceptions = this.exceptions_1;
    return this.copy_bbkabx_k$(exceptions);
  };
  ExceptionContext.prototype.toString = function () {
    return 'ExceptionContext(exceptions=' + this.exceptions_1 + ')';
  };
  ExceptionContext.prototype.hashCode = function () {
    return hashCode(this.exceptions_1);
  };
  ExceptionContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExceptionContext))
      return false;
    var tmp0_other_with_cast = other instanceof ExceptionContext ? other : THROW_CCE();
    if (!equals(this.exceptions_1, tmp0_other_with_cast.exceptions_1))
      return false;
    return true;
  };
  ExceptionContext.$metadata$ = classMeta('ExceptionContext', undefined, undefined, undefined, undefined, Item.prototype);
  function PatternContext(type, bindings) {
    Item.call(this, new Data(type, bindings));
    this.type_1 = type;
    this.bindings_1 = bindings;
  }
  PatternContext.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  PatternContext.prototype.get_bindings_g97nah_k$ = function () {
    return this.bindings_1;
  };
  PatternContext.prototype.child_1kc9wc_k$ = function () {
    return this;
  };
  PatternContext.prototype.merge_q9h39t_k$ = function (children) {
  };
  PatternContext.prototype.merge_7xao3c_k$ = function (children) {
    return this.merge_q9h39t_k$(children);
  };
  PatternContext.prototype.component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  PatternContext.prototype.component2_7eebsb_k$ = function () {
    return this.bindings_1;
  };
  PatternContext.prototype.copy_13b85l_k$ = function (type, bindings) {
    return new PatternContext(type, bindings);
  };
  PatternContext.prototype.copy$default_ou8pyq_k$ = function (type, bindings, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.type_1;
    if (!(($mask0 & 2) === 0))
      bindings = this.bindings_1;
    return this.copy_13b85l_k$(type, bindings);
  };
  PatternContext.prototype.toString = function () {
    return 'PatternContext(type=' + this.type_1 + ', bindings=' + this.bindings_1 + ')';
  };
  PatternContext.prototype.hashCode = function () {
    var result = hashCode(this.type_1);
    result = imul(result, 31) + hashCode(this.bindings_1) | 0;
    return result;
  };
  PatternContext.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PatternContext))
      return false;
    var tmp0_other_with_cast = other instanceof PatternContext ? other : THROW_CCE();
    if (!equals(this.type_1, tmp0_other_with_cast.type_1))
      return false;
    if (!equals(this.bindings_1, tmp0_other_with_cast.bindings_1))
      return false;
    return true;
  };
  PatternContext.$metadata$ = classMeta('PatternContext', undefined, undefined, undefined, undefined, Item.prototype);
  function visit_1($this, ast) {
    var tmp = visit.call($this, ast);
    return tmp instanceof Component_0 ? tmp : THROW_CCE();
  }
  function visit_2($this, ast) {
    var tmp = visit.call($this, ast);
    return tmp instanceof Statement ? tmp : THROW_CCE();
  }
  function visit_3($this, ast) {
    var tmp = visit.call($this, ast);
    return tmp instanceof Expression_0 ? tmp : THROW_CCE();
  }
  function visit_4($this, ast) {
    var tmp = visit.call($this, ast);
    return tmp instanceof Pattern ? tmp : THROW_CCE();
  }
  function DeclarePhase($outer) {
    this.$this_1 = $outer;
  }
  DeclarePhase.prototype.visit_q9gm0m_k$ = function (ast) {
    var tmp0_subject = ast;
    if (tmp0_subject instanceof Struct_0) {
      this.visit_sgaiuy_k$(ast);
    }
  };
  DeclarePhase.prototype.visit_sgaiuy_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.$this_1.get_inputs_wrcrs2_k$(this.$this_1.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp = !_get_scope__bi2zur(this.$this_1.context_1, this.$this_1).types_1.isDefined_bxumpo_k$(ast.name_1, true);
    this.$this_1.require_qhwfzp_k$(tmp, RhovasAnalyzer$DeclarePhase$visit$lambda(this.$this_1, ast));
    var tmp_0 = _get_scope__bi2zur(this.$this_1.context_1, this.$this_1).types_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$1 = emptyList();
    var tmp_1 = (new Base(ast.name_1, tmp$ret$1, listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Any'))), new Definition_0(null))).reference_1;
    tmp_0.define$default_53rrc7_k$(tmp_1, null, 2, null);
    var tmp1_safe_receiver = firstOrNull(ast.context_1);
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.DeclarePhase.visit.<anonymous>' call
      tmp$ret$2 = this.$this_1.get_inputs_wrcrs2_k$(this.$this_1.context_1).removeLast_i5wx8a_k$();
      tmp$ret$3 = tmp$ret$2;
    }
  };
  DeclarePhase.$metadata$ = classMeta('DeclarePhase');
  function DefinePhase($outer) {
    this.$this_1 = $outer;
  }
  DefinePhase.prototype.visit_q9gm0m_k$ = function (ast) {
    var tmp0_subject = ast;
    if (tmp0_subject instanceof Struct_0) {
      this.visit_sgaiuy_k$(ast);
    }
  };
  DefinePhase.prototype.visit_sgaiuy_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.$this_1.get_inputs_wrcrs2_k$(this.$this_1.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var structType = ensureNotNull(_get_scope__bi2zur(this.$this_1.context_1, this.$this_1).types_1.get_4u8u51_k$(ast.name_1));
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = ast.fields_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.DefinePhase.visit.<anonymous>' call
      var tmp0_safe_receiver_0 = firstOrNull(element.context_1);
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this.$this_1.get_inputs_wrcrs2_k$(this.$this_1.context_1).addLast_i401o4_k$(tmp0_safe_receiver_0);
        tmp$ret$1 = Unit_getInstance();
      }
      var tmp = !(element.type_1 == null);
      this.$this_1.require_qhwfzp_k$(tmp, RhovasAnalyzer$DefinePhase$visit$lambda(this.$this_1, element));
      var fieldType = this.$this_1.visit_qvr368_k$(ensureNotNull(element.type_1)).type_1;
      var tmp_0 = structType.get_base_wojaxm_k$().scope_1.functions_1;
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$2 = emptyList();
      var tmp_1 = tmp$ret$2;
      var tmp_2 = listOf(new Declaration_4('instance', structType, false));
      var tmp$ret$3;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$3 = emptyList();
      var tmp0_also = new Definition(new Declaration_0(element.name_1, tmp_1, tmp_2, fieldType, tmp$ret$3));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.DefinePhase.visit.<anonymous>.<anonymous>' call
      var tmp_3 = tmp0_also;
      tmp_3.implementation_1 = RhovasAnalyzer$DefinePhase$visit$lambda_0(element);
      tmp$ret$4 = tmp0_also;
      var tmp_4 = tmp$ret$4;
      tmp_0.define$default_1vvya8_k$(tmp_4, null, 2, null);
      if (element.mutable_1) {
        var tmp_5 = structType.get_base_wojaxm_k$().scope_1.functions_1;
        var tmp$ret$7;
        // Inline function 'kotlin.also' call
        var tmp$ret$5;
        // Inline function 'kotlin.collections.listOf' call
        tmp$ret$5 = emptyList();
        var tmp_6 = tmp$ret$5;
        var tmp_7 = listOf_0([new Declaration_4('instance', structType, false), new Declaration_4('value', fieldType, false)]);
        var tmp_8 = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void'));
        var tmp$ret$6;
        // Inline function 'kotlin.collections.listOf' call
        tmp$ret$6 = emptyList();
        var tmp1_also = new Definition(new Declaration_0(element.name_1, tmp_6, tmp_7, tmp_8, tmp$ret$6));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.DefinePhase.visit.<anonymous>.<anonymous>' call
        var tmp_9 = tmp1_also;
        tmp_9.implementation_1 = RhovasAnalyzer$DefinePhase$visit$lambda_1(element);
        tmp$ret$7 = tmp1_also;
        var tmp_10 = tmp$ret$7;
        tmp_5.define$default_1vvya8_k$(tmp_10, null, 2, null);
      }
      var tmp1_safe_receiver = firstOrNull(element.context_1);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$8;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this.$this_1.get_inputs_wrcrs2_k$(this.$this_1.context_1).removeLast_i5wx8a_k$();
        tmp$ret$8 = Unit_getInstance();
      }
    }
    var tmp$ret$14;
    // Inline function 'kotlin.let' call
    var tmp$ret$9;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$9 = emptyList();
    var tmp_11 = tmp$ret$9;
    var tmp_12 = listOf(new Declaration_4('fields', ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object')), false));
    var tmp$ret$10;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$10 = emptyList();
    var tmp1_let = new Declaration_0(ast.name_1, tmp_11, tmp_12, structType, tmp$ret$10);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$13;
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.DefinePhase.visit.<anonymous>' call
    var scope = _get_scope__bi2zur(this.$this_1.context_1, this.$this_1);
    var tmp_13;
    if (scope instanceof Declaration_3) {
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.DefinePhase.visit.<anonymous>.<anonymous>' call
      scope.functions_1.define$default_1vvya8_k$(tmp1_let, null, 2, null);
      tmp$ret$11 = tmp1_let;
      tmp_13 = tmp$ret$11;
    } else {
      if (scope instanceof Definition_0) {
        var tmp$ret$12;
        // Inline function 'kotlin.also' call
        var tmp0_also_0 = new Definition(tmp1_let);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.DefinePhase.visit.<anonymous>.<anonymous>' call
        scope.functions_1.define$default_1vvya8_k$(tmp0_also_0, null, 2, null);
        tmp$ret$12 = tmp0_also_0;
        tmp_13 = tmp$ret$12;
      } else {
        noWhenBranchMatchedException();
      }
    }
    tmp$ret$13 = tmp_13;
    tmp$ret$14 = tmp$ret$13;
    var constructor = tmp$ret$14;
    var tmp_14 = structType.get_base_wojaxm_k$().scope_1;
    var tmp_15 = (tmp_14 instanceof Scope ? tmp_14 : THROW_CCE()).functions_1;
    tmp_15.define$default_1vvya8_k$(constructor, null, 2, null);
    var tmp_16 = structType.get_base_wojaxm_k$().scope_1.functions_1;
    var tmp$ret$17;
    // Inline function 'kotlin.also' call
    var tmp$ret$15;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$15 = emptyList();
    var tmp_17 = tmp$ret$15;
    var tmp_18 = listOf(new Declaration_4('instance', structType, false));
    var tmp_19 = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('String'));
    var tmp$ret$16;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$16 = emptyList();
    var tmp2_also = new Definition(new Declaration_0('toString', tmp_17, tmp_18, tmp_19, tmp$ret$16));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.DefinePhase.visit.<anonymous>' call
    var tmp_20 = tmp2_also;
    tmp_20.implementation_1 = RhovasAnalyzer$DefinePhase$visit$lambda_2(ast);
    tmp$ret$17 = tmp2_also;
    var tmp_21 = tmp$ret$17;
    tmp_16.define$default_1vvya8_k$(tmp_21, null, 2, null);
    var tmp1_safe_receiver_0 = firstOrNull(ast.context_1);
    if (tmp1_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$19;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$18;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.DefinePhase.visit.<anonymous>' call
      tmp$ret$18 = this.$this_1.get_inputs_wrcrs2_k$(this.$this_1.context_1).removeLast_i5wx8a_k$();
      tmp$ret$19 = tmp$ret$18;
    }
  };
  DefinePhase.$metadata$ = classMeta('DefinePhase');
  function visit$visitCondition(this$0, ast) {
    var condition = visit_3(this$0, ast);
    var tmp = condition.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')));
    this$0.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$visitCondition$lambda(this$0, ast, condition));
    return condition;
  }
  function RhovasAnalyzer$visit$lambda(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Redefined type.', 'The type ' + last($ast.path_1) + ' is already defined in the current scope.');
    };
  }
  function RhovasAnalyzer$visit$lambda$lambda(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Unreachable statement.', 'The previous statement changes control flow to always jump past this statement.');
    };
  }
  function RhovasAnalyzer$visit$lambda_0($ast, this$0) {
    return function () {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = withIndex($ast.statements_1);
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        var tmp = item.index_1 === get_lastIndex($ast.statements_1) ? true : _get_jumps__fhmkd0(this$0.context_1, this$0).isEmpty_y1axqb_k$();
        this$0.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda$lambda(this$0, $ast));
        tmp$ret$0 = visit_2(this$0, item.value_1);
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var statements = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp1_also = new Block(statements);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
      tmp1_also.context_1 = $ast.context_1;
      var tmp0_safe_receiver = firstOrNull(tmp1_also.context_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
        tmp$ret$3 = Unit_getInstance();
      }
      tmp$ret$4 = tmp1_also;
      return tmp$ret$4;
    };
  }
  function RhovasAnalyzer$visit$lambda_1(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.expression_1, 'Invalid expression statement.', 'An expression statement requires an invoke expression in order to perform a useful side-effect, but received ' + getKClassFromExpression($ast.expression_1).get_simpleName_r6f8py_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_2(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Redefined function.', 'The function ' + $ast.name_1 + '/' + $ast.parameters_1.get_size_woubt6_k$() + ' is already defined in this scope.');
    };
  }
  function RhovasAnalyzer$visit$lambda$lambda$lambda(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Missing return value.', 'The function ' + $ast.name_1 + '/' + $ast.parameters_1.get_size_woubt6_k$() + ' requires a return value.');
    };
  }
  function RhovasAnalyzer$visit$lambda$lambda_0($parameters, this$0, $ast, $returns, $function) {
    return function () {
      var tmp0_iterator = $parameters.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = _get_scope__bi2zur(this$0.context_1, this$0);
        (tmp instanceof Declaration_3 ? tmp : THROW_CCE()).variables_1.define_f87tdr_k$(element);
      }
      var tmp_0 = visit_2(this$0, $ast.body_1);
      var body = tmp_0 instanceof Block ? tmp_0 : THROW_CCE();
      var tmp_1 = $returns.isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void'))) ? true : _get_jumps__fhmkd0(this$0.context_1, this$0).contains_2ehdt1_k$('');
      this$0.require_qhwfzp_k$(tmp_1, RhovasAnalyzer$visit$lambda$lambda$lambda(this$0, $ast));
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Function($function, body);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_also.context_1 = $ast.context_1;
      var tmp0_safe_receiver = firstOrNull(tmp0_also.context_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
        tmp$ret$0 = Unit_getInstance();
      }
      tmp$ret$1 = tmp0_also;
      return tmp$ret$1;
    };
  }
  function RhovasAnalyzer$visit$lambda_3($ast, this$0, $parent) {
    return function () {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = $ast.generics_1;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$2;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver = item.second_1;
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = this$0.visit_qvr368_k$(tmp0_safe_receiver).type_1;
          tmp$ret$1 = tmp$ret$0;
          tmp = tmp$ret$1;
        }
        var tmp1_elvis_lhs = tmp;
        tmp$ret$2 = new Generic(item.first_1, tmp1_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Any')) : tmp1_elvis_lhs);
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
      }
      tmp$ret$3 = tmp0_mapTo;
      tmp$ret$4 = tmp$ret$3;
      var generics = tmp$ret$4;
      var tmp0_iterator_0 = generics.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        _get_scope__bi2zur(this$0.context_1, this$0).types_1.define_b5rmah_k$(element, element.name_1);
      }
      var tmp$ret$9;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = $ast.parameters_1;
      var tmp$ret$8;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator_1 = tmp1_map.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$7;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver_0 = item_0.second_1;
        var tmp_0;
        if (tmp0_safe_receiver_0 == null) {
          tmp_0 = null;
        } else {
          var tmp$ret$6;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$5;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = this$0.visit_qvr368_k$(tmp0_safe_receiver_0).type_1;
          tmp$ret$6 = tmp$ret$5;
          tmp_0 = tmp$ret$6;
        }
        var tmp1_elvis_lhs_0 = tmp_0;
        tmp$ret$7 = new Declaration_4(item_0.first_1, tmp1_elvis_lhs_0 == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic')) : tmp1_elvis_lhs_0, false);
        tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$7);
      }
      tmp$ret$8 = tmp0_mapTo_0;
      tmp$ret$9 = tmp$ret$8;
      var parameters = tmp$ret$9;
      var tmp0_safe_receiver_1 = $ast.returns_1;
      var tmp_1;
      if (tmp0_safe_receiver_1 == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        tmp$ret$10 = this$0.visit_qvr368_k$(tmp0_safe_receiver_1).type_1;
        tmp$ret$11 = tmp$ret$10;
        tmp_1 = tmp$ret$11;
      }
      var tmp1_elvis_lhs_1 = tmp_1;
      var returns = tmp1_elvis_lhs_1 == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')) : tmp1_elvis_lhs_1;
      var tmp$ret$14;
      // Inline function 'kotlin.collections.map' call
      var tmp2_map = $ast.throws_1;
      var tmp$ret$13;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
      var tmp0_iterator_2 = tmp2_map.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var item_1 = tmp0_iterator_2.next_20eer_k$();
        var tmp$ret$12;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        tmp$ret$12 = this$0.visit_qvr368_k$(item_1).type_1;
        tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$12);
      }
      tmp$ret$13 = tmp0_mapTo_1;
      tmp$ret$14 = tmp$ret$13;
      var throws = tmp$ret$14;
      var tmp$ret$18;
      // Inline function 'kotlin.let' call
      var tmp3_let = new Declaration_0($ast.name_1, generics, parameters, returns, throws);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$17;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
      var scope = _get_scope__bi2zur($parent, this$0);
      var tmp_2;
      if (scope instanceof Declaration_3) {
        var tmp$ret$15;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
        scope.functions_1.define$default_1vvya8_k$(tmp3_let, null, 2, null);
        tmp$ret$15 = tmp3_let;
        tmp_2 = tmp$ret$15;
      } else {
        if (scope instanceof Definition_0) {
          var tmp$ret$16;
          // Inline function 'kotlin.also' call
          var tmp0_also = new Definition(tmp3_let);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
          scope.functions_1.define$default_1vvya8_k$(tmp0_also, null, 2, null);
          tmp$ret$16 = tmp0_also;
          tmp_2 = tmp$ret$16;
        } else {
          noWhenBranchMatchedException();
        }
      }
      tmp$ret$17 = tmp_2;
      tmp$ret$18 = tmp$ret$17;
      var function_0 = tmp$ret$18;
      var tmp_3 = this$0.context_1.with_s1jj2w_k$([new FunctionContext(function_0), new ExceptionContext(toMutableSet(throws))]);
      return this$0.analyze_r6hxcx_k$(tmp_3, RhovasAnalyzer$visit$lambda$lambda_0(parameters, this$0, $ast, returns, function_0));
    };
  }
  function RhovasAnalyzer$visit$lambda_4(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Redefined variable.', 'The variable ' + $ast.name_1 + ' is already defined in this scope.');
    };
  }
  function RhovasAnalyzer$visit$lambda_5(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Undefined variable type.', 'A variable declaration requires either a type or an initial value.');
    };
  }
  function RhovasAnalyzer$visit$lambda_6(this$0, $ast, $type, $value) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Invalid value type.', 'The variable ' + $ast.name_1 + ' requires a value of type ' + $type + ', but received ' + ensureNotNull($value).get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_7(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.receiver_1, 'Invalid assignment receiver.', 'An assignment statement requires the receiver to be an access expression, but received ' + getKClassFromExpression($ast.receiver_1).get_simpleName_r6f8py_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_8(this$0, $ast, $receiver) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.receiver_1, 'Unassignable variable.', 'The variable ' + $receiver.variable_1.get_name_woqyms_k$() + ' is not assignable.');
    };
  }
  function RhovasAnalyzer$visit$lambda_9(this$0, $ast, $receiver, $value) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.value_1, 'Invalid assignment value type.', 'The variable ' + $receiver.variable_1.get_name_woqyms_k$() + ' requires the value to be type ' + $receiver.variable_1.get_type_wovaf7_k$() + ', but received ' + $value.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_10(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.receiver_1, 'Invalid assignment receiver.', 'An assignment statement requires the receiver property access to be non-coalescing.');
    };
  }
  function RhovasAnalyzer$visit$lambda_11(this$0, $ast, $receiver) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.receiver_1, 'Unassignable property.', 'The property ' + $receiver.property_1.get_type_wovaf7_k$().get_base_wojaxm_k$().name_1 + '.' + $receiver.property_1.get_name_woqyms_k$() + ' is not assignable.');
    };
  }
  function RhovasAnalyzer$visit$lambda_12(this$0, $ast, $receiver, $value) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.value_1, 'Invalid assignment value type.', 'The property ' + $receiver.property_1.get_type_wovaf7_k$().get_base_wojaxm_k$().name_1 + '.' + $receiver.property_1.get_name_woqyms_k$() + ' requires the value to be type ' + $receiver.property_1.get_type_wovaf7_k$() + ', but received ' + $value.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_13(this$0, $ast, $condition) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.condition_1, 'Invalid if condition type.', 'An if statement requires the condition to be type Boolean, but received ' + $condition.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_14(this$0, $ast) {
    return function () {
      return visit_2(this$0, $ast.thenStatement_1);
    };
  }
  function RhovasAnalyzer$visit$lambda_15($ast, this$0) {
    return function () {
      var tmp0_safe_receiver = $ast.elseStatement_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        tmp$ret$0 = visit_2(this$0, tmp0_safe_receiver);
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      return tmp;
    };
  }
  function RhovasAnalyzer$visit$lambda_16($item, this$0) {
    return function () {
      var tmp0_safe_receiver = firstOrNull($item.first_1.context_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.get_inputs_wrcrs2_k$(this$0.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var condition = visit$visitCondition(this$0, $item.first_1);
      var statement = visit_2(this$0, $item.second_1);
      var tmp1_safe_receiver = firstOrNull($item.first_1.context_1);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$1 = this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
        tmp$ret$2 = tmp$ret$1;
      }
      return new Pair(condition, statement);
    };
  }
  function RhovasAnalyzer$visit$lambda_17($ast, this$0) {
    return function () {
      var tmp0_safe_receiver = $ast.elseCase_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        var tmp0_elvis_lhs = tmp0_safe_receiver.first_1;
        var tmp1_safe_receiver = firstOrNull((tmp0_elvis_lhs == null ? tmp0_safe_receiver.second_1 : tmp0_elvis_lhs).context_1);
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this$0.get_inputs_wrcrs2_k$(this$0.context_1).addLast_i401o4_k$(tmp1_safe_receiver);
          tmp$ret$0 = Unit_getInstance();
        }
        var tmp2_safe_receiver = tmp0_safe_receiver.first_1;
        var tmp_0;
        if (tmp2_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = visit$visitCondition(this$0, tmp2_safe_receiver);
          tmp$ret$2 = tmp$ret$1;
          tmp_0 = tmp$ret$2;
        }
        var condition = tmp_0;
        var statement = visit_2(this$0, tmp0_safe_receiver.second_1);
        var tmp3_elvis_lhs = tmp0_safe_receiver.first_1;
        var tmp4_safe_receiver = firstOrNull((tmp3_elvis_lhs == null ? tmp0_safe_receiver.second_1 : tmp3_elvis_lhs).context_1);
        if (tmp4_safe_receiver == null)
          null;
        else {
          var tmp$ret$4;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$3;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$3 = this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
          tmp$ret$4 = tmp$ret$3;
        }
        tmp$ret$5 = new Pair(condition, statement);
        tmp$ret$6 = tmp$ret$5;
        tmp = tmp$ret$6;
      }
      return tmp;
    };
  }
  function RhovasAnalyzer$visit$lambda_18($item, this$0) {
    return function () {
      var tmp0_safe_receiver = firstOrNull($item.first_1.context_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.get_inputs_wrcrs2_k$(this$0.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var pattern = visit_4(this$0, $item.first_1);
      var tmp0_forEach = _get_pattern__f9i1rz(this$0.context_1, this$0).bindings_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$1 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator = tmp$ret$1;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = _get_scope__bi2zur(this$0.context_1, this$0);
        (tmp instanceof Declaration_3 ? tmp : THROW_CCE()).variables_1.define_f87tdr_k$(new Declaration_4(element.get_key_18j28a_k$(), element.get_value_j01efc_k$(), false));
      }
      var statement = visit_2(this$0, $item.second_1);
      var tmp1_safe_receiver = firstOrNull($item.first_1.context_1);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$2 = this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
        tmp$ret$3 = tmp$ret$2;
      }
      return new Pair(pattern, statement);
    };
  }
  function RhovasAnalyzer$visit$lambda_19($tmp1_safe_receiver, this$0) {
    return function () {
      var tmp0_elvis_lhs = $tmp1_safe_receiver.first_1;
      var tmp1_safe_receiver = firstOrNull((tmp0_elvis_lhs == null ? $tmp1_safe_receiver.second_1 : tmp0_elvis_lhs).context_1);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.get_inputs_wrcrs2_k$(this$0.context_1).addLast_i401o4_k$(tmp1_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var tmp2_safe_receiver = $tmp1_safe_receiver.first_1;
      var tmp;
      if (tmp2_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$1 = visit_4(this$0, tmp2_safe_receiver);
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      var pattern = tmp;
      var tmp0_forEach = _get_pattern__f9i1rz(this$0.context_1, this$0).bindings_1;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$3 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator = tmp$ret$3;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = _get_scope__bi2zur(this$0.context_1, this$0);
        (tmp_0 instanceof Declaration_3 ? tmp_0 : THROW_CCE()).variables_1.define_f87tdr_k$(new Declaration_4(element.get_key_18j28a_k$(), element.get_value_j01efc_k$(), false));
      }
      var statement = visit_2(this$0, $tmp1_safe_receiver.second_1);
      var tmp3_elvis_lhs = $tmp1_safe_receiver.first_1;
      var tmp4_safe_receiver = firstOrNull((tmp3_elvis_lhs == null ? $tmp1_safe_receiver.second_1 : tmp3_elvis_lhs).context_1);
      if (tmp4_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$4 = this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
        tmp$ret$5 = tmp$ret$4;
      }
      return new Pair(pattern, statement);
    };
  }
  function RhovasAnalyzer$visit$lambda_20(this$0, $ast, $argument) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.argument_1, 'Invalid for loop argument type.', 'A for loop requires the argument to be type List, but received ' + $argument.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_21(this$0, $variable, $ast, $argument) {
    return function () {
      var tmp = _get_scope__bi2zur(this$0.context_1, this$0);
      (tmp instanceof Declaration_3 ? tmp : THROW_CCE()).variables_1.define_f87tdr_k$($variable);
      _get_labels__ya3y1g(this$0.context_1, this$0).add_1j60pz_k$(null);
      var body = visit_2(this$0, $ast.body_1);
      _get_jumps__fhmkd0(this$0.context_1, this$0).clear_j9y8zo_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = new For($variable, $argument, body);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
      tmp0_also.context_1 = $ast.context_1;
      var tmp0_safe_receiver = firstOrNull(tmp0_also.context_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
        tmp$ret$0 = Unit_getInstance();
      }
      tmp$ret$1 = tmp0_also;
      return tmp$ret$1;
    };
  }
  function RhovasAnalyzer$visit$lambda_22(this$0, $ast, $condition) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.condition_1, 'Invalid while condition type.', 'An while statement requires the condition to be type Boolean, but received ' + $condition.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_23(this$0, $ast, $condition) {
    return function () {
      _get_labels__ya3y1g(this$0.context_1, this$0).add_1j60pz_k$(null);
      var body = visit_2(this$0, $ast.body_1);
      _get_jumps__fhmkd0(this$0.context_1, this$0).clear_j9y8zo_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = new While($condition, body);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
      tmp0_also.context_1 = $ast.context_1;
      var tmp0_safe_receiver = firstOrNull(tmp0_also.context_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
        tmp$ret$0 = Unit_getInstance();
      }
      tmp$ret$1 = tmp0_also;
      return tmp$ret$1;
    };
  }
  function RhovasAnalyzer$visit$lambda_24(this$0, $element, $type) {
    return function () {
      return this$0.error_tvhd7i_k$($element.type_1, 'Invalid catch type', 'An catch block requires the type to be a subtype of Exception, but received ' + $type + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_25(this$0, $ast) {
    return function () {
      return visit_2(this$0, $ast.body_1);
    };
  }
  function RhovasAnalyzer$visit$lambda_26(this$0, $variable, $item) {
    return function () {
      var tmp = _get_scope__bi2zur(this$0.context_1, this$0);
      (tmp instanceof Declaration_3 ? tmp : THROW_CCE()).variables_1.define_f87tdr_k$($variable);
      var body = visit_2(this$0, $item.body_1);
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Catch($variable, body);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_also.context_1 = tmp0_also.context_1;
      var tmp0_safe_receiver = firstOrNull(tmp0_also.context_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
        tmp$ret$0 = Unit_getInstance();
      }
      tmp$ret$1 = tmp0_also;
      return tmp$ret$1;
    };
  }
  function RhovasAnalyzer$visit$lambda_27(this$0, $tmp1_safe_receiver) {
    return function () {
      return visit_2(this$0, $tmp1_safe_receiver);
    };
  }
  function RhovasAnalyzer$visit$lambda_28($variable, this$0, $ast, $argument) {
    return function () {
      var tmp0_safe_receiver = $variable;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp = _get_scope__bi2zur(this$0.context_1, this$0);
        (tmp instanceof Declaration_3 ? tmp : THROW_CCE()).variables_1.define_f87tdr_k$(tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var body = visit_2(this$0, $ast.body_1);
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new With($variable, $argument, body);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
      tmp0_also.context_1 = $ast.context_1;
      var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
        tmp$ret$1 = Unit_getInstance();
      }
      tmp$ret$2 = tmp0_also;
      return tmp$ret$2;
    };
  }
  function RhovasAnalyzer$visit$lambda_29(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.statement_1, 'Invalid label statement.', 'A label statement requires the statement to be a for/while loop.');
    };
  }
  function RhovasAnalyzer$visit$lambda_30(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Redefined label.', 'The label ' + $ast.label_1 + ' is already defined in this scope.');
    };
  }
  function RhovasAnalyzer$visit$lambda_31(this$0, $ast) {
    return function () {
      _get_labels__ya3y1g(this$0.context_1, this$0).add_1j60pz_k$($ast.label_1);
      var statement = visit_2(this$0, $ast.statement_1);
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Label($ast.label_1, statement);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
      tmp0_also.context_1 = $ast.context_1;
      var tmp0_safe_receiver = firstOrNull(tmp0_also.context_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
        tmp$ret$0 = Unit_getInstance();
      }
      tmp$ret$1 = tmp0_also;
      return tmp$ret$1;
    };
  }
  function RhovasAnalyzer$visit$lambda_32(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Invalid continue statement.', 'A continue statement requires an enclosing for/while loop.');
    };
  }
  function RhovasAnalyzer$visit$lambda_33(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Undefined label.', 'The label ' + $ast.label_1 + ' is not defined in this scope.');
    };
  }
  function RhovasAnalyzer$visit$lambda_34(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Invalid continue statement.', 'A continue statement requires an enclosing for/while loop.');
    };
  }
  function RhovasAnalyzer$visit$lambda_35(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Undefined label.', 'The label ' + $ast.label_1 + ' is not defined in this scope.');
    };
  }
  function RhovasAnalyzer$visit$lambda_36(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Invalid return statement.', 'A return statement requires an enclosing function definition.');
    };
  }
  function RhovasAnalyzer$visit$lambda_37(this$0, $ast, $value) {
    return function () {
      var tmp = ensureNotNull(_get_function__m6jw1f(this$0.context_1, this$0)).get_name_woqyms_k$();
      var tmp_0 = ensureNotNull(_get_function__m6jw1f(this$0.context_1, this$0)).get_parameters_cl4rkd_k$().get_size_woubt6_k$();
      var tmp_1 = ensureNotNull(_get_function__m6jw1f(this$0.context_1, this$0)).get_returns_jfk3fe_k$();
      var tmp0_safe_receiver = $value;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_type_wovaf7_k$();
      return this$0.error_tvhd7i_k$($ast, 'Invalid return value type.', 'The enclosing function ' + tmp + '/' + tmp_0 + ' requires the return value to be type ' + tmp_1 + ', but received ' + (tmp1_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')) : tmp1_elvis_lhs) + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_38(this$0, $ast, $exception) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.exception_1, 'Invalid throw expression type.', 'An throw statement requires the expression to be type Exception, but received ' + $exception.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_39(this$0, $ast, $exception) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.exception_1, 'Uncaught exception.', 'An exception is thrown of type ' + $exception.get_type_wovaf7_k$() + ', but this exception is never caught or declared.');
    };
  }
  function RhovasAnalyzer$visit$lambda_40(this$0, $ast, $condition) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.condition_1, 'Invalid assert condition type.', 'An assert statement requires the condition to be type Boolean, but received ' + $condition.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_41(this$0, $ast, $message) {
    return function () {
      return this$0.error_tvhd7i_k$(ensureNotNull($ast.message_1), 'Invalid assert message type.', 'An assert statement requires the message to be type String, but received ' + ensureNotNull($message).get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_42(this$0, $ast, $condition) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.condition_1, 'Invalid require condition type.', 'A require statement requires the condition to be type Boolean, but received ' + $condition.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_43(this$0, $ast, $message) {
    return function () {
      return this$0.error_tvhd7i_k$(ensureNotNull($ast.message_1), 'Invalid require message type.', 'A require statement requires the message to be type String, but received ' + ensureNotNull($message).get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_44(this$0, $ast, $condition) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.condition_1, 'Invalid ensure condition type.', 'An ensure statement requires the condition to be type Boolean, but received ' + $condition.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_45(this$0, $ast, $message) {
    return function () {
      return this$0.error_tvhd7i_k$(ensureNotNull($ast.message_1), 'Invalid ensure message type.', 'An ensure statement requires the message to be type String, but received ' + ensureNotNull($message).get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_46(this$0, $ast, $left) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.left_1, 'Invalid binary operand.', 'A logical binary expression requires the left operand to be type Boolean, but received ' + $left.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_47(this$0, $ast, $left) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.right_1, 'Invalid binary operand.', 'A logical binary expression requires the left operand to be type Boolean, but received ' + $left.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_48(this$0, $ast, $receiver) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Invalid null coalesce.', 'Null coalescing requires the receiver to be type Nullable, but received ' + $receiver.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_49($arguments, $i) {
    return function (it) {
      return $arguments.get_fkrdnv_k$($i).get_type_wovaf7_k$().isSubtypeOf_32g6kb_k$(it.first_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$($i).type_1, it.second_1);
    };
  }
  function RhovasAnalyzer$visit$lambda$lambda_1(it) {
    return '' + it.type_1;
  }
  function RhovasAnalyzer$visit$lambda_50(this$0, $ast, $i, $candidates, $arguments) {
    return function () {
      var tmp = $ast.arguments_1.get_fkrdnv_k$($i);
      var tmp_0 = $candidates.get_size_woubt6_k$() === 1 ? 'Invalid argument.' : 'Unresolved function.';
      var tmp_1;
      if ($candidates.get_size_woubt6_k$() === 1) {
        tmp_1 = 'The function ' + $ast.name_1 + '/' + $ast.arguments_1.get_size_woubt6_k$() + ' requires argument ' + $i + ' to be type ' + $candidates.get_fkrdnv_k$(0).first_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$($i).type_1.bind_9oflcx_k$($candidates.get_fkrdnv_k$(0).second_1) + ' but received ' + $arguments.get_fkrdnv_k$($i).get_type_wovaf7_k$() + '.';
      } else {
        var tmp_2 = $ast.arguments_1.get_size_woubt6_k$();
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault($arguments, 10));
        var tmp0_iterator = $arguments.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          var tmp$ret$0;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.get_type_wovaf7_k$();
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        var tmp_4 = joinToString$default(tmp_3, null, null, null, 0, null, null, 63, null);
        var tmp$ret$5;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault($candidates, 10));
        var tmp0_iterator_0 = $candidates.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_0.next_20eer_k$();
          var tmp$ret$3;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          var tmp_5 = item_0.first_1.get_name_woqyms_k$();
          var tmp_6 = item_0.first_1.get_parameters_cl4rkd_k$();
          tmp$ret$3 = '\n - ' + tmp_5 + '(' + joinToString$default(tmp_6, null, null, null, 0, null, RhovasAnalyzer$visit$lambda$lambda_1, 31, null);
          tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
        }
        tmp$ret$4 = tmp0_mapTo_0;
        tmp$ret$5 = tmp$ret$4;
        tmp_1 = 'The function ' + $ast.name_1 + '/' + tmp_2 + ' could not be resolved to one of the available overloads below with arguments (' + tmp_4 + '):\n' + tmp$ret$5;
      }
      return this$0.error_tvhd7i_k$(tmp, tmp_0, tmp_1);
    };
  }
  function RhovasAnalyzer$visit$lambda_51(this$0, $ast, $element) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Uncaught exception.', 'An exception is thrown of type ' + $element + ', but this exception is never caught or declared.');
    };
  }
  function RhovasAnalyzer$visit$lambda_52(this$0, $ast, $receiver) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Invalid null coalesce.', 'Null coalescing requires the receiver to be type Nullable, but received ' + $receiver.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_53($arguments, $i) {
    return function (it) {
      return $arguments.get_fkrdnv_k$($i).get_type_wovaf7_k$().isSubtypeOf_32g6kb_k$(it.first_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$($i + 1 | 0).type_1, it.second_1);
    };
  }
  function RhovasAnalyzer$visit$lambda$lambda_2(it) {
    return '' + it.type_1;
  }
  function RhovasAnalyzer$visit$lambda_54(this$0, $ast, $i, $candidates, $receiverType, $arguments) {
    return function () {
      var tmp = $ast.arguments_1.get_fkrdnv_k$($i);
      var tmp_0 = $candidates.get_size_woubt6_k$() === 1 ? 'Invalid argument.' : 'Unresolved function.';
      var tmp_1;
      if ($candidates.get_size_woubt6_k$() === 1) {
        tmp_1 = 'The method ' + $receiverType.get_base_wojaxm_k$().name_1 + '.' + $ast.name_1 + '/' + $ast.arguments_1.get_size_woubt6_k$() + ' requires argument ' + $i + ' to be type ' + $candidates.get_fkrdnv_k$(0).first_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$($i + 1 | 0).type_1.bind_9oflcx_k$($candidates.get_fkrdnv_k$(0).second_1) + ' but received ' + $arguments.get_fkrdnv_k$($i).get_type_wovaf7_k$() + '.';
      } else {
        var tmp_2 = $receiverType.get_base_wojaxm_k$().name_1;
        var tmp_3 = $ast.arguments_1.get_size_woubt6_k$();
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault($arguments, 10));
        var tmp0_iterator = $arguments.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          var tmp$ret$0;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.get_type_wovaf7_k$();
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        var tmp_5 = joinToString$default(tmp_4, null, null, null, 0, null, null, 63, null);
        var tmp$ret$5;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault($candidates, 10));
        var tmp0_iterator_0 = $candidates.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_0.next_20eer_k$();
          var tmp$ret$3;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          var tmp_6 = item_0.first_1.get_name_woqyms_k$();
          var tmp_7 = drop(item_0.first_1.get_parameters_cl4rkd_k$(), 1);
          tmp$ret$3 = '\n - ' + tmp_6 + '(' + joinToString$default(tmp_7, null, null, null, 0, null, RhovasAnalyzer$visit$lambda$lambda_2, 31, null);
          tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
        }
        tmp$ret$4 = tmp0_mapTo_0;
        tmp$ret$5 = tmp$ret$4;
        tmp_1 = 'The method ' + tmp_2 + '.' + $ast.name_1 + '/' + tmp_3 + ' could not be resolved to one of the available overloads below with arguments  (' + tmp_5 + '):\n' + tmp$ret$5;
      }
      return this$0.error_tvhd7i_k$(tmp, tmp_0, tmp_1);
    };
  }
  function RhovasAnalyzer$visit$lambda_55(this$0, $ast, $element) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Uncaught exception.', 'An exception is thrown of type ' + $element + ', but this exception is never caught or declared.');
    };
  }
  function RhovasAnalyzer$visit$lambda_56(this$0, $ast, $receiver) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Invalid null coalesce.', 'Null coalescing requires the receiver to be type Nullable, but received ' + $receiver.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_57($receiverType) {
    return function (it) {
      return $receiverType.isSubtypeOf_32g6kb_k$(it.first_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1, it.second_1);
    };
  }
  function RhovasAnalyzer$visit$lambda$lambda_3(it) {
    return '' + it.type_1;
  }
  function RhovasAnalyzer$visit$lambda_58(this$0, $ast, $candidates, $receiverType) {
    return function () {
      var tmp;
      if ($candidates.get_size_woubt6_k$() === 1) {
        tmp = 'The function ' + $ast.name_1 + '/' + ($ast.arguments_1.get_size_woubt6_k$() + 1 | 0) + ' requires argument 0 to be type ' + $candidates.get_fkrdnv_k$(0).first_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1.bind_9oflcx_k$($candidates.get_fkrdnv_k$(0).second_1) + ' but received ' + $receiverType + '.';
      } else {
        var tmp_0 = $ast.arguments_1.get_size_woubt6_k$() + 1 | 0;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault($candidates, 10));
        var tmp0_iterator = $candidates.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          var tmp$ret$0;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          var tmp_1 = item.first_1.get_name_woqyms_k$();
          var tmp_2 = item.first_1.get_parameters_cl4rkd_k$();
          tmp$ret$0 = '\n - ' + tmp_1 + '(' + joinToString$default(tmp_2, null, null, null, 0, null, RhovasAnalyzer$visit$lambda$lambda_3, 31, null);
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = 'The function ' + $ast.name_1 + '/' + tmp_0 + ' could not be resolved to one of the available overloads below with receiver ' + $receiverType + ':\n' + tmp$ret$2;
      }
      return this$0.error_tvhd7i_k$($ast.receiver_1, 'Invalid receiver.', tmp);
    };
  }
  function RhovasAnalyzer$visit$lambda_59($arguments, $i) {
    return function (it) {
      return $arguments.get_fkrdnv_k$($i).get_type_wovaf7_k$().isSubtypeOf_32g6kb_k$(it.first_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$($i + 1 | 0).type_1, it.second_1);
    };
  }
  function RhovasAnalyzer$visit$lambda$lambda_4(it) {
    return '' + it.type_1;
  }
  function RhovasAnalyzer$visit$lambda_60(this$0, $ast, $i, $candidates, $arguments, $receiverType) {
    return function () {
      var tmp = $ast.arguments_1.get_fkrdnv_k$($i);
      var tmp_0 = $candidates.get_size_woubt6_k$() === 1 ? 'Invalid argument.' : 'Unresolved function.';
      var tmp_1;
      if ($candidates.get_size_woubt6_k$() === 1) {
        tmp_1 = 'The function ' + $ast.name_1 + '/' + ($ast.arguments_1.get_size_woubt6_k$() + 1 | 0) + ' requires argument ' + ($i + 1 | 0) + ' to be type ' + $candidates.get_fkrdnv_k$(0).first_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$($i + 1 | 0).type_1.bind_9oflcx_k$($candidates.get_fkrdnv_k$(0).second_1) + ' but received ' + $arguments.get_fkrdnv_k$($i).get_type_wovaf7_k$() + '.';
      } else {
        var tmp_2 = $ast.arguments_1.get_size_woubt6_k$() + 1 | 0;
        var tmp_3 = listOf($receiverType);
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault($arguments, 10));
        var tmp0_iterator = $arguments.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          var tmp$ret$0;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.get_type_wovaf7_k$();
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = plus(tmp_3, tmp$ret$2);
        var tmp_5 = joinToString$default(tmp_4, null, null, null, 0, null, null, 63, null);
        var tmp$ret$5;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault($candidates, 10));
        var tmp0_iterator_0 = $candidates.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_0.next_20eer_k$();
          var tmp$ret$3;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          var tmp_6 = item_0.first_1.get_name_woqyms_k$();
          var tmp_7 = item_0.first_1.get_parameters_cl4rkd_k$();
          tmp$ret$3 = '\n - ' + tmp_6 + '(' + joinToString$default(tmp_7, null, null, null, 0, null, RhovasAnalyzer$visit$lambda$lambda_4, 31, null);
          tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
        }
        tmp$ret$4 = tmp0_mapTo_0;
        tmp$ret$5 = tmp$ret$4;
        tmp_1 = 'The function ' + $ast.name_1 + '/' + tmp_2 + ' could not be resolved to one of the available overloads below with arguments (' + tmp_5 + '):\n' + tmp$ret$5;
      }
      return this$0.error_tvhd7i_k$(tmp, tmp_0, tmp_1);
    };
  }
  function RhovasAnalyzer$visit$lambda_61(this$0, $ast, $element) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Uncaught exception.', 'An exception is thrown of type ' + $element + ', but this exception is never caught or declared.');
    };
  }
  function RhovasAnalyzer$visit$lambda_62(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Invalid DSL arguments.', 'DSLs with arguments are not currently supported.');
    };
  }
  function RhovasAnalyzer$visit$lambda_63($parameters, this$0, $ast) {
    return function () {
      var tmp;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !$parameters.isEmpty_y1axqb_k$();
      if (tmp$ret$0) {
        var tmp0_iterator = $parameters.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          var tmp_0 = _get_scope__bi2zur(this$0.context_1, this$0);
          (tmp_0 instanceof Declaration_3 ? tmp_0 : THROW_CCE()).variables_1.define_f87tdr_k$(element);
        }
        tmp = Unit_getInstance();
      } else {
        var tmp_1 = _get_scope__bi2zur(this$0.context_1, this$0);
        (tmp_1 instanceof Declaration_3 ? tmp_1 : THROW_CCE()).variables_1.define_f87tdr_k$(new Declaration_4('val', ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic')), false));
        tmp = Unit_getInstance();
      }
      var body = visit_2(this$0, $ast.body_1);
      var type = new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Lambda')).get_base_wojaxm_k$(), listOf_0([ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic')), ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic'))]));
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Lambda($parameters, body, type);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
      tmp0_also.context_1 = $ast.context_1;
      var tmp0_safe_receiver = firstOrNull(tmp0_also.context_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.get_inputs_wrcrs2_k$(this$0.context_1).removeLast_i5wx8a_k$();
        tmp$ret$1 = Unit_getInstance();
      }
      tmp$ret$2 = tmp0_also;
      return tmp$ret$2;
    };
  }
  function RhovasAnalyzer$visit$lambda_64(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Redefined pattern binding', 'The identifier ' + $ast.name_1 + ' is already bound in this pattern.');
    };
  }
  function RhovasAnalyzer$visit$lambda_65(this$0, $ast, $value) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Unmatchable pattern type', 'This pattern is within a context that requires type ' + _get_pattern__f9i1rz(this$0.context_1, this$0).type_1 + ', but received ' + $value.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_66(this$0, $ast, $existing) {
    return function () {
      var pattern = visit_4(this$0, $ast.pattern_1);
      var tmp = _get_scope__bi2zur(this$0.context_1, this$0);
      (tmp instanceof Declaration_3 ? tmp : THROW_CCE()).variables_1.define_f87tdr_k$(new Declaration_4('val', _get_pattern__f9i1rz(this$0.context_1, this$0).type_1, false));
      var tmp$ret$2;
      // Inline function 'kotlin.collections.filterKeys' call
      var tmp0_filterKeys = _get_pattern__f9i1rz(this$0.context_1, this$0).bindings_1;
      var result = LinkedHashMap_init_$Create$_0();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_filterKeys.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var entry = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = entry.get_key_18j28a_k$();
        tmp$ret$1 = !$existing.containsKey_wgk31w_k$(tmp1__anonymous__uwfjfc);
        if (tmp$ret$1) {
          result.put_3mhbri_k$(entry.get_key_18j28a_k$(), entry.get_value_j01efc_k$());
        }
      }
      tmp$ret$2 = result;
      var tmp2_forEach = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$3 = tmp2_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator_0 = tmp$ret$3;
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        var tmp_0 = _get_scope__bi2zur(this$0.context_1, this$0);
        (tmp_0 instanceof Declaration_3 ? tmp_0 : THROW_CCE()).variables_1.define_f87tdr_k$(new Declaration_4(element.get_key_18j28a_k$(), element.get_value_j01efc_k$(), false));
      }
      var predicate = visit_3(this$0, $ast.predicate_1);
      return new Pair(pattern, predicate);
    };
  }
  function RhovasAnalyzer$visit$lambda_67(this$0, $ast, $predicate) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.predicate_1, 'Invalid pattern predicate type.', 'A predicate pattern requires the predicate to be type Boolean, but received ' + $predicate.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_68(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Unmatchable pattern type', 'This pattern is within a context that requires type ' + _get_pattern__f9i1rz(this$0.context_1, this$0).type_1 + ', but received List.');
    };
  }
  function RhovasAnalyzer$visit$lambda_69(this$0, $item) {
    return function () {
      return this$0.error_tvhd7i_k$($item.value_1, 'Invalid multiple varargs.', 'An ordered destructure requires no more than one vararg pattern.');
    };
  }
  function RhovasAnalyzer$visit$lambda_70(this$0, $tmp0_safe_receiver, $existing) {
    return function () {
      var pattern = visit_4(this$0, $tmp0_safe_receiver);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.filterKeys' call
      var tmp0_filterKeys = _get_pattern__f9i1rz(this$0.context_1, this$0).bindings_1;
      var result = LinkedHashMap_init_$Create$_0();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_filterKeys.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var entry = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = entry.get_key_18j28a_k$();
        tmp$ret$1 = !$existing.containsKey_wgk31w_k$(tmp1__anonymous__uwfjfc);
        if (tmp$ret$1) {
          result.put_3mhbri_k$(entry.get_key_18j28a_k$(), entry.get_value_j01efc_k$());
        }
      }
      tmp$ret$2 = result;
      var tmp2_forEach = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$3 = tmp2_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator_0 = tmp$ret$3;
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = _get_pattern__f9i1rz(this$0.context_1, this$0).bindings_1;
        var tmp1_set = element.get_key_18j28a_k$();
        var tmp2_set = new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(element.get_value_j01efc_k$()));
        tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
      }
      return pattern;
    };
  }
  function RhovasAnalyzer$visit$lambda_71(this$0, $item) {
    return function () {
      return visit_4(this$0, $item.value_1);
    };
  }
  function RhovasAnalyzer$visit$lambda_72(this$0, $ast) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Unmatchable pattern type', 'This pattern is within a context that requires type ' + _get_pattern__f9i1rz(this$0.context_1, this$0).type_1 + ', but received List.');
    };
  }
  function RhovasAnalyzer$visit$lambda_73(this$0, $item) {
    return function () {
      return this$0.error_tvhd7i_k$($item.value_1.second_1, 'Invalid multiple varargs.', 'A named destructure requires no more than one vararg pattern.');
    };
  }
  function RhovasAnalyzer$visit$lambda_74(this$0, $tmp0_safe_receiver, $existing) {
    return function () {
      var pattern = visit_4(this$0, $tmp0_safe_receiver);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.filterKeys' call
      var tmp0_filterKeys = _get_pattern__f9i1rz(this$0.context_1, this$0).bindings_1;
      var result = LinkedHashMap_init_$Create$_0();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_filterKeys.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var entry = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc = entry.get_key_18j28a_k$();
        tmp$ret$1 = !$existing.containsKey_wgk31w_k$(tmp1__anonymous__uwfjfc);
        if (tmp$ret$1) {
          result.put_3mhbri_k$(entry.get_key_18j28a_k$(), entry.get_value_j01efc_k$());
        }
      }
      tmp$ret$2 = result;
      var tmp2_forEach = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$3 = tmp2_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator_0 = tmp$ret$3;
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = _get_pattern__f9i1rz(this$0.context_1, this$0).bindings_1;
        var tmp1_set = element.get_key_18j28a_k$();
        var tmp2_set = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object'));
        tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
      }
      return pattern;
    };
  }
  function RhovasAnalyzer$visit$lambda_75(this$0, $item) {
    return function () {
      return visit_4(this$0, $item.value_1.second_1);
    };
  }
  function RhovasAnalyzer$visit$lambda_76(this$0, $ast, $type) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Unmatchable pattern type', 'This pattern is within a context that requires type ' + _get_pattern__f9i1rz(this$0.context_1, this$0).type_1 + ', but received ' + $type.type_1 + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_77(this$0, $tmp0_safe_receiver) {
    return function () {
      return visit_4(this$0, $tmp0_safe_receiver);
    };
  }
  function RhovasAnalyzer$visit$lambda_78(this$0, $ast, $type) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Invalid generic parameters.', 'Generic type require a reference type, but received a base type of Type.' + getKClassFromExpression($type._v).get_simpleName_r6f8py_k$() + ' (' + $type._v + ').');
    };
  }
  function RhovasAnalyzer$visit$lambda_79(this$0, $ast, $type, $generics) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Invalid generic parameters.', 'The type ' + $type._v.get_base_wojaxm_k$().name_1 + ' requires ' + $type._v.get_base_wojaxm_k$().generics_1.get_size_woubt6_k$() + ' generic parameters, but received ' + $generics.get_size_woubt6_k$() + '.');
    };
  }
  function RhovasAnalyzer$visit$lambda_80(this$0, $ast, $i, $type, $generics) {
    return function () {
      return this$0.error_tvhd7i_k$($ast.generics_1.get_fkrdnv_k$($i), 'Invalid generic parameter.', 'The type ' + $type._v.get_base_wojaxm_k$().name_1 + ' requires generic parameter ' + $i + ' to be type ' + $type._v.get_base_wojaxm_k$().generics_1.get_fkrdnv_k$($i).bound_1 + ', but received ' + $generics.get_fkrdnv_k$($i) + '.');
    };
  }
  function RhovasAnalyzer$visit$visitCondition$lambda(this$0, $ast, $condition) {
    return function () {
      return this$0.error_tvhd7i_k$($ast, 'Invalid match condition type.', 'A conditional match statement requires the condition to be type Boolean, but received ' + $condition.get_type_wovaf7_k$() + '.');
    };
  }
  function RhovasAnalyzer(scope) {
    var tmp$ret$5;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp = new InputContext(ArrayDeque_init_$Create$());
    var tmp_0 = new ScopeContext(scope);
    var tmp_1 = new FunctionContext(null);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    var tmp_2 = new LabelContext(tmp$ret$0);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$1 = LinkedHashSet_init_$Create$();
    var tmp_3 = new JumpContext(tmp$ret$1);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$2 = LinkedHashSet_init_$Create$();
    var tmp0_associateBy = listOf_0([tmp, tmp_0, tmp_1, tmp_2, tmp_3, new ExceptionContext(tmp$ret$2)]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = tmp0_associateBy.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.<init>.<anonymous>' call
      tmp$ret$3 = ensureNotNull(getKClassFromExpression(element).get_simpleName_r6f8py_k$());
      tmp0_associateByTo.put_3mhbri_k$(tmp$ret$3, element);
    }
    tmp$ret$4 = tmp0_associateByTo;
    tmp$ret$5 = tmp$ret$4;
    Analyzer.call(this, new Context(tmp$ret$5));
    this.declare_1 = new DeclarePhase(this);
    this.define_1 = new DefinePhase(this);
  }
  RhovasAnalyzer.prototype.visit_l0g8lt_k$ = function (ast) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ast.imports_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$0 = this.visit_g8t6or_k$(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var imports = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = ast.statements_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$3 = visit_2(this, item_0);
      tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo_0;
    tmp$ret$5 = tmp$ret$4;
    var statements = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.also' call
    var tmp2_also = new Source(imports, statements);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp2_also.context_1 = ast.context_1;
    tmp$ret$6 = tmp2_also;
    return tmp$ret$6;
  };
  RhovasAnalyzer.prototype.visit_g8t6or_k$ = function (ast) {
    var tmp = Library_getInstance().get_TYPES_ih6ofk_k$();
    var tmp0_elvis_lhs = tmp.get_4u8u51_k$(joinToString$default(ast.path_1, '.', null, null, 0, null, null, 62, null));
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw this.error_tvhd7i_k$(ast, 'Undefined type.', 'The type ' + joinToString$default(ast.path_1, '.', null, null, 0, null, null, 62, null) + ' is not defined.');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var type = tmp_0;
    var tmp1_elvis_lhs = ast.alias_1;
    var alias = tmp1_elvis_lhs == null ? last(ast.path_1) : tmp1_elvis_lhs;
    var tmp_1 = !_get_scope__bi2zur(this.context_1, this).types_1.isDefined_bxumpo_k$(alias, true);
    this.require_qhwfzp_k$(tmp_1, RhovasAnalyzer$visit$lambda(this, ast));
    _get_scope__bi2zur(this.context_1, this).types_1.define_b5rmah_k$(type, alias);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Import(type);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  RhovasAnalyzer.prototype.visit_l35cuj_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var type = ensureNotNull(_get_scope__bi2zur(this.context_1, this).types_1.get_4u8u51_k$(ast.name_1));
    var tmp$ret$3;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ast.fields_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$1 = this.visit_xhkpms_k$(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
    }
    tmp$ret$2 = tmp0_mapTo;
    tmp$ret$3 = tmp$ret$2;
    var fields = tmp$ret$3;
    var tmp$ret$5;
    // Inline function 'kotlin.also' call
    var tmp1_also = new Struct(type, fields);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp1_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp1_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$4 = Unit_getInstance();
    }
    tmp$ret$5 = tmp1_also;
    return tmp$ret$5;
  };
  RhovasAnalyzer.prototype.visit_iqwb4n_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    return this.analyze$default_9wwnk4_k$(null, RhovasAnalyzer$visit$lambda_0(ast, this), 1, null);
  };
  RhovasAnalyzer.prototype.visit_65m3w9_k$ = function (ast) {
    this.declare_1.visit_q9gm0m_k$(ast.component_1);
    this.define_1.visit_q9gm0m_k$(ast.component_1);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Component(visit_1(this, ast.component_1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  RhovasAnalyzer.prototype.visit_19muq_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp = ast.expression_1;
    var tmp_0 = tmp instanceof Invoke_0;
    this.require_qhwfzp_k$(tmp_0, RhovasAnalyzer$visit$lambda_1(this, ast));
    var tmp_1 = visit_3(this, ast.expression_1);
    var expression = tmp_1 instanceof Invoke ? tmp_1 : THROW_CCE();
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Expression(expression);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$1 = Unit_getInstance();
    }
    tmp$ret$2 = tmp0_also;
    return tmp$ret$2;
  };
  RhovasAnalyzer.prototype.visitFunction_d3a66e_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp = _get_scope__bi2zur(this.context_1, this).functions_1.get_umit0u_k$(ast.name_1, ast.parameters_1.get_size_woubt6_k$(), true).isEmpty_y1axqb_k$();
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_2(this, ast));
    var parent = this.context_1;
    return this.analyze$default_9wwnk4_k$(null, RhovasAnalyzer$visit$lambda_3(ast, this, parent), 1, null);
  };
  RhovasAnalyzer.prototype.visitFunction = function (ast) {
    return this.visitFunction_d3a66e_k$(ast);
  };
  RhovasAnalyzer.prototype.visit_xhkpms_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp = _get_scope__bi2zur(this.context_1, this).variables_1.get_mex3b9_k$(ast.name_1, true) == null;
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_4(this, ast));
    var tmp_0 = !(ast.type_1 == null) ? true : !(ast.value_1 == null);
    this.require_qhwfzp_k$(tmp_0, RhovasAnalyzer$visit$lambda_5(this, ast));
    var tmp1_safe_receiver = ast.type_1;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$1 = this.visit_qvr368_k$(tmp1_safe_receiver).type_1;
      tmp$ret$2 = tmp$ret$1;
      tmp_1 = tmp$ret$2;
    }
    var type = tmp_1;
    var tmp2_safe_receiver = ast.value_1;
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$3 = visit_3(this, tmp2_safe_receiver);
      tmp$ret$4 = tmp$ret$3;
      tmp_2 = tmp$ret$4;
    }
    var value = tmp_2;
    var tmp_3 = (type == null ? true : value == null) ? true : value.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(type);
    this.require_qhwfzp_k$(tmp_3, RhovasAnalyzer$visit$lambda_6(this, ast, type, value));
    var tmp$ret$8;
    // Inline function 'kotlin.let' call
    var tmp3_elvis_lhs = type;
    var tmp0_let = new Declaration_4(ast.name_1, tmp3_elvis_lhs == null ? ensureNotNull(value).get_type_wovaf7_k$() : tmp3_elvis_lhs, ast.mutable_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$7;
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    var scope = _get_scope__bi2zur(this.context_1, this);
    var tmp_4;
    if (scope instanceof Declaration_3) {
      var tmp$ret$5;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
      scope.variables_1.define_f87tdr_k$(tmp0_let);
      tmp$ret$5 = tmp0_let;
      tmp_4 = tmp$ret$5;
    } else {
      if (scope instanceof Definition_0) {
        var tmp$ret$6;
        // Inline function 'kotlin.also' call
        var tmp0_also = new Definition_1(tmp0_let);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        scope.variables_1.define_f87tdr_k$(tmp0_also);
        tmp$ret$6 = tmp0_also;
        tmp_4 = tmp$ret$6;
      } else {
        noWhenBranchMatchedException();
      }
    }
    tmp$ret$7 = tmp_4;
    tmp$ret$8 = tmp$ret$7;
    var variable = tmp$ret$8;
    var tmp$ret$10;
    // Inline function 'kotlin.also' call
    var tmp1_also = new Declaration(variable, value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp1_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp1_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$9 = Unit_getInstance();
    }
    tmp$ret$10 = tmp1_also;
    return tmp$ret$10;
  };
  RhovasAnalyzer.prototype.visit_oeejlp_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp = ast.receiver_1;
    var tmp_0 = tmp instanceof Access_0;
    this.require_qhwfzp_k$(tmp_0, RhovasAnalyzer$visit$lambda_7(this, ast));
    var tmp1_subject = ast.receiver_1;
    var tmp_1;
    if (tmp1_subject instanceof Variable_3) {
      var receiver = this.visitAccessVariable_4xzlwu_k$(ast.receiver_1);
      var tmp_2 = receiver.variable_1.get_mutable_on1kxp_k$();
      this.require_qhwfzp_k$(tmp_2, RhovasAnalyzer$visit$lambda_8(this, ast, receiver));
      var value = visit_3(this, ast.value_1);
      var tmp_3 = value.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(receiver.variable_1.get_type_wovaf7_k$());
      this.require_qhwfzp_k$(tmp_3, RhovasAnalyzer$visit$lambda_9(this, ast, receiver, value));
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Variable(receiver.variable_1, value);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp0_also.context_1 = ast.context_1;
      var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
        tmp$ret$1 = Unit_getInstance();
      }
      tmp$ret$2 = tmp0_also;
      tmp_1 = tmp$ret$2;
    } else {
      if (tmp1_subject instanceof Property_2) {
        var tmp_4 = !ast.receiver_1.coalesce_1;
        this.require_qhwfzp_k$(tmp_4, RhovasAnalyzer$visit$lambda_10(this, ast));
        var receiver_0 = this.visit_p1i4hh_k$(ast.receiver_1);
        var tmp_5 = receiver_0.property_1.get_mutable_on1kxp_k$();
        this.require_qhwfzp_k$(tmp_5, RhovasAnalyzer$visit$lambda_11(this, ast, receiver_0));
        var value_0 = visit_3(this, ast.value_1);
        var tmp_6 = value_0.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(receiver_0.property_1.get_type_wovaf7_k$());
        this.require_qhwfzp_k$(tmp_6, RhovasAnalyzer$visit$lambda_12(this, ast, receiver_0, value_0));
        var tmp$ret$4;
        // Inline function 'kotlin.also' call
        var tmp1_also = new Property(receiver_0.receiver_1, receiver_0.property_1, value_0);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
        tmp1_also.context_1 = ast.context_1;
        var tmp0_safe_receiver_1 = firstOrNull(tmp1_also.context_1);
        if (tmp0_safe_receiver_1 == null)
          null;
        else {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
          tmp$ret$3 = Unit_getInstance();
        }
        tmp$ret$4 = tmp1_also;
        tmp_1 = tmp$ret$4;
      } else {
        if (tmp1_subject instanceof Index_1) {
          var receiver_1 = visit_3(this, ast.receiver_1.receiver_1);
          var tmp$ret$7;
          // Inline function 'kotlin.collections.map' call
          var tmp2_map = ast.receiver_1.arguments_1;
          var tmp$ret$6;
          // Inline function 'kotlin.collections.mapTo' call
          var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
          var tmp0_iterator = tmp2_map.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            var tmp$ret$5;
            // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
            tmp$ret$5 = visit_3(this, item);
            tmp0_mapTo.add_1j60pz_k$(tmp$ret$5);
          }
          tmp$ret$6 = tmp0_mapTo;
          tmp$ret$7 = tmp$ret$6;
          var arguments_0 = tmp$ret$7;
          var value_1 = visit_3(this, ast.value_1);
          var tmp_7 = receiver_1.get_type_wovaf7_k$().methods_1;
          var tmp$ret$10;
          // Inline function 'kotlin.collections.map' call
          var tmp$ret$9;
          // Inline function 'kotlin.collections.mapTo' call
          var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(arguments_0, 10));
          var tmp0_iterator_0 = arguments_0.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var item_0 = tmp0_iterator_0.next_20eer_k$();
            var tmp$ret$8;
            // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
            tmp$ret$8 = item_0.get_type_wovaf7_k$();
            tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$8);
          }
          tmp$ret$9 = tmp0_mapTo_0;
          tmp$ret$10 = tmp$ret$9;
          var tmp2_elvis_lhs = tmp_7.get_ffk12n_k$('[]=', plus(tmp$ret$10, listOf(value_1.get_type_wovaf7_k$())));
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            var tmp$ret$13;
            // Inline function 'kotlin.collections.map' call
            var tmp$ret$12;
            // Inline function 'kotlin.collections.mapTo' call
            var tmp0_mapTo_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(arguments_0, 10));
            var tmp0_iterator_1 = arguments_0.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var item_1 = tmp0_iterator_1.next_20eer_k$();
              var tmp$ret$11;
              // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
              tmp$ret$11 = item_1.get_type_wovaf7_k$();
              tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$11);
            }
            tmp$ret$12 = tmp0_mapTo_1;
            tmp$ret$13 = tmp$ret$12;
            var tmp_9 = plus(tmp$ret$13, listOf(value_1.get_type_wovaf7_k$()));
            throw this.error_tvhd7i_k$(ast, 'Unresolved method.', 'The signature []=(' + joinToString$default(tmp_9, ', ', null, null, 0, null, null, 62, null) + ') could not be resolved to a method in ' + receiver_1.get_type_wovaf7_k$().get_base_wojaxm_k$().name_1 + '.');
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var method = tmp_8;
          var tmp$ret$15;
          // Inline function 'kotlin.also' call
          var tmp3_also = new Index(receiver_1, method, arguments_0, value_1);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
          tmp3_also.context_1 = ast.context_1;
          var tmp0_safe_receiver_2 = firstOrNull(tmp3_also.context_1);
          if (tmp0_safe_receiver_2 == null)
            null;
          else {
            var tmp$ret$14;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
            tmp$ret$14 = Unit_getInstance();
          }
          tmp$ret$15 = tmp3_also;
          tmp_1 = tmp$ret$15;
        } else {
          throw AssertionError_init_$Create$();
        }
      }
    }
    return tmp_1;
  };
  RhovasAnalyzer.prototype.visit_yjn3hp_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var condition = visit_3(this, ast.condition_1);
    var tmp = condition.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')));
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_13(this, ast, condition));
    var tmp_0 = this.context_1.child_1kc9wc_k$();
    var thenStatement = this.analyze_r6hxcx_k$(tmp_0, RhovasAnalyzer$visit$lambda_14(this, ast));
    var tmp_1 = this.context_1.child_1kc9wc_k$();
    var elseStatement = this.analyze_r6hxcx_k$(tmp_1, RhovasAnalyzer$visit$lambda_15(ast, this));
    this.context_1.merge_b8btp5_k$();
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new If(condition, thenStatement, elseStatement);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$1 = Unit_getInstance();
    }
    tmp$ret$2 = tmp0_also;
    return tmp$ret$2;
  };
  RhovasAnalyzer.prototype.visit_fzh0pc_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ast.cases_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp = this.context_1.child_1kc9wc_k$();
      tmp$ret$1 = this.analyze_r6hxcx_k$(tmp, RhovasAnalyzer$visit$lambda_16(item, this));
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
    }
    tmp$ret$2 = tmp0_mapTo;
    tmp$ret$3 = tmp$ret$2;
    var cases = tmp$ret$3;
    var tmp_0 = this.context_1.child_1kc9wc_k$();
    var elseCase = this.analyze_r6hxcx_k$(tmp_0, RhovasAnalyzer$visit$lambda_17(ast, this));
    this.context_1.merge_b8btp5_k$();
    var tmp$ret$5;
    // Inline function 'kotlin.also' call
    var tmp1_also = new Conditional(cases, elseCase);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp1_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp1_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$4 = Unit_getInstance();
    }
    tmp$ret$5 = tmp1_also;
    return tmp$ret$5;
  };
  RhovasAnalyzer.prototype.visit_wpwm6r_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$0 = this.get_inputs_wrcrs2_k$(this.context_1).add_1j60pz_k$(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
    }
    var argument = visit_3(this, ast.argument_1);
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ast.cases_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp = this.context_1.child_1kc9wc_k$();
      var tmp_0 = argument.get_type_wovaf7_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$2 = LinkedHashMap_init_$Create$_0();
      var tmp_1 = tmp.with_s1jj2w_k$([new PatternContext(tmp_0, tmp$ret$2)]);
      tmp$ret$3 = this.analyze_r6hxcx_k$(tmp_1, RhovasAnalyzer$visit$lambda_18(item, this));
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo;
    tmp$ret$5 = tmp$ret$4;
    var cases = tmp$ret$5;
    var tmp1_safe_receiver = ast.elseCase_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp_3 = this.context_1.child_1kc9wc_k$();
      var tmp_4 = argument.get_type_wovaf7_k$();
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$6 = LinkedHashMap_init_$Create$_0();
      var tmp_5 = tmp_3.with_s1jj2w_k$([new PatternContext(tmp_4, tmp$ret$6)]);
      tmp$ret$7 = this.analyze_r6hxcx_k$(tmp_5, RhovasAnalyzer$visit$lambda_19(tmp1_safe_receiver, this));
      tmp$ret$8 = tmp$ret$7;
      tmp_2 = tmp$ret$8;
    }
    var elseCase = tmp_2;
    this.context_1.merge_b8btp5_k$();
    var tmp$ret$10;
    // Inline function 'kotlin.also' call
    var tmp1_also = new Structural(argument, cases, elseCase);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp1_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp1_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$9 = Unit_getInstance();
    }
    tmp$ret$10 = tmp1_also;
    return tmp$ret$10;
  };
  RhovasAnalyzer.prototype.visit_5g78j1_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var argument = visit_3(this, ast.argument_1);
    var tmp = argument.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')));
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_20(this, ast, argument));
    var type = ensureNotNull(argument.get_type_wovaf7_k$().methods_1.get_ffk12n_k$('get', listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Integer'))))).get_returns_jfk3fe_k$();
    var variable = new Declaration_4(ast.name_1, type, false);
    return this.analyze$default_9wwnk4_k$(null, RhovasAnalyzer$visit$lambda_21(this, variable, ast, argument), 1, null);
  };
  RhovasAnalyzer.prototype.visit_j2dbej_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var condition = visit_3(this, ast.condition_1);
    var tmp = condition.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')));
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_22(this, ast, condition));
    return this.analyze$default_9wwnk4_k$(null, RhovasAnalyzer$visit$lambda_23(this, ast, condition), 1, null);
  };
  RhovasAnalyzer.prototype.visit_5g6y2j_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var child = this.context_1.child_1kc9wc_k$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = ast.catches_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp0_safe_receiver_0 = firstOrNull(element.context_1);
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver_0);
        tmp$ret$1 = Unit_getInstance();
      }
      var type = this.visit_qvr368_k$(element.type_1).type_1;
      var tmp = type.isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Exception')));
      this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_24(this, element, type));
      _get_exceptions__5bldl3(child, this).add_1j60pz_k$(type);
      var tmp1_safe_receiver = firstOrNull(element.context_1);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
        tmp$ret$2 = Unit_getInstance();
      }
    }
    var body = this.analyze_r6hxcx_k$(child, RhovasAnalyzer$visit$lambda_25(this, ast));
    var tmp$ret$6;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = ast.catches_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$4;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp0_safe_receiver_1 = firstOrNull(item.context_1);
      if (tmp0_safe_receiver_1 == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver_1);
        tmp$ret$3 = Unit_getInstance();
      }
      var type_0 = this.visit_qvr368_k$(item.type_1).type_1;
      var variable = new Declaration_4(item.name_1, type_0, false);
      var tmp_0 = this.context_1.child_1kc9wc_k$();
      tmp$ret$4 = this.analyze_r6hxcx_k$(tmp_0, RhovasAnalyzer$visit$lambda_26(this, variable, item));
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$4);
    }
    tmp$ret$5 = tmp0_mapTo;
    tmp$ret$6 = tmp$ret$5;
    var catches = tmp$ret$6;
    this.context_1.merge_b8btp5_k$();
    var tmp1_safe_receiver_0 = ast.finallyStatement_1;
    var tmp_1;
    if (tmp1_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$9;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp_2 = this.context_1;
      var tmp$ret$7;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$7 = LinkedHashSet_init_$Create$();
      var tmp_3 = tmp_2.with_s1jj2w_k$([new ExceptionContext(tmp$ret$7)]);
      tmp$ret$8 = this.analyze_r6hxcx_k$(tmp_3, RhovasAnalyzer$visit$lambda_27(this, tmp1_safe_receiver_0));
      tmp$ret$9 = tmp$ret$8;
      tmp_1 = tmp$ret$9;
    }
    var finallyStatement = tmp_1;
    var tmp$ret$11;
    // Inline function 'kotlin.also' call
    var tmp2_also = new Try(body, catches, finallyStatement);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp2_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_2 = firstOrNull(tmp2_also.context_1);
    if (tmp0_safe_receiver_2 == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$10 = Unit_getInstance();
    }
    tmp$ret$11 = tmp2_also;
    return tmp$ret$11;
  };
  RhovasAnalyzer.prototype.visit_ir96kl_k$ = function (ast) {
    throw AssertionError_init_$Create$();
  };
  RhovasAnalyzer.prototype.visit_qvphz8_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var argument = visit_3(this, ast.argument_1);
    var tmp1_safe_receiver = ast.name_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$1 = new Declaration_4(ast.name_1, argument.get_type_wovaf7_k$(), false);
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    var variable = tmp;
    return this.analyze$default_9wwnk4_k$(null, RhovasAnalyzer$visit$lambda_28(variable, this, ast, argument), 1, null);
  };
  RhovasAnalyzer.prototype.visit_iw6ym6_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp;
    var tmp_0 = ast.statement_1;
    if (tmp_0 instanceof For_0) {
      tmp = true;
    } else {
      var tmp_1 = ast.statement_1;
      tmp = tmp_1 instanceof While_0;
    }
    var tmp_2 = tmp;
    this.require_qhwfzp_k$(tmp_2, RhovasAnalyzer$visit$lambda_29(this, ast));
    var tmp_3 = !_get_labels__ya3y1g(this.context_1, this).contains_2ehdt1_k$(ast.label_1);
    this.require_qhwfzp_k$(tmp_3, RhovasAnalyzer$visit$lambda_30(this, ast));
    return this.analyze$default_9wwnk4_k$(null, RhovasAnalyzer$visit$lambda_31(this, ast), 1, null);
  };
  RhovasAnalyzer.prototype.visit_iqzxl5_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp = _get_labels__ya3y1g(this.context_1, this).contains_2ehdt1_k$(null);
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_32(this, ast));
    var tmp_0 = _get_labels__ya3y1g(this.context_1, this).contains_2ehdt1_k$(ast.label_1);
    this.require_qhwfzp_k$(tmp_0, RhovasAnalyzer$visit$lambda_33(this, ast));
    _get_jumps__fhmkd0(this.context_1, this).add_1j60pz_k$(ast.label_1);
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Break(ast.label_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$1 = Unit_getInstance();
    }
    tmp$ret$2 = tmp0_also;
    return tmp$ret$2;
  };
  RhovasAnalyzer.prototype.visit_hzws4j_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp = _get_labels__ya3y1g(this.context_1, this).contains_2ehdt1_k$(null);
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_34(this, ast));
    var tmp_0 = _get_labels__ya3y1g(this.context_1, this).contains_2ehdt1_k$(ast.label_1);
    this.require_qhwfzp_k$(tmp_0, RhovasAnalyzer$visit$lambda_35(this, ast));
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Continue(ast.label_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$1 = Unit_getInstance();
    }
    tmp$ret$2 = tmp0_also;
    return tmp$ret$2;
  };
  RhovasAnalyzer.prototype.visit_kdw3vq_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp = !(_get_function__m6jw1f(this.context_1, this) == null);
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_36(this, ast));
    var tmp1_safe_receiver = ast.value_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$1 = visit_3(this, tmp1_safe_receiver);
      tmp$ret$2 = tmp$ret$1;
      tmp_0 = tmp$ret$2;
    }
    var value = tmp_0;
    var tmp2_safe_receiver = value;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_type_wovaf7_k$();
    var tmp_1 = (tmp3_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')) : tmp3_elvis_lhs).isSubtypeOf_ngr8tl_k$(ensureNotNull(_get_function__m6jw1f(this.context_1, this)).get_returns_jfk3fe_k$());
    this.require_qhwfzp_k$(tmp_1, RhovasAnalyzer$visit$lambda_37(this, ast, value));
    _get_jumps__fhmkd0(this.context_1, this).add_1j60pz_k$('');
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Return(value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$3 = Unit_getInstance();
    }
    tmp$ret$4 = tmp0_also;
    return tmp$ret$4;
  };
  RhovasAnalyzer.prototype.visit_j0q4ds_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var exception = visit_3(this, ast.exception_1);
    var tmp = exception.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Exception')));
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_38(this, ast, exception));
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp0_any = _get_exceptions__5bldl3(this.context_1, this);
      var tmp_0;
      if (isInterface(tmp0_any, Collection)) {
        tmp_0 = tmp0_any.isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_0;
      }
      var tmp0_iterator = tmp0_any.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$2;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
        tmp$ret$2 = exception.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(element);
        if (tmp$ret$2) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
      tmp$ret$1 = false;
    }
    var tmp_1 = tmp$ret$1;
    this.require_qhwfzp_k$(tmp_1, RhovasAnalyzer$visit$lambda_39(this, ast, exception));
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp1_also = new Throw(exception);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp1_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp1_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$3 = Unit_getInstance();
    }
    tmp$ret$4 = tmp1_also;
    return tmp$ret$4;
  };
  RhovasAnalyzer.prototype.visit_cjson0_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var condition = visit_3(this, ast.condition_1);
    var tmp = condition.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')));
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_40(this, ast, condition));
    var tmp1_safe_receiver = ast.message_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$1 = visit_3(this, tmp1_safe_receiver);
      tmp$ret$2 = tmp$ret$1;
      tmp_0 = tmp$ret$2;
    }
    var message = tmp_0;
    var tmp_1 = message == null ? true : message.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('String')));
    this.require_qhwfzp_k$(tmp_1, RhovasAnalyzer$visit$lambda_41(this, ast, message));
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Assert(condition, message);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$3 = Unit_getInstance();
    }
    tmp$ret$4 = tmp0_also;
    return tmp$ret$4;
  };
  RhovasAnalyzer.prototype.visit_7d0pqp_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var condition = visit_3(this, ast.condition_1);
    var tmp = condition.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')));
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_42(this, ast, condition));
    var tmp1_safe_receiver = ast.message_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$1 = visit_3(this, tmp1_safe_receiver);
      tmp$ret$2 = tmp$ret$1;
      tmp_0 = tmp$ret$2;
    }
    var message = tmp_0;
    var tmp_1 = message == null ? true : message.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('String')));
    this.require_qhwfzp_k$(tmp_1, RhovasAnalyzer$visit$lambda_43(this, ast, message));
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Require(condition, message);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$3 = Unit_getInstance();
    }
    tmp$ret$4 = tmp0_also;
    return tmp$ret$4;
  };
  RhovasAnalyzer.prototype.visit_ed8j3o_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var condition = visit_3(this, ast.condition_1);
    var tmp = condition.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')));
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_44(this, ast, condition));
    var tmp1_safe_receiver = ast.message_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$1 = visit_3(this, tmp1_safe_receiver);
      tmp$ret$2 = tmp$ret$1;
      tmp_0 = tmp$ret$2;
    }
    var message = tmp_0;
    var tmp_1 = message == null ? true : message.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('String')));
    this.require_qhwfzp_k$(tmp_1, RhovasAnalyzer$visit$lambda_45(this, ast, message));
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Ensure(condition, message);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$3 = Unit_getInstance();
    }
    tmp$ret$4 = tmp0_also;
    return tmp$ret$4;
  };
  RhovasAnalyzer.prototype.visit_ktht9e_k$ = function (ast) {
    var tmp0_subject = ast.value_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Null'));
    } else {
      if (!(tmp0_subject == null) ? typeof tmp0_subject === 'boolean' : false) {
        tmp = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean'));
      } else {
        if (tmp0_subject instanceof BigInteger) {
          tmp = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Integer'));
        } else {
          if (tmp0_subject instanceof BigDecimal) {
            tmp = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Decimal'));
          } else {
            if (tmp0_subject instanceof Atom) {
              tmp = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Atom'));
            } else {
              throw AssertionError_init_$Create$();
            }
          }
        }
      }
    }
    var type = tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Scalar(ast.value_1, type);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  RhovasAnalyzer.prototype.visit_l3547b_k$ = function (ast) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ast.arguments_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$0 = visit_3(this, item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var arguments_0 = tmp$ret$2;
    var type = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('String'));
    var tmp$ret$3;
    // Inline function 'kotlin.also' call
    var tmp1_also = new String_0(ast.literals_1, arguments_0, type);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp1_also.context_1 = ast.context_1;
    tmp$ret$3 = tmp1_also;
    return tmp$ret$3;
  };
  RhovasAnalyzer.prototype.visit_qvwiuk_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ast.elements_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$1 = visit_3(this, item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
    }
    tmp$ret$2 = tmp0_mapTo;
    tmp$ret$3 = tmp$ret$2;
    var elements = tmp$ret$3;
    var type = new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic'))));
    var tmp$ret$5;
    // Inline function 'kotlin.also' call
    var tmp1_also = new List_0(elements, type);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp1_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp1_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$4 = Unit_getInstance();
    }
    tmp$ret$5 = tmp1_also;
    return tmp$ret$5;
  };
  RhovasAnalyzer.prototype.visit_iwx4tx_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp0_mapValues = ast.properties_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp1_mapValuesTo = LinkedHashMap_init_$Create$(mapCapacity(tmp0_mapValues.get_size_woubt6_k$()));
    var tmp$ret$3;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = tmp0_mapValues.get_entries_p20ztl_k$();
    var tmp0_iterator = tmp0_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var tmp = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$2 = visit_3(this, element.get_value_j01efc_k$());
      tmp1_mapValuesTo.put_3mhbri_k$(tmp, tmp$ret$2);
    }
    tmp$ret$3 = tmp1_mapValuesTo;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var properties = tmp$ret$5;
    var type = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object'));
    var tmp$ret$7;
    // Inline function 'kotlin.also' call
    var tmp1_also = new Object_0(properties, type);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp1_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp1_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$6 = Unit_getInstance();
    }
    tmp$ret$7 = tmp1_also;
    return tmp$ret$7;
  };
  RhovasAnalyzer.prototype.visit_itr4g9_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var expression = visit_3(this, ast.expression_1);
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Group(expression);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$1 = Unit_getInstance();
    }
    tmp$ret$2 = tmp0_also;
    return tmp$ret$2;
  };
  RhovasAnalyzer.prototype.visit_j1ded5_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var expression = visit_3(this, ast.expression_1);
    var tmp = expression.get_type_wovaf7_k$().methods_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$1 = emptyList();
    var tmp1_elvis_lhs = tmp.get_ffk12n_k$(ast.operator_1, tmp$ret$1);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw this.error_tvhd7i_k$(ast, 'Undefined method.', 'The method op' + ast.operator_1 + '() is not defined in ' + expression.get_type_wovaf7_k$().get_base_wojaxm_k$().name_1 + '.');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var method = tmp_0;
    var tmp$ret$3;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Unary(ast.operator_1, expression, method);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$2 = Unit_getInstance();
    }
    tmp$ret$3 = tmp0_also;
    return tmp$ret$3;
  };
  RhovasAnalyzer.prototype.visit_cv937b_k$ = function (ast) {
    var left = visit_3(this, ast.left_1);
    var right = visit_3(this, ast.right_1);
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_subject = ast.operator_1;
    var tmp;
    switch (tmp1_subject) {
      case '&&':
      case '||':
        var tmp_0 = left.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')));
        this.require_qhwfzp_k$(tmp_0, RhovasAnalyzer$visit$lambda_46(this, ast, left));
        var tmp_1 = right.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')));
        this.require_qhwfzp_k$(tmp_1, RhovasAnalyzer$visit$lambda_47(this, ast, left));
        tmp = new Pair(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), null);
        break;
      case '==':
      case '!=':
        var tmp2_elvis_lhs = left.get_type_wovaf7_k$().methods_1.get_ffk12n_k$('==', listOf(left.get_type_wovaf7_k$()));
        var tmp_2;
        if (tmp2_elvis_lhs == null) {
          throw this.error_tvhd7i_k$(ast, 'Undefined method.', 'The method op==(' + left.get_type_wovaf7_k$() + ') is not defined in ' + left.get_type_wovaf7_k$().get_base_wojaxm_k$().name_1 + '.');
        } else {
          tmp_2 = tmp2_elvis_lhs;
        }

        var method = tmp_2;
        tmp = new Pair(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), method);
        break;
      case '===':
      case '!==':
        tmp = new Pair(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), null);
        break;
      case '<':
      case '>':
      case '<=':
      case '>=':
        var tmp3_elvis_lhs = left.get_type_wovaf7_k$().methods_1.get_ffk12n_k$('<=>', listOf(right.get_type_wovaf7_k$()));
        var tmp_3;
        if (tmp3_elvis_lhs == null) {
          throw this.error_tvhd7i_k$(ast, 'Unresolved method.', 'The signature op<=>(' + listOf(right.get_type_wovaf7_k$()) + ' could not be resolved to a method in ' + left.get_type_wovaf7_k$().get_base_wojaxm_k$().name_1 + '.');
        } else {
          tmp_3 = tmp3_elvis_lhs;
        }

        var method_0 = tmp_3;
        tmp = new Pair(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), method_0);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        var tmp4_elvis_lhs = left.get_type_wovaf7_k$().methods_1.get_ffk12n_k$(ast.operator_1, listOf(right.get_type_wovaf7_k$()));
        var tmp_4;
        if (tmp4_elvis_lhs == null) {
          throw this.error_tvhd7i_k$(ast, 'Unresolved method.', 'The signature op' + ast.operator_1 + '(' + listOf(right.get_type_wovaf7_k$()) + ' could not be resolved to a method in ' + left.get_type_wovaf7_k$().get_base_wojaxm_k$().name_1 + '.');
        } else {
          tmp_4 = tmp4_elvis_lhs;
        }

        var method_1 = tmp_4;
        tmp = new Pair(method_1.get_returns_jfk3fe_k$(), method_1);
        break;
      default:
        throw AssertionError_init_$Create$();
    }
    var tmp5_container = tmp;
    var type = tmp5_container.component1_7eebsc_k$();
    var method_2 = tmp5_container.component2_7eebsb_k$();
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Binary(ast.operator_1, left, right, method_2, type);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$1 = Unit_getInstance();
    }
    tmp$ret$2 = tmp0_also;
    return tmp$ret$2;
  };
  RhovasAnalyzer.prototype.visitAccessVariable_4xzlwu_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = ast.qualifier_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$1 = this.visit_qvr368_k$(tmp1_safe_receiver);
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    var qualifier = tmp;
    var tmp2_safe_receiver = qualifier;
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.type_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_base_wojaxm_k$();
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.scope_1;
    var tmp_0 = (tmp5_elvis_lhs == null ? _get_scope__bi2zur(this.context_1, this) : tmp5_elvis_lhs).variables_1;
    var tmp8_elvis_lhs = tmp_0.get$default_ig9dkq_k$(ast.name_1, false, 2, null);
    var tmp_1;
    if (tmp8_elvis_lhs == null) {
      var tmp6_safe_receiver = qualifier;
      var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.type_1;
      throw this.error_tvhd7i_k$(ast, 'Undefined variable.', 'The variable ' + ast.name_1 + ' is not defined in ' + toString(tmp7_elvis_lhs == null ? 'the current scope' : tmp7_elvis_lhs) + '.');
    } else {
      tmp_1 = tmp8_elvis_lhs;
    }
    var variable = tmp_1;
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Variable_0(qualifier, variable);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$3 = Unit_getInstance();
    }
    tmp$ret$4 = tmp0_also;
    return tmp$ret$4;
  };
  RhovasAnalyzer.prototype.visitAccessVariable = function (ast) {
    return this.visitAccessVariable_4xzlwu_k$(ast);
  };
  RhovasAnalyzer.prototype.visit_p1i4hh_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var receiver = visit_3(this, ast.receiver_1);
    var tmp;
    if (ast.coalesce_1) {
      var tmp_0 = receiver.get_type_wovaf7_k$().get_base_wojaxm_k$().equals(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Nullable')).get_base_wojaxm_k$());
      this.require_qhwfzp_k$(tmp_0, RhovasAnalyzer$visit$lambda_48(this, ast, receiver));
      var tmp_1 = receiver.get_type_wovaf7_k$().methods_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$1 = emptyList();
      tmp = ensureNotNull(tmp_1.get_ffk12n_k$('get', tmp$ret$1)).get_returns_jfk3fe_k$();
    } else {
      tmp = receiver.get_type_wovaf7_k$();
    }
    var receiverType = tmp;
    var tmp1_elvis_lhs = receiverType.properties_1.get_4u8u51_k$(ast.name_1);
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      throw this.error_tvhd7i_k$(ast, 'Undefined property.', 'The property getter ' + ast.name_1 + '() is not defined in ' + receiverType.get_base_wojaxm_k$().name_1 + '.');
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var property = tmp_2;
    var type = ast.coalesce_1 ? new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Nullable')).get_base_wojaxm_k$(), listOf(property.get_type_wovaf7_k$())) : property.get_type_wovaf7_k$();
    var tmp$ret$3;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Property_0(receiver, property, ast.coalesce_1, type);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$2 = Unit_getInstance();
    }
    tmp$ret$3 = tmp0_also;
    return tmp$ret$3;
  };
  RhovasAnalyzer.prototype.visit_iurx5o_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var receiver = visit_3(this, ast.receiver_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ast.arguments_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$1 = visit_3(this, item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
    }
    tmp$ret$2 = tmp0_mapTo;
    tmp$ret$3 = tmp$ret$2;
    var arguments_0 = tmp$ret$3;
    var tmp = receiver.get_type_wovaf7_k$().methods_1;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(arguments_0, 10));
    var tmp0_iterator_0 = arguments_0.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$4;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$4 = item_0.get_type_wovaf7_k$();
      tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$4);
    }
    tmp$ret$5 = tmp0_mapTo_0;
    tmp$ret$6 = tmp$ret$5;
    var tmp1_elvis_lhs = tmp.get_ffk12n_k$('[]', tmp$ret$6);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$9;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$8;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(arguments_0, 10));
      var tmp0_iterator_1 = arguments_0.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item_1 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$7;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
        tmp$ret$7 = item_1.get_type_wovaf7_k$();
        tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$7);
      }
      tmp$ret$8 = tmp0_mapTo_1;
      tmp$ret$9 = tmp$ret$8;
      var tmp_1 = tmp$ret$9;
      throw this.error_tvhd7i_k$(ast, 'Unresolved method.', 'The signature [](' + joinToString$default(tmp_1, ', ', null, null, 0, null, null, 62, null) + ') could not be resolved to a method in ' + receiver.get_type_wovaf7_k$().get_base_wojaxm_k$().name_1 + '.');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var method = tmp_0;
    var tmp$ret$11;
    // Inline function 'kotlin.also' call
    var tmp1_also = new Index_0(receiver, method, arguments_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp1_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp1_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$10;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$10 = Unit_getInstance();
    }
    tmp$ret$11 = tmp1_also;
    return tmp$ret$11;
  };
  RhovasAnalyzer.prototype.visitInvokeFunction_6bkmaq_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = ast.qualifier_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$1 = this.visit_qvr368_k$(tmp1_safe_receiver);
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    var qualifier = tmp;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp$ret$6;
    // Inline function 'kotlin.collections.map' call
    var tmp2_safe_receiver = qualifier;
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.type_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_base_wojaxm_k$();
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.scope_1;
    var tmp_0 = (tmp5_elvis_lhs == null ? _get_scope__bi2zur(this.context_1, this) : tmp5_elvis_lhs).functions_1;
    var tmp_1 = ast.arguments_1.get_size_woubt6_k$();
    var tmp0_map = tmp_0.get$default_vibwnr_k$(ast.name_1, tmp_1, false, 4, null);
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$4;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$3 = LinkedHashMap_init_$Create$_0();
      tmp$ret$4 = new Pair(item, tmp$ret$3);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$4);
    }
    tmp$ret$5 = tmp0_mapTo;
    tmp$ret$6 = tmp$ret$5;
    var tmp1_ifEmpty = tmp$ret$6;
    var tmp_2;
    if (tmp1_ifEmpty.isEmpty_y1axqb_k$()) {
      var tmp_3 = ast.arguments_1.get_size_woubt6_k$();
      var tmp0_safe_receiver_0 = qualifier;
      var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.type_1;
      throw this.error_tvhd7i_k$(ast, 'Undefined function.', 'The function ' + ast.name_1 + '/' + tmp_3 + ' is not defined in ' + toString(tmp1_elvis_lhs == null ? 'the current scope' : tmp1_elvis_lhs) + '.".');
    } else {
      tmp_2 = tmp1_ifEmpty;
    }
    tmp$ret$7 = tmp_2;
    var candidates = tmp$ret$7;
    var filtered = toMutableList(candidates);
    var tmp$ret$8;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$8 = ArrayList_init_$Create$();
    var arguments_0 = tmp$ret$8;
    var inductionVariable = 0;
    var last = ast.arguments_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        arguments_0.add_1j60pz_k$(visit_3(this, ast.arguments_1.get_fkrdnv_k$(i)));
        retainAll(filtered, RhovasAnalyzer$visit$lambda_49(arguments_0, i));
        var tmp$ret$9;
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp$ret$9 = !filtered.isEmpty_y1axqb_k$();
        var tmp_4 = tmp$ret$9;
        this.require_qhwfzp_k$(tmp_4, RhovasAnalyzer$visit$lambda_50(this, ast, i, candidates, arguments_0));
      }
       while (inductionVariable <= last);
    var resolved = single(filtered);
    var function_0 = resolved.first_1.bind_9oflcx_k$(resolved.second_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = function_0.get_throws_jy60ra_k$();
    var tmp0_iterator_0 = tmp2_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp$ret$10;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp0_any = _get_exceptions__5bldl3(this.context_1, this);
        var tmp_5;
        if (isInterface(tmp0_any, Collection)) {
          tmp_5 = tmp0_any.isEmpty_y1axqb_k$();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          tmp$ret$10 = false;
          break $l$block_0;
        }
        var tmp0_iterator_1 = tmp0_any.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_1.next_20eer_k$();
          var tmp$ret$11;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          tmp$ret$11 = element.isSubtypeOf_ngr8tl_k$(element_0);
          if (tmp$ret$11) {
            tmp$ret$10 = true;
            break $l$block_0;
          }
        }
        tmp$ret$10 = false;
      }
      var tmp_6 = tmp$ret$10;
      this.require_qhwfzp_k$(tmp_6, RhovasAnalyzer$visit$lambda_51(this, ast, element));
    }
    var tmp$ret$13;
    // Inline function 'kotlin.also' call
    var tmp3_also = new Function_0(qualifier, function_0, arguments_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp3_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_1 = firstOrNull(tmp3_also.context_1);
    if (tmp0_safe_receiver_1 == null)
      null;
    else {
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$12 = Unit_getInstance();
    }
    tmp$ret$13 = tmp3_also;
    return tmp$ret$13;
  };
  RhovasAnalyzer.prototype.visitInvokeFunction = function (ast) {
    return this.visitInvokeFunction_6bkmaq_k$(ast);
  };
  RhovasAnalyzer.prototype.visit_i0nq6v_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var receiver = visit_3(this, ast.receiver_1);
    var tmp;
    if (ast.coalesce_1) {
      var tmp_0 = receiver.get_type_wovaf7_k$().get_base_wojaxm_k$().equals(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Nullable')).get_base_wojaxm_k$());
      this.require_qhwfzp_k$(tmp_0, RhovasAnalyzer$visit$lambda_52(this, ast, receiver));
      var tmp_1 = receiver.get_type_wovaf7_k$().methods_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$1 = emptyList();
      tmp = ensureNotNull(tmp_1.get_ffk12n_k$('get', tmp$ret$1)).get_returns_jfk3fe_k$();
    } else {
      tmp = receiver.get_type_wovaf7_k$();
    }
    var receiverType = tmp;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = receiverType.functions_1.get_fseki4_k$(ast.name_1, ast.arguments_1.get_size_woubt6_k$() + 1 | 0);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$2 = LinkedHashMap_init_$Create$_0();
      tmp$ret$3 = new Pair(item, tmp$ret$2);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp1_ifEmpty = tmp$ret$5;
    var tmp_2;
    if (tmp1_ifEmpty.isEmpty_y1axqb_k$()) {
      throw this.error_tvhd7i_k$(ast, 'Undefined method.', 'The method ' + ast.name_1 + '/' + ast.arguments_1.get_size_woubt6_k$() + ' is not defined in ' + receiverType + '.');
    } else {
      tmp_2 = tmp1_ifEmpty;
    }
    tmp$ret$6 = tmp_2;
    var candidates = tmp$ret$6;
    var filtered = toMutableList(candidates);
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$7 = ArrayList_init_$Create$();
    var arguments_0 = tmp$ret$7;
    var inductionVariable = 0;
    var last = ast.arguments_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        arguments_0.add_1j60pz_k$(visit_3(this, ast.arguments_1.get_fkrdnv_k$(i)));
        retainAll(filtered, RhovasAnalyzer$visit$lambda_53(arguments_0, i));
        var tmp$ret$8;
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp$ret$8 = !filtered.isEmpty_y1axqb_k$();
        var tmp_3 = tmp$ret$8;
        this.require_qhwfzp_k$(tmp_3, RhovasAnalyzer$visit$lambda_54(this, ast, i, candidates, receiverType, arguments_0));
      }
       while (inductionVariable <= last);
    var resolved = single(filtered);
    var method = new Declaration_1(resolved.first_1.bind_9oflcx_k$(resolved.second_1));
    var type = ast.cascade_1 ? receiver.get_type_wovaf7_k$() : ast.coalesce_1 ? new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Nullable')).get_base_wojaxm_k$(), listOf(method.get_returns_jfk3fe_k$())) : method.get_returns_jfk3fe_k$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = method.get_throws_jy60ra_k$();
    var tmp0_iterator_0 = tmp2_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp$ret$9;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp0_any = _get_exceptions__5bldl3(this.context_1, this);
        var tmp_4;
        if (isInterface(tmp0_any, Collection)) {
          tmp_4 = tmp0_any.isEmpty_y1axqb_k$();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          tmp$ret$9 = false;
          break $l$block_0;
        }
        var tmp0_iterator_1 = tmp0_any.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_1.next_20eer_k$();
          var tmp$ret$10;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          tmp$ret$10 = element.isSubtypeOf_ngr8tl_k$(element_0);
          if (tmp$ret$10) {
            tmp$ret$9 = true;
            break $l$block_0;
          }
        }
        tmp$ret$9 = false;
      }
      var tmp_5 = tmp$ret$9;
      this.require_qhwfzp_k$(tmp_5, RhovasAnalyzer$visit$lambda_55(this, ast, element));
    }
    var tmp$ret$12;
    // Inline function 'kotlin.also' call
    var tmp3_also = new Method(receiver, method, ast.coalesce_1, ast.cascade_1, arguments_0, type);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp3_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp3_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$11 = Unit_getInstance();
    }
    tmp$ret$12 = tmp3_also;
    return tmp$ret$12;
  };
  RhovasAnalyzer.prototype.visit_erqelk_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var receiver = visit_3(this, ast.receiver_1);
    var tmp;
    if (ast.coalesce_1) {
      var tmp_0 = receiver.get_type_wovaf7_k$().get_base_wojaxm_k$().equals(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Nullable')).get_base_wojaxm_k$());
      this.require_qhwfzp_k$(tmp_0, RhovasAnalyzer$visit$lambda_56(this, ast, receiver));
      var tmp_1 = receiver.get_type_wovaf7_k$().methods_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$1 = emptyList();
      tmp = ensureNotNull(tmp_1.get_ffk12n_k$('get', tmp$ret$1)).get_returns_jfk3fe_k$();
    } else {
      tmp = receiver.get_type_wovaf7_k$();
    }
    var receiverType = tmp;
    var tmp1_safe_receiver = ast.qualifier_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp$ret$2 = this.visit_qvr368_k$(tmp1_safe_receiver);
      tmp$ret$3 = tmp$ret$2;
      tmp_2 = tmp$ret$3;
    }
    var qualifier = tmp_2;
    var tmp$ret$8;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp$ret$7;
    // Inline function 'kotlin.collections.map' call
    var tmp2_safe_receiver = qualifier;
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.type_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_base_wojaxm_k$();
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.scope_1;
    var tmp_3 = (tmp5_elvis_lhs == null ? _get_scope__bi2zur(this.context_1, this) : tmp5_elvis_lhs).functions_1;
    var tmp_4 = ast.arguments_1.get_size_woubt6_k$() + 1 | 0;
    var tmp0_map = tmp_3.get$default_vibwnr_k$(ast.name_1, tmp_4, false, 4, null);
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$5;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$4 = LinkedHashMap_init_$Create$_0();
      tmp$ret$5 = new Pair(item, tmp$ret$4);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$5);
    }
    tmp$ret$6 = tmp0_mapTo;
    tmp$ret$7 = tmp$ret$6;
    var tmp1_ifEmpty = tmp$ret$7;
    var tmp_5;
    if (tmp1_ifEmpty.isEmpty_y1axqb_k$()) {
      var tmp0_elvis_lhs = ast.qualifier_1;
      var tmp_6 = tmp0_elvis_lhs == null ? ast : tmp0_elvis_lhs;
      var tmp_7 = ast.arguments_1.get_size_woubt6_k$();
      var tmp1_safe_receiver_0 = qualifier;
      var tmp2_elvis_lhs = tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.type_1;
      throw this.error_tvhd7i_k$(tmp_6, 'Undefined function.', 'The function ' + ast.name_1 + '/' + tmp_7 + ' is not defined in ' + toString(tmp2_elvis_lhs == null ? ' in the current scope' : tmp2_elvis_lhs) + '.');
    } else {
      tmp_5 = tmp1_ifEmpty;
    }
    tmp$ret$8 = tmp_5;
    var candidates = tmp$ret$8;
    var filtered = toMutableList(candidates);
    retainAll(filtered, RhovasAnalyzer$visit$lambda_57(receiverType));
    var tmp$ret$9;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$9 = !filtered.isEmpty_y1axqb_k$();
    var tmp_8 = tmp$ret$9;
    this.require_qhwfzp_k$(tmp_8, RhovasAnalyzer$visit$lambda_58(this, ast, candidates, receiverType));
    var tmp$ret$10;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$10 = ArrayList_init_$Create$();
    var arguments_0 = tmp$ret$10;
    var inductionVariable = 0;
    var last = ast.arguments_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        arguments_0.add_1j60pz_k$(visit_3(this, ast.arguments_1.get_fkrdnv_k$(i)));
        retainAll(filtered, RhovasAnalyzer$visit$lambda_59(arguments_0, i));
        var tmp$ret$11;
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp$ret$11 = !filtered.isEmpty_y1axqb_k$();
        var tmp_9 = tmp$ret$11;
        this.require_qhwfzp_k$(tmp_9, RhovasAnalyzer$visit$lambda_60(this, ast, i, candidates, arguments_0, receiverType));
      }
       while (inductionVariable <= last);
    var resolved = single(filtered);
    var function_0 = resolved.first_1.bind_9oflcx_k$(resolved.second_1);
    var type = ast.cascade_1 ? receiver.get_type_wovaf7_k$() : ast.coalesce_1 ? new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Nullable')).get_base_wojaxm_k$(), listOf(function_0.get_returns_jfk3fe_k$())) : function_0.get_returns_jfk3fe_k$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = function_0.get_throws_jy60ra_k$();
    var tmp0_iterator_0 = tmp2_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp$ret$12;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp0_any = _get_exceptions__5bldl3(this.context_1, this);
        var tmp_10;
        if (isInterface(tmp0_any, Collection)) {
          tmp_10 = tmp0_any.isEmpty_y1axqb_k$();
        } else {
          tmp_10 = false;
        }
        if (tmp_10) {
          tmp$ret$12 = false;
          break $l$block_0;
        }
        var tmp0_iterator_1 = tmp0_any.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_1.next_20eer_k$();
          var tmp$ret$13;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          tmp$ret$13 = element.isSubtypeOf_ngr8tl_k$(element_0);
          if (tmp$ret$13) {
            tmp$ret$12 = true;
            break $l$block_0;
          }
        }
        tmp$ret$12 = false;
      }
      var tmp_11 = tmp$ret$12;
      this.require_qhwfzp_k$(tmp_11, RhovasAnalyzer$visit$lambda_61(this, ast, element));
    }
    var tmp$ret$15;
    // Inline function 'kotlin.also' call
    var tmp3_also = new Pipeline(receiver, qualifier, function_0, ast.coalesce_1, ast.cascade_1, arguments_0, type);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp3_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp3_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$14;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$14 = Unit_getInstance();
    }
    tmp$ret$15 = tmp3_also;
    return tmp$ret$15;
  };
  RhovasAnalyzer.prototype.visit_iwqs9i_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    if (ast.dsl_1 == null) {
      throw this.error_tvhd7i_k$(ast, 'Unsupported Macro', 'Macros without DSLs are not currently supported.');
    } else {
      var tmp = ast.arguments_1.isEmpty_y1axqb_k$();
      this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_62(this, ast));
      var tmp_0 = ast.dsl_1;
      var tmp1_elvis_lhs = tmp_0 instanceof Source_0 ? tmp_0 : null;
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        throw this.error_tvhd7i_k$(ast, 'Invalid DSL AST.', 'The AST of type ' + toString_0(ast.dsl_1) + ' is not currently supported.');
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var source = tmp_1;
      var tmp_2 = _get_scope__bi2zur(this.context_1, this).functions_1;
      var tmp_3 = listOf_0([new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('String')))), new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic'))))]);
      var tmp2_elvis_lhs = tmp_2.get$default_q9ul3w_k$(ast.name_1, tmp_3, false, 4, null);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        throw this.error_tvhd7i_k$(ast, 'Undefined DSL transformer.', 'The DSL ' + ast.name_1 + ' requires a transformer function ' + ast.name_1 + '(List<String>, List<Dynamic>).');
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var function_0 = tmp_4;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = source.literals_1;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$2;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
        var tmp_5 = listOf(item);
        var tmp$ret$1;
        // Inline function 'kotlin.collections.listOf' call
        tmp$ret$1 = emptyList();
        tmp$ret$2 = new String_0(tmp_5, tmp$ret$1, ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('String')));
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
      }
      tmp$ret$3 = tmp0_mapTo;
      tmp$ret$4 = tmp$ret$3;
      var literals = new List_0(tmp$ret$4, new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('String')))));
      var tmp$ret$7;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = source.arguments_1;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$5;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
        tmp$ret$5 = visit_3(this, item_0 instanceof Expression_2 ? item_0 : THROW_CCE());
        tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$5);
      }
      tmp$ret$6 = tmp0_mapTo_0;
      tmp$ret$7 = tmp$ret$6;
      var arguments_0 = new List_0(tmp$ret$7, new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic')))));
      var tmp$ret$9;
      // Inline function 'kotlin.also' call
      var tmp2_also = new Function_0(null, function_0, listOf_0([literals, arguments_0]));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      tmp2_also.context_1 = ast.context_1;
      var tmp0_safe_receiver_0 = firstOrNull(tmp2_also.context_1);
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp$ret$8;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
        tmp$ret$8 = Unit_getInstance();
      }
      tmp$ret$9 = tmp2_also;
      return tmp$ret$9;
    }
  };
  RhovasAnalyzer.prototype.visit_hhabst_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ast.parameters_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp0_safe_receiver_0 = item.second_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        tmp$ret$1 = this.visit_qvr368_k$(tmp0_safe_receiver_0).type_1;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      var tmp1_elvis_lhs = tmp;
      tmp$ret$3 = new Declaration_4(item.first_1, tmp1_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic')) : tmp1_elvis_lhs, false);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo;
    tmp$ret$5 = tmp$ret$4;
    var parameters = tmp$ret$5;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$6 = emptyList();
    var tmp_0 = tmp$ret$6;
    var tmp_1 = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic'));
    var tmp$ret$7;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$7 = emptyList();
    var function_0 = new Declaration_0('lambda', tmp_0, parameters, tmp_1, tmp$ret$7);
    var tmp_2 = this.context_1.child_1kc9wc_k$().with_s1jj2w_k$([new FunctionContext(function_0)]);
    return this.analyze_r6hxcx_k$(tmp_2, RhovasAnalyzer$visit$lambda_63(parameters, this, ast));
  };
  RhovasAnalyzer.prototype.visitPatternVariable_6mhn94_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp = !_get_pattern__f9i1rz(this.context_1, this).bindings_1.containsKey_wgk31w_k$(ast.name_1);
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_64(this, ast));
    var tmp_0;
    if (!(ast.name_1 === '_')) {
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = _get_pattern__f9i1rz(this.context_1, this).bindings_1;
      var tmp1_set = ast.name_1;
      var tmp2_set = _get_pattern__f9i1rz(this.context_1, this).type_1;
      tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
      tmp_0 = new Declaration_4(ast.name_1, _get_pattern__f9i1rz(this.context_1, this).type_1, false);
    } else {
      tmp_0 = null;
    }
    var variable = tmp_0;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp3_also = new Variable_1(variable);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp3_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp3_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$1 = Unit_getInstance();
    }
    tmp$ret$2 = tmp3_also;
    return tmp$ret$2;
  };
  RhovasAnalyzer.prototype.visitPatternVariable = function (ast) {
    return this.visitPatternVariable_6mhn94_k$(ast);
  };
  RhovasAnalyzer.prototype.visit_j1p4cb_k$ = function (ast) {
    var value = visit_3(this, ast.value_1);
    var tmp = value.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(_get_pattern__f9i1rz(this.context_1, this).type_1);
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_65(this, ast, value));
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Value(value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  RhovasAnalyzer.prototype.visit_5aq8vz_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var existing = toMutableMap(_get_pattern__f9i1rz(this.context_1, this).bindings_1);
    var tmp = this.context_1;
    var tmp_0 = _get_pattern__f9i1rz(this.context_1, this).type_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$_0();
    var tmp_1 = tmp.with_s1jj2w_k$([new PatternContext(tmp_0, tmp$ret$1)]);
    var tmp1_container = this.analyze_r6hxcx_k$(tmp_1, RhovasAnalyzer$visit$lambda_66(this, ast, existing));
    var pattern = tmp1_container.component1_7eebsc_k$();
    var predicate = tmp1_container.component2_7eebsb_k$();
    var tmp_2 = predicate.get_type_wovaf7_k$().isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')));
    this.require_qhwfzp_k$(tmp_2, RhovasAnalyzer$visit$lambda_67(this, ast, predicate));
    var tmp$ret$3;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Predicate(pattern, predicate);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp0_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$2 = Unit_getInstance();
    }
    tmp$ret$3 = tmp0_also;
    return tmp$ret$3;
  };
  RhovasAnalyzer.prototype.visit_krvfad_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp = (new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic'))))).isSubtypeOf_ngr8tl_k$(_get_pattern__f9i1rz(this.context_1, this).type_1);
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_68(this, ast));
    var type = _get_pattern__f9i1rz(this.context_1, this).type_1.isSubtypeOf_ngr8tl_k$(new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic'))))) ? ensureNotNull(_get_pattern__f9i1rz(this.context_1, this).type_1.methods_1.get_ffk12n_k$('get', listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Integer'))))).get_returns_jfk3fe_k$() : ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic'));
    var vararg = false;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(ast.patterns_1);
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$4;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp_0;
      var tmp_1 = item.value_1;
      if (tmp_1 instanceof VarargDestructure_0) {
        var tmp_2 = !vararg;
        this.require_qhwfzp_k$(tmp_2, RhovasAnalyzer$visit$lambda_69(this, item));
        vararg = true;
        var tmp_3 = item.value_1;
        var ast_0 = tmp_3 instanceof VarargDestructure_0 ? tmp_3 : THROW_CCE();
        var tmp0_safe_receiver_0 = ast_0.pattern_1;
        var tmp_4;
        if (tmp0_safe_receiver_0 == null) {
          tmp_4 = null;
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          var existing = toMutableMap(_get_pattern__f9i1rz(this.context_1, this).bindings_1);
          var tmp_5 = this.context_1.with_s1jj2w_k$([new PatternContext(type, _get_pattern__f9i1rz(this.context_1, this).bindings_1)]);
          tmp$ret$1 = this.analyze_r6hxcx_k$(tmp_5, RhovasAnalyzer$visit$lambda_70(this, tmp0_safe_receiver_0, existing));
          tmp$ret$2 = tmp$ret$1;
          tmp_4 = tmp$ret$2;
        }
        var pattern = tmp_4;
        var tmp$ret$3;
        // Inline function 'kotlin.also' call
        var tmp0_also = new VarargDestructure(pattern, ast_0.operator_1, new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(type)));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        tmp0_also.context_1 = ast_0.context_1;
        tmp$ret$3 = tmp0_also;
        tmp_0 = tmp$ret$3;
      } else {
        var tmp_6 = this.context_1.with_s1jj2w_k$([new PatternContext(type, _get_pattern__f9i1rz(this.context_1, this).bindings_1)]);
        tmp_0 = this.analyze_r6hxcx_k$(tmp_6, RhovasAnalyzer$visit$lambda_71(this, item));
      }
      tmp$ret$4 = tmp_0;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$4);
    }
    tmp$ret$5 = tmp0_mapTo;
    tmp$ret$6 = tmp$ret$5;
    var patterns = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.also' call
    var tmp1_also = new OrderedDestructure(patterns, new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(type)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp1_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_1 = firstOrNull(tmp1_also.context_1);
    if (tmp0_safe_receiver_1 == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$7 = Unit_getInstance();
    }
    tmp$ret$8 = tmp1_also;
    return tmp$ret$8;
  };
  RhovasAnalyzer.prototype.visit_7rvg8h_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object')).isSubtypeOf_ngr8tl_k$(_get_pattern__f9i1rz(this.context_1, this).type_1);
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_72(this, ast));
    var vararg = false;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(ast.patterns_1);
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$4;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp_0;
      var tmp_1 = item.value_1.second_1;
      if (tmp_1 instanceof VarargDestructure_0) {
        var tmp_2 = !vararg;
        this.require_qhwfzp_k$(tmp_2, RhovasAnalyzer$visit$lambda_73(this, item));
        vararg = true;
        var tmp_3 = item.value_1.second_1;
        var ast_0 = tmp_3 instanceof VarargDestructure_0 ? tmp_3 : THROW_CCE();
        var tmp0_safe_receiver_0 = ast_0.pattern_1;
        var tmp_4;
        if (tmp0_safe_receiver_0 == null) {
          tmp_4 = null;
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
          var existing = toMutableMap(_get_pattern__f9i1rz(this.context_1, this).bindings_1);
          var tmp_5 = this.context_1.with_s1jj2w_k$([new PatternContext(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic')), _get_pattern__f9i1rz(this.context_1, this).bindings_1)]);
          tmp$ret$1 = this.analyze_r6hxcx_k$(tmp_5, RhovasAnalyzer$visit$lambda_74(this, tmp0_safe_receiver_0, existing));
          tmp$ret$2 = tmp$ret$1;
          tmp_4 = tmp$ret$2;
        }
        var pattern = tmp_4;
        var tmp$ret$3;
        // Inline function 'kotlin.also' call
        var tmp0_also = new VarargDestructure(pattern, ast_0.operator_1, ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object')));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>.<anonymous>' call
        tmp0_also.context_1 = ast_0.context_1;
        tmp$ret$3 = tmp0_also;
        tmp_0 = new Pair(null, tmp$ret$3);
      } else {
        var tmp2_elvis_lhs = item.value_1.first_1;
        var tmp_6;
        if (tmp2_elvis_lhs == null) {
          var tmp_7 = item.value_1.second_1;
          var tmp1_safe_receiver = tmp_7 instanceof Variable_4 ? tmp_7 : null;
          tmp_6 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.name_1;
        } else {
          tmp_6 = tmp2_elvis_lhs;
        }
        var tmp3_elvis_lhs = tmp_6;
        var tmp_8;
        if (tmp3_elvis_lhs == null) {
          throw this.error_tvhd7i_k$(item.value_1.second_1, 'Missing pattern key', 'This pattern requires a key to be used within a named destructure.');
        } else {
          tmp_8 = tmp3_elvis_lhs;
        }
        var key = tmp_8;
        var tmp_9 = this.context_1.with_s1jj2w_k$([new PatternContext(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic')), _get_pattern__f9i1rz(this.context_1, this).bindings_1)]);
        var pattern_0 = this.analyze_r6hxcx_k$(tmp_9, RhovasAnalyzer$visit$lambda_75(this, item));
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = _get_pattern__f9i1rz(this.context_1, this).bindings_1;
        var tmp2_set = pattern_0.get_type_wovaf7_k$();
        tmp1_set.put_3mhbri_k$(key, tmp2_set);
        tmp_0 = new Pair(key, pattern_0);
      }
      tmp$ret$4 = tmp_0;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$4);
    }
    tmp$ret$5 = tmp0_mapTo;
    tmp$ret$6 = tmp$ret$5;
    var patterns = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.also' call
    var tmp1_also = new NamedDestructure(patterns, ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object')));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp1_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_1 = firstOrNull(tmp1_also.context_1);
    if (tmp0_safe_receiver_1 == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$7 = Unit_getInstance();
    }
    tmp$ret$8 = tmp1_also;
    return tmp$ret$8;
  };
  RhovasAnalyzer.prototype.visit_hmz1a6_k$ = function (ast) {
    var type = this.visit_qvr368_k$(ast.type_1);
    var tmp = type.type_1.isSubtypeOf_ngr8tl_k$(_get_pattern__f9i1rz(this.context_1, this).type_1);
    this.require_qhwfzp_k$(tmp, RhovasAnalyzer$visit$lambda_76(this, ast, type));
    var tmp0_safe_receiver = ast.pattern_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp_1 = this.context_1.with_s1jj2w_k$([new PatternContext(type.type_1, _get_pattern__f9i1rz(this.context_1, this).bindings_1)]);
      tmp$ret$0 = this.analyze_r6hxcx_k$(tmp_1, RhovasAnalyzer$visit$lambda_77(this, tmp0_safe_receiver));
      tmp$ret$1 = tmp$ret$0;
      tmp_0 = tmp$ret$1;
    }
    var pattern = tmp_0;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new TypedDestructure(type.type_1, pattern);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp0_also.context_1 = ast.context_1;
    tmp$ret$2 = tmp0_also;
    return tmp$ret$2;
  };
  RhovasAnalyzer.prototype.visit_qm8bxv_k$ = function (ast) {
    throw AssertionError_init_$Create$();
  };
  RhovasAnalyzer.prototype.visit_qvr368_k$ = function (ast) {
    var tmp0_safe_receiver = firstOrNull(ast.context_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).addLast_i401o4_k$(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_elvis_lhs = _get_scope__bi2zur(this.context_1, this).types_1.get_4u8u51_k$(first(ast.path_1));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw this.error_tvhd7i_k$(ast, 'Undefined type.', 'The type ' + first(ast.path_1) + ' is not defined in the current scope.');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var type = {_v: tmp};
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = drop(ast.path_1, 1);
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
      var tmp0_elvis_lhs = type._v.get_base_wojaxm_k$().scope_1.types_1.get_4u8u51_k$(element);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        throw this.error_tvhd7i_k$(ast, 'Undefined type.', 'The type ' + element + ' is not defined in ' + type._v + '.');
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      type._v = tmp_0;
    }
    if (!(ast.generics_1 == null)) {
      var tmp_1 = type._v;
      var tmp_2 = tmp_1 instanceof Reference;
      this.require_qhwfzp_k$(tmp_2, RhovasAnalyzer$visit$lambda_78(this, ast, type));
      var tmp$ret$3;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = ast.generics_1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
        tmp$ret$1 = this.visit_qvr368_k$(item).type_1;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
      }
      tmp$ret$2 = tmp0_mapTo;
      tmp$ret$3 = tmp$ret$2;
      var generics = tmp$ret$3;
      var tmp_3 = type._v.get_base_wojaxm_k$().generics_1.get_size_woubt6_k$() === generics.get_size_woubt6_k$();
      this.require_qhwfzp_k$(tmp_3, RhovasAnalyzer$visit$lambda_79(this, ast, type, generics));
      var inductionVariable = 0;
      var last = generics.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp_4 = generics.get_fkrdnv_k$(i).isSubtypeOf_ngr8tl_k$(type._v.get_base_wojaxm_k$().generics_1.get_fkrdnv_k$(i).bound_1);
          this.require_qhwfzp_k$(tmp_4, RhovasAnalyzer$visit$lambda_80(this, ast, i, type, generics));
        }
         while (inductionVariable <= last);
      type._v = new Reference(type._v.get_base_wojaxm_k$(), generics);
    }
    var tmp$ret$5;
    // Inline function 'kotlin.also' call
    var tmp2_also = new Type(type._v);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.analyzer.rhovas.RhovasAnalyzer.visit.<anonymous>' call
    tmp2_also.context_1 = ast.context_1;
    var tmp0_safe_receiver_0 = firstOrNull(tmp2_also.context_1);
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.get_inputs_wrcrs2_k$(this.context_1).removeLast_i5wx8a_k$();
      tmp$ret$4 = Unit_getInstance();
    }
    tmp$ret$5 = tmp2_also;
    return tmp$ret$5;
  };
  RhovasAnalyzer.$metadata$ = classMeta('RhovasAnalyzer', [Visitor_0], undefined, undefined, undefined, Analyzer.prototype);
  function Struct(type, fields) {
    Component_0.call(this);
    this.type_1 = type;
    this.fields_1 = fields;
  }
  Struct.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Struct.prototype.get_fields_dbuqbm_k$ = function () {
    return this.fields_1;
  };
  Struct.prototype.component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  Struct.prototype.component2_7eebsb_k$ = function () {
    return this.fields_1;
  };
  Struct.prototype.copy_ebm2l9_k$ = function (type, fields) {
    return new Struct(type, fields);
  };
  Struct.prototype.copy$default_yghtx0_k$ = function (type, fields, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.type_1;
    if (!(($mask0 & 2) === 0))
      fields = this.fields_1;
    return this.copy_ebm2l9_k$(type, fields);
  };
  Struct.prototype.toString = function () {
    return 'Struct(type=' + this.type_1 + ', fields=' + this.fields_1 + ')';
  };
  Struct.prototype.hashCode = function () {
    var result = hashCode(this.type_1);
    result = imul(result, 31) + hashCode(this.fields_1) | 0;
    return result;
  };
  Struct.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Struct))
      return false;
    var tmp0_other_with_cast = other instanceof Struct ? other : THROW_CCE();
    if (!equals(this.type_1, tmp0_other_with_cast.type_1))
      return false;
    if (!equals(this.fields_1, tmp0_other_with_cast.fields_1))
      return false;
    return true;
  };
  Struct.$metadata$ = classMeta('Struct', undefined, undefined, undefined, undefined, Component_0.prototype);
  function Variable(variable, value) {
    Assignment.call(this);
    this.variable_1 = variable;
    this.value_1 = value;
  }
  Variable.prototype.get_variable_ik7c5h_k$ = function () {
    return this.variable_1;
  };
  Variable.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Variable.prototype.component1_7eebsc_k$ = function () {
    return this.variable_1;
  };
  Variable.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  Variable.prototype.copy_qaturz_k$ = function (variable, value) {
    return new Variable(variable, value);
  };
  Variable.prototype.copy$default_w1fsq0_k$ = function (variable, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      variable = this.variable_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    return this.copy_qaturz_k$(variable, value);
  };
  Variable.prototype.toString = function () {
    return 'Variable(variable=' + this.variable_1 + ', value=' + this.value_1 + ')';
  };
  Variable.prototype.hashCode = function () {
    var result = hashCode(this.variable_1);
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    return result;
  };
  Variable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Variable))
      return false;
    var tmp0_other_with_cast = other instanceof Variable ? other : THROW_CCE();
    if (!equals(this.variable_1, tmp0_other_with_cast.variable_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Variable.$metadata$ = classMeta('Variable', undefined, undefined, undefined, undefined, Assignment.prototype);
  function Property(receiver, property, value) {
    Assignment.call(this);
    this.receiver_1 = receiver;
    this.property_1 = property;
    this.value_1 = value;
  }
  Property.prototype.get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  Property.prototype.get_property_msvula_k$ = function () {
    return this.property_1;
  };
  Property.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Property.prototype.component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  Property.prototype.component2_7eebsb_k$ = function () {
    return this.property_1;
  };
  Property.prototype.component3_7eebsa_k$ = function () {
    return this.value_1;
  };
  Property.prototype.copy_y86j8_k$ = function (receiver, property, value) {
    return new Property(receiver, property, value);
  };
  Property.prototype.copy$default_mloyim_k$ = function (receiver, property, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      receiver = this.receiver_1;
    if (!(($mask0 & 2) === 0))
      property = this.property_1;
    if (!(($mask0 & 4) === 0))
      value = this.value_1;
    return this.copy_y86j8_k$(receiver, property, value);
  };
  Property.prototype.toString = function () {
    return 'Property(receiver=' + this.receiver_1 + ', property=' + this.property_1 + ', value=' + this.value_1 + ')';
  };
  Property.prototype.hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + hashCode(this.property_1) | 0;
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    return result;
  };
  Property.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Property))
      return false;
    var tmp0_other_with_cast = other instanceof Property ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!equals(this.property_1, tmp0_other_with_cast.property_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Property.$metadata$ = classMeta('Property', undefined, undefined, undefined, undefined, Assignment.prototype);
  function Index(receiver, method, arguments_0, value) {
    Assignment.call(this);
    this.receiver_1 = receiver;
    this.method_1 = method;
    this.arguments_1 = arguments_0;
    this.value_1 = value;
  }
  Index.prototype.get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  Index.prototype.get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  Index.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  Index.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Index.prototype.component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  Index.prototype.component2_7eebsb_k$ = function () {
    return this.method_1;
  };
  Index.prototype.component3_7eebsa_k$ = function () {
    return this.arguments_1;
  };
  Index.prototype.component4_7eebs9_k$ = function () {
    return this.value_1;
  };
  Index.prototype.copy_9zankw_k$ = function (receiver, method, arguments_0, value) {
    return new Index(receiver, method, arguments_0, value);
  };
  Index.prototype.copy$default_dtyetz_k$ = function (receiver, method, arguments_0, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      receiver = this.receiver_1;
    if (!(($mask0 & 2) === 0))
      method = this.method_1;
    if (!(($mask0 & 4) === 0))
      arguments_0 = this.arguments_1;
    if (!(($mask0 & 8) === 0))
      value = this.value_1;
    return this.copy_9zankw_k$(receiver, method, arguments_0, value);
  };
  Index.prototype.toString = function () {
    return 'Index(receiver=' + this.receiver_1 + ', method=' + this.method_1 + ', arguments=' + this.arguments_1 + ', value=' + this.value_1 + ')';
  };
  Index.prototype.hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + hashCode(this.method_1) | 0;
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    return result;
  };
  Index.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Index))
      return false;
    var tmp0_other_with_cast = other instanceof Index ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!equals(this.method_1, tmp0_other_with_cast.method_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Index.$metadata$ = classMeta('Index', undefined, undefined, undefined, undefined, Assignment.prototype);
  function Conditional(cases, elseCase) {
    Match.call(this);
    this.cases_1 = cases;
    this.elseCase_1 = elseCase;
  }
  Conditional.prototype.get_cases_iplfyy_k$ = function () {
    return this.cases_1;
  };
  Conditional.prototype.get_elseCase_pga3ou_k$ = function () {
    return this.elseCase_1;
  };
  Conditional.prototype.component1_7eebsc_k$ = function () {
    return this.cases_1;
  };
  Conditional.prototype.component2_7eebsb_k$ = function () {
    return this.elseCase_1;
  };
  Conditional.prototype.copy_vjtza1_k$ = function (cases, elseCase) {
    return new Conditional(cases, elseCase);
  };
  Conditional.prototype.copy$default_xla5pz_k$ = function (cases, elseCase, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cases = this.cases_1;
    if (!(($mask0 & 2) === 0))
      elseCase = this.elseCase_1;
    return this.copy_vjtza1_k$(cases, elseCase);
  };
  Conditional.prototype.toString = function () {
    return 'Conditional(cases=' + this.cases_1 + ', elseCase=' + this.elseCase_1 + ')';
  };
  Conditional.prototype.hashCode = function () {
    var result = hashCode(this.cases_1);
    result = imul(result, 31) + (this.elseCase_1 == null ? 0 : this.elseCase_1.hashCode()) | 0;
    return result;
  };
  Conditional.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Conditional))
      return false;
    var tmp0_other_with_cast = other instanceof Conditional ? other : THROW_CCE();
    if (!equals(this.cases_1, tmp0_other_with_cast.cases_1))
      return false;
    if (!equals(this.elseCase_1, tmp0_other_with_cast.elseCase_1))
      return false;
    return true;
  };
  Conditional.$metadata$ = classMeta('Conditional', undefined, undefined, undefined, undefined, Match.prototype);
  function Structural(argument, cases, elseCase) {
    Match.call(this);
    this.argument_1 = argument;
    this.cases_1 = cases;
    this.elseCase_1 = elseCase;
  }
  Structural.prototype.get_argument_cxpwg6_k$ = function () {
    return this.argument_1;
  };
  Structural.prototype.get_cases_iplfyy_k$ = function () {
    return this.cases_1;
  };
  Structural.prototype.get_elseCase_pga3ou_k$ = function () {
    return this.elseCase_1;
  };
  Structural.prototype.component1_7eebsc_k$ = function () {
    return this.argument_1;
  };
  Structural.prototype.component2_7eebsb_k$ = function () {
    return this.cases_1;
  };
  Structural.prototype.component3_7eebsa_k$ = function () {
    return this.elseCase_1;
  };
  Structural.prototype.copy_woyghb_k$ = function (argument, cases, elseCase) {
    return new Structural(argument, cases, elseCase);
  };
  Structural.prototype.copy$default_b86xcs_k$ = function (argument, cases, elseCase, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      argument = this.argument_1;
    if (!(($mask0 & 2) === 0))
      cases = this.cases_1;
    if (!(($mask0 & 4) === 0))
      elseCase = this.elseCase_1;
    return this.copy_woyghb_k$(argument, cases, elseCase);
  };
  Structural.prototype.toString = function () {
    return 'Structural(argument=' + this.argument_1 + ', cases=' + this.cases_1 + ', elseCase=' + this.elseCase_1 + ')';
  };
  Structural.prototype.hashCode = function () {
    var result = hashCode(this.argument_1);
    result = imul(result, 31) + hashCode(this.cases_1) | 0;
    result = imul(result, 31) + (this.elseCase_1 == null ? 0 : this.elseCase_1.hashCode()) | 0;
    return result;
  };
  Structural.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Structural))
      return false;
    var tmp0_other_with_cast = other instanceof Structural ? other : THROW_CCE();
    if (!equals(this.argument_1, tmp0_other_with_cast.argument_1))
      return false;
    if (!equals(this.cases_1, tmp0_other_with_cast.cases_1))
      return false;
    if (!equals(this.elseCase_1, tmp0_other_with_cast.elseCase_1))
      return false;
    return true;
  };
  Structural.$metadata$ = classMeta('Structural', undefined, undefined, undefined, undefined, Match.prototype);
  function Catch(variable, body) {
    RhovasIr.call(this);
    this.variable_1 = variable;
    this.body_1 = body;
  }
  Catch.prototype.get_variable_ik7c5h_k$ = function () {
    return this.variable_1;
  };
  Catch.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  Catch.prototype.component1_7eebsc_k$ = function () {
    return this.variable_1;
  };
  Catch.prototype.component2_7eebsb_k$ = function () {
    return this.body_1;
  };
  Catch.prototype.copy_1zi8j2_k$ = function (variable, body) {
    return new Catch(variable, body);
  };
  Catch.prototype.copy$default_b9whot_k$ = function (variable, body, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      variable = this.variable_1;
    if (!(($mask0 & 2) === 0))
      body = this.body_1;
    return this.copy_1zi8j2_k$(variable, body);
  };
  Catch.prototype.toString = function () {
    return 'Catch(variable=' + this.variable_1 + ', body=' + this.body_1 + ')';
  };
  Catch.prototype.hashCode = function () {
    var result = this.variable_1.hashCode();
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  Catch.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Catch))
      return false;
    var tmp0_other_with_cast = other instanceof Catch ? other : THROW_CCE();
    if (!this.variable_1.equals(tmp0_other_with_cast.variable_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  Catch.$metadata$ = classMeta('Catch', undefined, undefined, undefined, undefined, RhovasIr.prototype);
  function Block(statements) {
    Statement.call(this);
    this.statements_1 = statements;
  }
  Block.prototype.get_statements_nqb5hv_k$ = function () {
    return this.statements_1;
  };
  Block.prototype.component1_7eebsc_k$ = function () {
    return this.statements_1;
  };
  Block.prototype.copy_vja13y_k$ = function (statements) {
    return new Block(statements);
  };
  Block.prototype.copy$default_l51h3q_k$ = function (statements, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      statements = this.statements_1;
    return this.copy_vja13y_k$(statements);
  };
  Block.prototype.toString = function () {
    return 'Block(statements=' + this.statements_1 + ')';
  };
  Block.prototype.hashCode = function () {
    return hashCode(this.statements_1);
  };
  Block.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Block))
      return false;
    var tmp0_other_with_cast = other instanceof Block ? other : THROW_CCE();
    if (!equals(this.statements_1, tmp0_other_with_cast.statements_1))
      return false;
    return true;
  };
  Block.$metadata$ = classMeta('Block', undefined, undefined, undefined, undefined, Statement.prototype);
  function Component(component) {
    Statement.call(this);
    this.component_1 = component;
  }
  Component.prototype.get_component_emy20c_k$ = function () {
    return this.component_1;
  };
  Component.prototype.component1_7eebsc_k$ = function () {
    return this.component_1;
  };
  Component.prototype.copy_1xwoy2_k$ = function (component) {
    return new Component(component);
  };
  Component.prototype.copy$default_hyt8tg_k$ = function (component, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      component = this.component_1;
    return this.copy_1xwoy2_k$(component);
  };
  Component.prototype.toString = function () {
    return 'Component(component=' + this.component_1 + ')';
  };
  Component.prototype.hashCode = function () {
    return hashCode(this.component_1);
  };
  Component.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Component))
      return false;
    var tmp0_other_with_cast = other instanceof Component ? other : THROW_CCE();
    if (!equals(this.component_1, tmp0_other_with_cast.component_1))
      return false;
    return true;
  };
  Component.$metadata$ = classMeta('Component', undefined, undefined, undefined, undefined, Statement.prototype);
  function Expression(expression) {
    Statement.call(this);
    this.expression_1 = expression;
  }
  Expression.prototype.get_expression_l5w7j5_k$ = function () {
    return this.expression_1;
  };
  Expression.prototype.component1_7eebsc_k$ = function () {
    return this.expression_1;
  };
  Expression.prototype.copy_x3dqov_k$ = function (expression) {
    return new Expression(expression);
  };
  Expression.prototype.copy$default_n2421t_k$ = function (expression, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      expression = this.expression_1;
    return this.copy_x3dqov_k$(expression);
  };
  Expression.prototype.toString = function () {
    return 'Expression(expression=' + this.expression_1 + ')';
  };
  Expression.prototype.hashCode = function () {
    return hashCode(this.expression_1);
  };
  Expression.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Expression))
      return false;
    var tmp0_other_with_cast = other instanceof Expression ? other : THROW_CCE();
    if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
      return false;
    return true;
  };
  Expression.$metadata$ = classMeta('Expression', undefined, undefined, undefined, undefined, Statement.prototype);
  function Function(function_0, body) {
    Statement.call(this);
    this.function_1 = function_0;
    this.body_1 = body;
  }
  Function.prototype.get_function_8yrfj3_k$ = function () {
    return this.function_1;
  };
  Function.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  Function.prototype.component1_7eebsc_k$ = function () {
    return this.function_1;
  };
  Function.prototype.component2_7eebsb_k$ = function () {
    return this.body_1;
  };
  Function.prototype.copy_em3n0o_k$ = function (function_0, body) {
    return new Function(function_0, body);
  };
  Function.prototype.copy$default_wex5oh_k$ = function (function_0, body, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      function_0 = this.function_1;
    if (!(($mask0 & 2) === 0))
      body = this.body_1;
    return this.copy_em3n0o_k$(function_0, body);
  };
  Function.prototype.toString = function () {
    return 'Function(function=' + this.function_1 + ', body=' + this.body_1 + ')';
  };
  Function.prototype.hashCode = function () {
    var result = hashCode(this.function_1);
    result = imul(result, 31) + this.body_1.hashCode() | 0;
    return result;
  };
  Function.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Function))
      return false;
    var tmp0_other_with_cast = other instanceof Function ? other : THROW_CCE();
    if (!equals(this.function_1, tmp0_other_with_cast.function_1))
      return false;
    if (!this.body_1.equals(tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  Function.$metadata$ = classMeta('Function', undefined, undefined, undefined, undefined, Statement.prototype);
  function Declaration(variable, value) {
    Statement.call(this);
    this.variable_1 = variable;
    this.value_1 = value;
  }
  Declaration.prototype.get_variable_ik7c5h_k$ = function () {
    return this.variable_1;
  };
  Declaration.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Declaration.prototype.component1_7eebsc_k$ = function () {
    return this.variable_1;
  };
  Declaration.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  Declaration.prototype.copy_xzgwb6_k$ = function (variable, value) {
    return new Declaration(variable, value);
  };
  Declaration.prototype.copy$default_w1fsq0_k$ = function (variable, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      variable = this.variable_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    return this.copy_xzgwb6_k$(variable, value);
  };
  Declaration.prototype.toString = function () {
    return 'Declaration(variable=' + this.variable_1 + ', value=' + this.value_1 + ')';
  };
  Declaration.prototype.hashCode = function () {
    var result = hashCode(this.variable_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
    return result;
  };
  Declaration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Declaration))
      return false;
    var tmp0_other_with_cast = other instanceof Declaration ? other : THROW_CCE();
    if (!equals(this.variable_1, tmp0_other_with_cast.variable_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Declaration.$metadata$ = classMeta('Declaration', undefined, undefined, undefined, undefined, Statement.prototype);
  function Assignment() {
    Statement.call(this);
  }
  Assignment.$metadata$ = classMeta('Assignment', undefined, undefined, undefined, undefined, Statement.prototype);
  function If(condition, thenStatement, elseStatement) {
    Statement.call(this);
    this.condition_1 = condition;
    this.thenStatement_1 = thenStatement;
    this.elseStatement_1 = elseStatement;
  }
  If.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  If.prototype.get_thenStatement_8ukk7r_k$ = function () {
    return this.thenStatement_1;
  };
  If.prototype.get_elseStatement_u7gv77_k$ = function () {
    return this.elseStatement_1;
  };
  If.prototype.component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  If.prototype.component2_7eebsb_k$ = function () {
    return this.thenStatement_1;
  };
  If.prototype.component3_7eebsa_k$ = function () {
    return this.elseStatement_1;
  };
  If.prototype.copy_jiab0g_k$ = function (condition, thenStatement, elseStatement) {
    return new If(condition, thenStatement, elseStatement);
  };
  If.prototype.copy$default_t8pb3v_k$ = function (condition, thenStatement, elseStatement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      condition = this.condition_1;
    if (!(($mask0 & 2) === 0))
      thenStatement = this.thenStatement_1;
    if (!(($mask0 & 4) === 0))
      elseStatement = this.elseStatement_1;
    return this.copy_jiab0g_k$(condition, thenStatement, elseStatement);
  };
  If.prototype.toString = function () {
    return 'If(condition=' + this.condition_1 + ', thenStatement=' + this.thenStatement_1 + ', elseStatement=' + this.elseStatement_1 + ')';
  };
  If.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + hashCode(this.thenStatement_1) | 0;
    result = imul(result, 31) + (this.elseStatement_1 == null ? 0 : hashCode(this.elseStatement_1)) | 0;
    return result;
  };
  If.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof If))
      return false;
    var tmp0_other_with_cast = other instanceof If ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.thenStatement_1, tmp0_other_with_cast.thenStatement_1))
      return false;
    if (!equals(this.elseStatement_1, tmp0_other_with_cast.elseStatement_1))
      return false;
    return true;
  };
  If.$metadata$ = classMeta('If', undefined, undefined, undefined, undefined, Statement.prototype);
  function Match() {
    Statement.call(this);
  }
  Match.$metadata$ = classMeta('Match', undefined, undefined, undefined, undefined, Statement.prototype);
  function For(variable, argument, body) {
    Statement.call(this);
    this.variable_1 = variable;
    this.argument_1 = argument;
    this.body_1 = body;
  }
  For.prototype.get_variable_ik7c5h_k$ = function () {
    return this.variable_1;
  };
  For.prototype.get_argument_cxpwg6_k$ = function () {
    return this.argument_1;
  };
  For.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  For.prototype.component1_7eebsc_k$ = function () {
    return this.variable_1;
  };
  For.prototype.component2_7eebsb_k$ = function () {
    return this.argument_1;
  };
  For.prototype.component3_7eebsa_k$ = function () {
    return this.body_1;
  };
  For.prototype.copy_ab3l0c_k$ = function (variable, argument, body) {
    return new For(variable, argument, body);
  };
  For.prototype.copy$default_e9610o_k$ = function (variable, argument, body, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      variable = this.variable_1;
    if (!(($mask0 & 2) === 0))
      argument = this.argument_1;
    if (!(($mask0 & 4) === 0))
      body = this.body_1;
    return this.copy_ab3l0c_k$(variable, argument, body);
  };
  For.prototype.toString = function () {
    return 'For(variable=' + this.variable_1 + ', argument=' + this.argument_1 + ', body=' + this.body_1 + ')';
  };
  For.prototype.hashCode = function () {
    var result = this.variable_1.hashCode();
    result = imul(result, 31) + hashCode(this.argument_1) | 0;
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  For.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof For))
      return false;
    var tmp0_other_with_cast = other instanceof For ? other : THROW_CCE();
    if (!this.variable_1.equals(tmp0_other_with_cast.variable_1))
      return false;
    if (!equals(this.argument_1, tmp0_other_with_cast.argument_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  For.$metadata$ = classMeta('For', undefined, undefined, undefined, undefined, Statement.prototype);
  function While(condition, body) {
    Statement.call(this);
    this.condition_1 = condition;
    this.body_1 = body;
  }
  While.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  While.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  While.prototype.component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  While.prototype.component2_7eebsb_k$ = function () {
    return this.body_1;
  };
  While.prototype.copy_kef7z6_k$ = function (condition, body) {
    return new While(condition, body);
  };
  While.prototype.copy$default_r74f4z_k$ = function (condition, body, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      condition = this.condition_1;
    if (!(($mask0 & 2) === 0))
      body = this.body_1;
    return this.copy_kef7z6_k$(condition, body);
  };
  While.prototype.toString = function () {
    return 'While(condition=' + this.condition_1 + ', body=' + this.body_1 + ')';
  };
  While.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  While.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof While))
      return false;
    var tmp0_other_with_cast = other instanceof While ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  While.$metadata$ = classMeta('While', undefined, undefined, undefined, undefined, Statement.prototype);
  function Try(body, catches, finallyStatement) {
    Statement.call(this);
    this.body_1 = body;
    this.catches_1 = catches;
    this.finallyStatement_1 = finallyStatement;
  }
  Try.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  Try.prototype.get_catches_agft1c_k$ = function () {
    return this.catches_1;
  };
  Try.prototype.get_finallyStatement_8c54l_k$ = function () {
    return this.finallyStatement_1;
  };
  Try.prototype.component1_7eebsc_k$ = function () {
    return this.body_1;
  };
  Try.prototype.component2_7eebsb_k$ = function () {
    return this.catches_1;
  };
  Try.prototype.component3_7eebsa_k$ = function () {
    return this.finallyStatement_1;
  };
  Try.prototype.copy_ujblyf_k$ = function (body, catches, finallyStatement) {
    return new Try(body, catches, finallyStatement);
  };
  Try.prototype.copy$default_jblhcu_k$ = function (body, catches, finallyStatement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      body = this.body_1;
    if (!(($mask0 & 2) === 0))
      catches = this.catches_1;
    if (!(($mask0 & 4) === 0))
      finallyStatement = this.finallyStatement_1;
    return this.copy_ujblyf_k$(body, catches, finallyStatement);
  };
  Try.prototype.toString = function () {
    return 'Try(body=' + this.body_1 + ', catches=' + this.catches_1 + ', finallyStatement=' + this.finallyStatement_1 + ')';
  };
  Try.prototype.hashCode = function () {
    var result = hashCode(this.body_1);
    result = imul(result, 31) + hashCode(this.catches_1) | 0;
    result = imul(result, 31) + (this.finallyStatement_1 == null ? 0 : hashCode(this.finallyStatement_1)) | 0;
    return result;
  };
  Try.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Try))
      return false;
    var tmp0_other_with_cast = other instanceof Try ? other : THROW_CCE();
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    if (!equals(this.catches_1, tmp0_other_with_cast.catches_1))
      return false;
    if (!equals(this.finallyStatement_1, tmp0_other_with_cast.finallyStatement_1))
      return false;
    return true;
  };
  Try.$metadata$ = classMeta('Try', undefined, undefined, undefined, undefined, Statement.prototype);
  function With(variable, argument, body) {
    Statement.call(this);
    this.variable_1 = variable;
    this.argument_1 = argument;
    this.body_1 = body;
  }
  With.prototype.get_variable_ik7c5h_k$ = function () {
    return this.variable_1;
  };
  With.prototype.get_argument_cxpwg6_k$ = function () {
    return this.argument_1;
  };
  With.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  With.prototype.component1_7eebsc_k$ = function () {
    return this.variable_1;
  };
  With.prototype.component2_7eebsb_k$ = function () {
    return this.argument_1;
  };
  With.prototype.component3_7eebsa_k$ = function () {
    return this.body_1;
  };
  With.prototype.copy_roa6pv_k$ = function (variable, argument, body) {
    return new With(variable, argument, body);
  };
  With.prototype.copy$default_e9610o_k$ = function (variable, argument, body, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      variable = this.variable_1;
    if (!(($mask0 & 2) === 0))
      argument = this.argument_1;
    if (!(($mask0 & 4) === 0))
      body = this.body_1;
    return this.copy_roa6pv_k$(variable, argument, body);
  };
  With.prototype.toString = function () {
    return 'With(variable=' + this.variable_1 + ', argument=' + this.argument_1 + ', body=' + this.body_1 + ')';
  };
  With.prototype.hashCode = function () {
    var result = this.variable_1 == null ? 0 : this.variable_1.hashCode();
    result = imul(result, 31) + hashCode(this.argument_1) | 0;
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  With.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof With))
      return false;
    var tmp0_other_with_cast = other instanceof With ? other : THROW_CCE();
    if (!equals(this.variable_1, tmp0_other_with_cast.variable_1))
      return false;
    if (!equals(this.argument_1, tmp0_other_with_cast.argument_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  With.$metadata$ = classMeta('With', undefined, undefined, undefined, undefined, Statement.prototype);
  function Label(label, statement) {
    Statement.call(this);
    this.label_1 = label;
    this.statement_1 = statement;
  }
  Label.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  Label.prototype.get_statement_pyx5iy_k$ = function () {
    return this.statement_1;
  };
  Label.prototype.component1_7eebsc_k$ = function () {
    return this.label_1;
  };
  Label.prototype.component2_7eebsb_k$ = function () {
    return this.statement_1;
  };
  Label.prototype.copy_q5gbnb_k$ = function (label, statement) {
    return new Label(label, statement);
  };
  Label.prototype.copy$default_qvvx1u_k$ = function (label, statement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      label = this.label_1;
    if (!(($mask0 & 2) === 0))
      statement = this.statement_1;
    return this.copy_q5gbnb_k$(label, statement);
  };
  Label.prototype.toString = function () {
    return 'Label(label=' + this.label_1 + ', statement=' + this.statement_1 + ')';
  };
  Label.prototype.hashCode = function () {
    var result = getStringHashCode(this.label_1);
    result = imul(result, 31) + hashCode(this.statement_1) | 0;
    return result;
  };
  Label.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Label))
      return false;
    var tmp0_other_with_cast = other instanceof Label ? other : THROW_CCE();
    if (!(this.label_1 === tmp0_other_with_cast.label_1))
      return false;
    if (!equals(this.statement_1, tmp0_other_with_cast.statement_1))
      return false;
    return true;
  };
  Label.$metadata$ = classMeta('Label', undefined, undefined, undefined, undefined, Statement.prototype);
  function Break(label) {
    Statement.call(this);
    this.label_1 = label;
  }
  Break.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  Break.prototype.component1_7eebsc_k$ = function () {
    return this.label_1;
  };
  Break.prototype.copy_o1ci45_k$ = function (label) {
    return new Break(label);
  };
  Break.prototype.copy$default_q3pzg4_k$ = function (label, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      label = this.label_1;
    return this.copy_o1ci45_k$(label);
  };
  Break.prototype.toString = function () {
    return 'Break(label=' + this.label_1 + ')';
  };
  Break.prototype.hashCode = function () {
    return this.label_1 == null ? 0 : getStringHashCode(this.label_1);
  };
  Break.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Break))
      return false;
    var tmp0_other_with_cast = other instanceof Break ? other : THROW_CCE();
    if (!(this.label_1 == tmp0_other_with_cast.label_1))
      return false;
    return true;
  };
  Break.$metadata$ = classMeta('Break', undefined, undefined, undefined, undefined, Statement.prototype);
  function Continue(label) {
    Statement.call(this);
    this.label_1 = label;
  }
  Continue.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  Continue.prototype.component1_7eebsc_k$ = function () {
    return this.label_1;
  };
  Continue.prototype.copy_o1ci45_k$ = function (label) {
    return new Continue(label);
  };
  Continue.prototype.copy$default_q3pzg4_k$ = function (label, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      label = this.label_1;
    return this.copy_o1ci45_k$(label);
  };
  Continue.prototype.toString = function () {
    return 'Continue(label=' + this.label_1 + ')';
  };
  Continue.prototype.hashCode = function () {
    return this.label_1 == null ? 0 : getStringHashCode(this.label_1);
  };
  Continue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Continue))
      return false;
    var tmp0_other_with_cast = other instanceof Continue ? other : THROW_CCE();
    if (!(this.label_1 == tmp0_other_with_cast.label_1))
      return false;
    return true;
  };
  Continue.$metadata$ = classMeta('Continue', undefined, undefined, undefined, undefined, Statement.prototype);
  function Return(value) {
    Statement.call(this);
    this.value_1 = value;
  }
  Return.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Return.prototype.component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  Return.prototype.copy_59q74_k$ = function (value) {
    return new Return(value);
  };
  Return.prototype.copy$default_don875_k$ = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    return this.copy_59q74_k$(value);
  };
  Return.prototype.toString = function () {
    return 'Return(value=' + this.value_1 + ')';
  };
  Return.prototype.hashCode = function () {
    return this.value_1 == null ? 0 : hashCode(this.value_1);
  };
  Return.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Return))
      return false;
    var tmp0_other_with_cast = other instanceof Return ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Return.$metadata$ = classMeta('Return', undefined, undefined, undefined, undefined, Statement.prototype);
  function Throw(exception) {
    Statement.call(this);
    this.exception_1 = exception;
  }
  Throw.prototype.get_exception_x0n6w6_k$ = function () {
    return this.exception_1;
  };
  Throw.prototype.component1_7eebsc_k$ = function () {
    return this.exception_1;
  };
  Throw.prototype.copy_bglvcx_k$ = function (exception) {
    return new Throw(exception);
  };
  Throw.prototype.copy$default_don875_k$ = function (exception, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exception = this.exception_1;
    return this.copy_bglvcx_k$(exception);
  };
  Throw.prototype.toString = function () {
    return 'Throw(exception=' + this.exception_1 + ')';
  };
  Throw.prototype.hashCode = function () {
    return hashCode(this.exception_1);
  };
  Throw.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Throw))
      return false;
    var tmp0_other_with_cast = other instanceof Throw ? other : THROW_CCE();
    if (!equals(this.exception_1, tmp0_other_with_cast.exception_1))
      return false;
    return true;
  };
  Throw.$metadata$ = classMeta('Throw', undefined, undefined, undefined, undefined, Statement.prototype);
  function Assert(condition, message) {
    Statement.call(this);
    this.condition_1 = condition;
    this.message_1 = message;
  }
  Assert.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  Assert.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Assert.prototype.component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  Assert.prototype.component2_7eebsb_k$ = function () {
    return this.message_1;
  };
  Assert.prototype.copy_td5ley_k$ = function (condition, message) {
    return new Assert(condition, message);
  };
  Assert.prototype.copy$default_i2w9ww_k$ = function (condition, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      condition = this.condition_1;
    if (!(($mask0 & 2) === 0))
      message = this.message_1;
    return this.copy_td5ley_k$(condition, message);
  };
  Assert.prototype.toString = function () {
    return 'Assert(condition=' + this.condition_1 + ', message=' + this.message_1 + ')';
  };
  Assert.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + (this.message_1 == null ? 0 : hashCode(this.message_1)) | 0;
    return result;
  };
  Assert.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Assert))
      return false;
    var tmp0_other_with_cast = other instanceof Assert ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.message_1, tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  Assert.$metadata$ = classMeta('Assert', undefined, undefined, undefined, undefined, Statement.prototype);
  function Require(condition, message) {
    Statement.call(this);
    this.condition_1 = condition;
    this.message_1 = message;
  }
  Require.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  Require.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Require.prototype.component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  Require.prototype.component2_7eebsb_k$ = function () {
    return this.message_1;
  };
  Require.prototype.copy_td5ley_k$ = function (condition, message) {
    return new Require(condition, message);
  };
  Require.prototype.copy$default_i2w9ww_k$ = function (condition, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      condition = this.condition_1;
    if (!(($mask0 & 2) === 0))
      message = this.message_1;
    return this.copy_td5ley_k$(condition, message);
  };
  Require.prototype.toString = function () {
    return 'Require(condition=' + this.condition_1 + ', message=' + this.message_1 + ')';
  };
  Require.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + (this.message_1 == null ? 0 : hashCode(this.message_1)) | 0;
    return result;
  };
  Require.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Require))
      return false;
    var tmp0_other_with_cast = other instanceof Require ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.message_1, tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  Require.$metadata$ = classMeta('Require', undefined, undefined, undefined, undefined, Statement.prototype);
  function Ensure(condition, message) {
    Statement.call(this);
    this.condition_1 = condition;
    this.message_1 = message;
  }
  Ensure.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  Ensure.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Ensure.prototype.component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  Ensure.prototype.component2_7eebsb_k$ = function () {
    return this.message_1;
  };
  Ensure.prototype.copy_td5ley_k$ = function (condition, message) {
    return new Ensure(condition, message);
  };
  Ensure.prototype.copy$default_i2w9ww_k$ = function (condition, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      condition = this.condition_1;
    if (!(($mask0 & 2) === 0))
      message = this.message_1;
    return this.copy_td5ley_k$(condition, message);
  };
  Ensure.prototype.toString = function () {
    return 'Ensure(condition=' + this.condition_1 + ', message=' + this.message_1 + ')';
  };
  Ensure.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + (this.message_1 == null ? 0 : hashCode(this.message_1)) | 0;
    return result;
  };
  Ensure.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ensure))
      return false;
    var tmp0_other_with_cast = other instanceof Ensure ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.message_1, tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  Ensure.$metadata$ = classMeta('Ensure', undefined, undefined, undefined, undefined, Statement.prototype);
  function Scalar(value, type) {
    Literal.call(this, type);
    this.value_1 = value;
    this.type_3 = type;
  }
  Scalar.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Scalar.prototype.get_type_wovaf7_k$ = function () {
    return this.type_3;
  };
  Scalar.prototype.component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  Scalar.prototype.component2_7eebsb_k$ = function () {
    return this.type_3;
  };
  Scalar.prototype.copy_x37gwq_k$ = function (value, type) {
    return new Scalar(value, type);
  };
  Scalar.prototype.copy$default_magd0a_k$ = function (value, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    if (!(($mask0 & 2) === 0))
      type = this.type_3;
    return this.copy_x37gwq_k$(value, type);
  };
  Scalar.prototype.toString = function () {
    return 'Scalar(value=' + toString_0(this.value_1) + ', type=' + this.type_3 + ')';
  };
  Scalar.prototype.hashCode = function () {
    var result = this.value_1 == null ? 0 : hashCode(this.value_1);
    result = imul(result, 31) + hashCode(this.type_3) | 0;
    return result;
  };
  Scalar.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scalar))
      return false;
    var tmp0_other_with_cast = other instanceof Scalar ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.type_3, tmp0_other_with_cast.type_3))
      return false;
    return true;
  };
  Scalar.$metadata$ = classMeta('Scalar', undefined, undefined, undefined, undefined, Literal.prototype);
  function String_0(literals, arguments_0, type) {
    Literal.call(this, type);
    this.literals_1 = literals;
    this.arguments_1 = arguments_0;
    this.type_3 = type;
  }
  String_0.prototype.get_literals_9ag49f_k$ = function () {
    return this.literals_1;
  };
  String_0.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  String_0.prototype.get_type_wovaf7_k$ = function () {
    return this.type_3;
  };
  String_0.prototype.component1_7eebsc_k$ = function () {
    return this.literals_1;
  };
  String_0.prototype.component2_7eebsb_k$ = function () {
    return this.arguments_1;
  };
  String_0.prototype.component3_7eebsa_k$ = function () {
    return this.type_3;
  };
  String_0.prototype.copy_yihhay_k$ = function (literals, arguments_0, type) {
    return new String_0(literals, arguments_0, type);
  };
  String_0.prototype.copy$default_2bqz7i_k$ = function (literals, arguments_0, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      literals = this.literals_1;
    if (!(($mask0 & 2) === 0))
      arguments_0 = this.arguments_1;
    if (!(($mask0 & 4) === 0))
      type = this.type_3;
    return this.copy_yihhay_k$(literals, arguments_0, type);
  };
  String_0.prototype.toString = function () {
    return 'String(literals=' + this.literals_1 + ', arguments=' + this.arguments_1 + ', type=' + this.type_3 + ')';
  };
  String_0.prototype.hashCode = function () {
    var result = hashCode(this.literals_1);
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    result = imul(result, 31) + hashCode(this.type_3) | 0;
    return result;
  };
  String_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof String_0))
      return false;
    var tmp0_other_with_cast = other instanceof String_0 ? other : THROW_CCE();
    if (!equals(this.literals_1, tmp0_other_with_cast.literals_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    if (!equals(this.type_3, tmp0_other_with_cast.type_3))
      return false;
    return true;
  };
  String_0.$metadata$ = classMeta('String', undefined, undefined, undefined, undefined, Literal.prototype);
  function List_0(elements, type) {
    Literal.call(this, type);
    this.elements_1 = elements;
    this.type_3 = type;
  }
  List_0.prototype.get_elements_vxwh8g_k$ = function () {
    return this.elements_1;
  };
  List_0.prototype.get_type_wovaf7_k$ = function () {
    return this.type_3;
  };
  List_0.prototype.component1_7eebsc_k$ = function () {
    return this.elements_1;
  };
  List_0.prototype.component2_7eebsb_k$ = function () {
    return this.type_3;
  };
  List_0.prototype.copy_b1cf21_k$ = function (elements, type) {
    return new List_0(elements, type);
  };
  List_0.prototype.copy$default_v1oee4_k$ = function (elements, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      elements = this.elements_1;
    if (!(($mask0 & 2) === 0))
      type = this.type_3;
    return this.copy_b1cf21_k$(elements, type);
  };
  List_0.prototype.toString = function () {
    return 'List(elements=' + this.elements_1 + ', type=' + this.type_3 + ')';
  };
  List_0.prototype.hashCode = function () {
    var result = hashCode(this.elements_1);
    result = imul(result, 31) + hashCode(this.type_3) | 0;
    return result;
  };
  List_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof List_0))
      return false;
    var tmp0_other_with_cast = other instanceof List_0 ? other : THROW_CCE();
    if (!equals(this.elements_1, tmp0_other_with_cast.elements_1))
      return false;
    if (!equals(this.type_3, tmp0_other_with_cast.type_3))
      return false;
    return true;
  };
  List_0.$metadata$ = classMeta('List', undefined, undefined, undefined, undefined, Literal.prototype);
  function Object_0(properties, type) {
    Literal.call(this, type);
    this.properties_1 = properties;
    this.type_3 = type;
  }
  Object_0.prototype.get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  Object_0.prototype.get_type_wovaf7_k$ = function () {
    return this.type_3;
  };
  Object_0.prototype.component1_7eebsc_k$ = function () {
    return this.properties_1;
  };
  Object_0.prototype.component2_7eebsb_k$ = function () {
    return this.type_3;
  };
  Object_0.prototype.copy_u7sl67_k$ = function (properties, type) {
    return new Object_0(properties, type);
  };
  Object_0.prototype.copy$default_k87oi2_k$ = function (properties, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      properties = this.properties_1;
    if (!(($mask0 & 2) === 0))
      type = this.type_3;
    return this.copy_u7sl67_k$(properties, type);
  };
  Object_0.prototype.toString = function () {
    return 'Object(properties=' + this.properties_1 + ', type=' + this.type_3 + ')';
  };
  Object_0.prototype.hashCode = function () {
    var result = hashCode(this.properties_1);
    result = imul(result, 31) + hashCode(this.type_3) | 0;
    return result;
  };
  Object_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Object_0))
      return false;
    var tmp0_other_with_cast = other instanceof Object_0 ? other : THROW_CCE();
    if (!equals(this.properties_1, tmp0_other_with_cast.properties_1))
      return false;
    if (!equals(this.type_3, tmp0_other_with_cast.type_3))
      return false;
    return true;
  };
  Object_0.$metadata$ = classMeta('Object', undefined, undefined, undefined, undefined, Literal.prototype);
  function Variable_0(qualifier, variable) {
    Access.call(this, variable.get_type_wovaf7_k$());
    this.qualifier_1 = qualifier;
    this.variable_1 = variable;
  }
  Variable_0.prototype.get_qualifier_c4gvsv_k$ = function () {
    return this.qualifier_1;
  };
  Variable_0.prototype.get_variable_ik7c5h_k$ = function () {
    return this.variable_1;
  };
  Variable_0.prototype.component1_7eebsc_k$ = function () {
    return this.qualifier_1;
  };
  Variable_0.prototype.component2_7eebsb_k$ = function () {
    return this.variable_1;
  };
  Variable_0.prototype.copy_to6zqo_k$ = function (qualifier, variable) {
    return new Variable_0(qualifier, variable);
  };
  Variable_0.prototype.copy$default_c2do0m_k$ = function (qualifier, variable, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      qualifier = this.qualifier_1;
    if (!(($mask0 & 2) === 0))
      variable = this.variable_1;
    return this.copy_to6zqo_k$(qualifier, variable);
  };
  Variable_0.prototype.toString = function () {
    return 'Variable(qualifier=' + this.qualifier_1 + ', variable=' + this.variable_1 + ')';
  };
  Variable_0.prototype.hashCode = function () {
    var result = this.qualifier_1 == null ? 0 : this.qualifier_1.hashCode();
    result = imul(result, 31) + hashCode(this.variable_1) | 0;
    return result;
  };
  Variable_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Variable_0))
      return false;
    var tmp0_other_with_cast = other instanceof Variable_0 ? other : THROW_CCE();
    if (!equals(this.qualifier_1, tmp0_other_with_cast.qualifier_1))
      return false;
    if (!equals(this.variable_1, tmp0_other_with_cast.variable_1))
      return false;
    return true;
  };
  Variable_0.$metadata$ = classMeta('Variable', undefined, undefined, undefined, undefined, Access.prototype);
  function Property_0(receiver, property, coalesce, type) {
    Access.call(this, type);
    this.receiver_1 = receiver;
    this.property_1 = property;
    this.coalesce_1 = coalesce;
    this.type_3 = type;
  }
  Property_0.prototype.get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  Property_0.prototype.get_property_msvula_k$ = function () {
    return this.property_1;
  };
  Property_0.prototype.get_coalesce_nkfaeo_k$ = function () {
    return this.coalesce_1;
  };
  Property_0.prototype.get_type_wovaf7_k$ = function () {
    return this.type_3;
  };
  Property_0.prototype.component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  Property_0.prototype.component2_7eebsb_k$ = function () {
    return this.property_1;
  };
  Property_0.prototype.component3_7eebsa_k$ = function () {
    return this.coalesce_1;
  };
  Property_0.prototype.component4_7eebs9_k$ = function () {
    return this.type_3;
  };
  Property_0.prototype.copy_q5s5wg_k$ = function (receiver, property, coalesce, type) {
    return new Property_0(receiver, property, coalesce, type);
  };
  Property_0.prototype.copy$default_42uw10_k$ = function (receiver, property, coalesce, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      receiver = this.receiver_1;
    if (!(($mask0 & 2) === 0))
      property = this.property_1;
    if (!(($mask0 & 4) === 0))
      coalesce = this.coalesce_1;
    if (!(($mask0 & 8) === 0))
      type = this.type_3;
    return this.copy_q5s5wg_k$(receiver, property, coalesce, type);
  };
  Property_0.prototype.toString = function () {
    return 'Property(receiver=' + this.receiver_1 + ', property=' + this.property_1 + ', coalesce=' + this.coalesce_1 + ', type=' + this.type_3 + ')';
  };
  Property_0.prototype.hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + hashCode(this.property_1) | 0;
    result = imul(result, 31) + (this.coalesce_1 | 0) | 0;
    result = imul(result, 31) + hashCode(this.type_3) | 0;
    return result;
  };
  Property_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Property_0))
      return false;
    var tmp0_other_with_cast = other instanceof Property_0 ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!equals(this.property_1, tmp0_other_with_cast.property_1))
      return false;
    if (!(this.coalesce_1 === tmp0_other_with_cast.coalesce_1))
      return false;
    if (!equals(this.type_3, tmp0_other_with_cast.type_3))
      return false;
    return true;
  };
  Property_0.$metadata$ = classMeta('Property', undefined, undefined, undefined, undefined, Access.prototype);
  function Index_0(receiver, method, arguments_0) {
    Access.call(this, method.get_returns_jfk3fe_k$());
    this.receiver_1 = receiver;
    this.method_1 = method;
    this.arguments_1 = arguments_0;
  }
  Index_0.prototype.get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  Index_0.prototype.get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  Index_0.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  Index_0.prototype.component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  Index_0.prototype.component2_7eebsb_k$ = function () {
    return this.method_1;
  };
  Index_0.prototype.component3_7eebsa_k$ = function () {
    return this.arguments_1;
  };
  Index_0.prototype.copy_4nn60a_k$ = function (receiver, method, arguments_0) {
    return new Index_0(receiver, method, arguments_0);
  };
  Index_0.prototype.copy$default_98njui_k$ = function (receiver, method, arguments_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      receiver = this.receiver_1;
    if (!(($mask0 & 2) === 0))
      method = this.method_1;
    if (!(($mask0 & 4) === 0))
      arguments_0 = this.arguments_1;
    return this.copy_4nn60a_k$(receiver, method, arguments_0);
  };
  Index_0.prototype.toString = function () {
    return 'Index(receiver=' + this.receiver_1 + ', method=' + this.method_1 + ', arguments=' + this.arguments_1 + ')';
  };
  Index_0.prototype.hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + hashCode(this.method_1) | 0;
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    return result;
  };
  Index_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Index_0))
      return false;
    var tmp0_other_with_cast = other instanceof Index_0 ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!equals(this.method_1, tmp0_other_with_cast.method_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    return true;
  };
  Index_0.$metadata$ = classMeta('Index', undefined, undefined, undefined, undefined, Access.prototype);
  function Function_0(qualifier, function_0, arguments_0) {
    Invoke.call(this, function_0.get_returns_jfk3fe_k$());
    this.qualifier_1 = qualifier;
    this.function_1 = function_0;
    this.arguments_1 = arguments_0;
  }
  Function_0.prototype.get_qualifier_c4gvsv_k$ = function () {
    return this.qualifier_1;
  };
  Function_0.prototype.get_function_8yrfj3_k$ = function () {
    return this.function_1;
  };
  Function_0.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  Function_0.prototype.component1_7eebsc_k$ = function () {
    return this.qualifier_1;
  };
  Function_0.prototype.component2_7eebsb_k$ = function () {
    return this.function_1;
  };
  Function_0.prototype.component3_7eebsa_k$ = function () {
    return this.arguments_1;
  };
  Function_0.prototype.copy_tzjxc_k$ = function (qualifier, function_0, arguments_0) {
    return new Function_0(qualifier, function_0, arguments_0);
  };
  Function_0.prototype.copy$default_nqi5cr_k$ = function (qualifier, function_0, arguments_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      qualifier = this.qualifier_1;
    if (!(($mask0 & 2) === 0))
      function_0 = this.function_1;
    if (!(($mask0 & 4) === 0))
      arguments_0 = this.arguments_1;
    return this.copy_tzjxc_k$(qualifier, function_0, arguments_0);
  };
  Function_0.prototype.toString = function () {
    return 'Function(qualifier=' + this.qualifier_1 + ', function=' + this.function_1 + ', arguments=' + this.arguments_1 + ')';
  };
  Function_0.prototype.hashCode = function () {
    var result = this.qualifier_1 == null ? 0 : this.qualifier_1.hashCode();
    result = imul(result, 31) + hashCode(this.function_1) | 0;
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    return result;
  };
  Function_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Function_0))
      return false;
    var tmp0_other_with_cast = other instanceof Function_0 ? other : THROW_CCE();
    if (!equals(this.qualifier_1, tmp0_other_with_cast.qualifier_1))
      return false;
    if (!equals(this.function_1, tmp0_other_with_cast.function_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    return true;
  };
  Function_0.$metadata$ = classMeta('Function', undefined, undefined, undefined, undefined, Invoke.prototype);
  function Method(receiver, method, coalesce, cascade, arguments_0, type) {
    Invoke.call(this, type);
    this.receiver_1 = receiver;
    this.method_1 = method;
    this.coalesce_1 = coalesce;
    this.cascade_1 = cascade;
    this.arguments_1 = arguments_0;
    this.type_3 = type;
  }
  Method.prototype.get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  Method.prototype.get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  Method.prototype.get_coalesce_nkfaeo_k$ = function () {
    return this.coalesce_1;
  };
  Method.prototype.get_cascade_afvv7v_k$ = function () {
    return this.cascade_1;
  };
  Method.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  Method.prototype.get_type_wovaf7_k$ = function () {
    return this.type_3;
  };
  Method.prototype.component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  Method.prototype.component2_7eebsb_k$ = function () {
    return this.method_1;
  };
  Method.prototype.component3_7eebsa_k$ = function () {
    return this.coalesce_1;
  };
  Method.prototype.component4_7eebs9_k$ = function () {
    return this.cascade_1;
  };
  Method.prototype.component5_7eebs8_k$ = function () {
    return this.arguments_1;
  };
  Method.prototype.component6_7eebs7_k$ = function () {
    return this.type_3;
  };
  Method.prototype.copy_9kdigq_k$ = function (receiver, method, coalesce, cascade, arguments_0, type) {
    return new Method(receiver, method, coalesce, cascade, arguments_0, type);
  };
  Method.prototype.copy$default_9fm1m9_k$ = function (receiver, method, coalesce, cascade, arguments_0, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      receiver = this.receiver_1;
    if (!(($mask0 & 2) === 0))
      method = this.method_1;
    if (!(($mask0 & 4) === 0))
      coalesce = this.coalesce_1;
    if (!(($mask0 & 8) === 0))
      cascade = this.cascade_1;
    if (!(($mask0 & 16) === 0))
      arguments_0 = this.arguments_1;
    if (!(($mask0 & 32) === 0))
      type = this.type_3;
    return this.copy_9kdigq_k$(receiver, method, coalesce, cascade, arguments_0, type);
  };
  Method.prototype.toString = function () {
    return 'Method(receiver=' + this.receiver_1 + ', method=' + this.method_1 + ', coalesce=' + this.coalesce_1 + ', cascade=' + this.cascade_1 + ', arguments=' + this.arguments_1 + ', type=' + this.type_3 + ')';
  };
  Method.prototype.hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + hashCode(this.method_1) | 0;
    result = imul(result, 31) + (this.coalesce_1 | 0) | 0;
    result = imul(result, 31) + (this.cascade_1 | 0) | 0;
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    result = imul(result, 31) + hashCode(this.type_3) | 0;
    return result;
  };
  Method.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Method))
      return false;
    var tmp0_other_with_cast = other instanceof Method ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!equals(this.method_1, tmp0_other_with_cast.method_1))
      return false;
    if (!(this.coalesce_1 === tmp0_other_with_cast.coalesce_1))
      return false;
    if (!(this.cascade_1 === tmp0_other_with_cast.cascade_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    if (!equals(this.type_3, tmp0_other_with_cast.type_3))
      return false;
    return true;
  };
  Method.$metadata$ = classMeta('Method', undefined, undefined, undefined, undefined, Invoke.prototype);
  function Pipeline(receiver, qualifier, function_0, coalesce, cascade, arguments_0, type) {
    Invoke.call(this, type);
    this.receiver_1 = receiver;
    this.qualifier_1 = qualifier;
    this.function_1 = function_0;
    this.coalesce_1 = coalesce;
    this.cascade_1 = cascade;
    this.arguments_1 = arguments_0;
    this.type_3 = type;
  }
  Pipeline.prototype.get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  Pipeline.prototype.get_qualifier_c4gvsv_k$ = function () {
    return this.qualifier_1;
  };
  Pipeline.prototype.get_function_8yrfj3_k$ = function () {
    return this.function_1;
  };
  Pipeline.prototype.get_coalesce_nkfaeo_k$ = function () {
    return this.coalesce_1;
  };
  Pipeline.prototype.get_cascade_afvv7v_k$ = function () {
    return this.cascade_1;
  };
  Pipeline.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  Pipeline.prototype.get_type_wovaf7_k$ = function () {
    return this.type_3;
  };
  Pipeline.prototype.component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  Pipeline.prototype.component2_7eebsb_k$ = function () {
    return this.qualifier_1;
  };
  Pipeline.prototype.component3_7eebsa_k$ = function () {
    return this.function_1;
  };
  Pipeline.prototype.component4_7eebs9_k$ = function () {
    return this.coalesce_1;
  };
  Pipeline.prototype.component5_7eebs8_k$ = function () {
    return this.cascade_1;
  };
  Pipeline.prototype.component6_7eebs7_k$ = function () {
    return this.arguments_1;
  };
  Pipeline.prototype.component7_7eebs6_k$ = function () {
    return this.type_3;
  };
  Pipeline.prototype.copy_7cohpi_k$ = function (receiver, qualifier, function_0, coalesce, cascade, arguments_0, type) {
    return new Pipeline(receiver, qualifier, function_0, coalesce, cascade, arguments_0, type);
  };
  Pipeline.prototype.copy$default_2y5jyt_k$ = function (receiver, qualifier, function_0, coalesce, cascade, arguments_0, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      receiver = this.receiver_1;
    if (!(($mask0 & 2) === 0))
      qualifier = this.qualifier_1;
    if (!(($mask0 & 4) === 0))
      function_0 = this.function_1;
    if (!(($mask0 & 8) === 0))
      coalesce = this.coalesce_1;
    if (!(($mask0 & 16) === 0))
      cascade = this.cascade_1;
    if (!(($mask0 & 32) === 0))
      arguments_0 = this.arguments_1;
    if (!(($mask0 & 64) === 0))
      type = this.type_3;
    return this.copy_7cohpi_k$(receiver, qualifier, function_0, coalesce, cascade, arguments_0, type);
  };
  Pipeline.prototype.toString = function () {
    return 'Pipeline(receiver=' + this.receiver_1 + ', qualifier=' + this.qualifier_1 + ', function=' + this.function_1 + ', coalesce=' + this.coalesce_1 + ', cascade=' + this.cascade_1 + ', arguments=' + this.arguments_1 + ', type=' + this.type_3 + ')';
  };
  Pipeline.prototype.hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + (this.qualifier_1 == null ? 0 : this.qualifier_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.function_1) | 0;
    result = imul(result, 31) + (this.coalesce_1 | 0) | 0;
    result = imul(result, 31) + (this.cascade_1 | 0) | 0;
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    result = imul(result, 31) + hashCode(this.type_3) | 0;
    return result;
  };
  Pipeline.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pipeline))
      return false;
    var tmp0_other_with_cast = other instanceof Pipeline ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!equals(this.qualifier_1, tmp0_other_with_cast.qualifier_1))
      return false;
    if (!equals(this.function_1, tmp0_other_with_cast.function_1))
      return false;
    if (!(this.coalesce_1 === tmp0_other_with_cast.coalesce_1))
      return false;
    if (!(this.cascade_1 === tmp0_other_with_cast.cascade_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    if (!equals(this.type_3, tmp0_other_with_cast.type_3))
      return false;
    return true;
  };
  Pipeline.$metadata$ = classMeta('Pipeline', undefined, undefined, undefined, undefined, Invoke.prototype);
  function Literal(type) {
    Expression_0.call(this, type);
    this.type_2 = type;
  }
  Literal.prototype.get_type_wovaf7_k$ = function () {
    return this.type_2;
  };
  Literal.$metadata$ = classMeta('Literal', undefined, undefined, undefined, undefined, Expression_0.prototype);
  function Group(expression) {
    Expression_0.call(this, expression.get_type_wovaf7_k$());
    this.expression_1 = expression;
  }
  Group.prototype.get_expression_l5w7j5_k$ = function () {
    return this.expression_1;
  };
  Group.prototype.component1_7eebsc_k$ = function () {
    return this.expression_1;
  };
  Group.prototype.copy_bglvcx_k$ = function (expression) {
    return new Group(expression);
  };
  Group.prototype.copy$default_don875_k$ = function (expression, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      expression = this.expression_1;
    return this.copy_bglvcx_k$(expression);
  };
  Group.prototype.toString = function () {
    return 'Group(expression=' + this.expression_1 + ')';
  };
  Group.prototype.hashCode = function () {
    return hashCode(this.expression_1);
  };
  Group.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Group))
      return false;
    var tmp0_other_with_cast = other instanceof Group ? other : THROW_CCE();
    if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
      return false;
    return true;
  };
  Group.$metadata$ = classMeta('Group', undefined, undefined, undefined, undefined, Expression_0.prototype);
  function Unary(operator, expression, method) {
    Expression_0.call(this, method.get_returns_jfk3fe_k$());
    this.operator_1 = operator;
    this.expression_1 = expression;
    this.method_1 = method;
  }
  Unary.prototype.get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  Unary.prototype.get_expression_l5w7j5_k$ = function () {
    return this.expression_1;
  };
  Unary.prototype.get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  Unary.prototype.component1_7eebsc_k$ = function () {
    return this.operator_1;
  };
  Unary.prototype.component2_7eebsb_k$ = function () {
    return this.expression_1;
  };
  Unary.prototype.component3_7eebsa_k$ = function () {
    return this.method_1;
  };
  Unary.prototype.copy_roktpn_k$ = function (operator, expression, method) {
    return new Unary(operator, expression, method);
  };
  Unary.prototype.copy$default_h4mufz_k$ = function (operator, expression, method, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      operator = this.operator_1;
    if (!(($mask0 & 2) === 0))
      expression = this.expression_1;
    if (!(($mask0 & 4) === 0))
      method = this.method_1;
    return this.copy_roktpn_k$(operator, expression, method);
  };
  Unary.prototype.toString = function () {
    return 'Unary(operator=' + this.operator_1 + ', expression=' + this.expression_1 + ', method=' + this.method_1 + ')';
  };
  Unary.prototype.hashCode = function () {
    var result = getStringHashCode(this.operator_1);
    result = imul(result, 31) + hashCode(this.expression_1) | 0;
    result = imul(result, 31) + hashCode(this.method_1) | 0;
    return result;
  };
  Unary.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Unary))
      return false;
    var tmp0_other_with_cast = other instanceof Unary ? other : THROW_CCE();
    if (!(this.operator_1 === tmp0_other_with_cast.operator_1))
      return false;
    if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
      return false;
    if (!equals(this.method_1, tmp0_other_with_cast.method_1))
      return false;
    return true;
  };
  Unary.$metadata$ = classMeta('Unary', undefined, undefined, undefined, undefined, Expression_0.prototype);
  function Binary(operator, left, right, method, type) {
    Expression_0.call(this, type);
    this.operator_1 = operator;
    this.left_1 = left;
    this.right_1 = right;
    this.method_1 = method;
    this.type_2 = type;
  }
  Binary.prototype.get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  Binary.prototype.get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  Binary.prototype.get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  Binary.prototype.get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  Binary.prototype.get_type_wovaf7_k$ = function () {
    return this.type_2;
  };
  Binary.prototype.component1_7eebsc_k$ = function () {
    return this.operator_1;
  };
  Binary.prototype.component2_7eebsb_k$ = function () {
    return this.left_1;
  };
  Binary.prototype.component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  Binary.prototype.component4_7eebs9_k$ = function () {
    return this.method_1;
  };
  Binary.prototype.component5_7eebs8_k$ = function () {
    return this.type_2;
  };
  Binary.prototype.copy_so5kls_k$ = function (operator, left, right, method, type) {
    return new Binary(operator, left, right, method, type);
  };
  Binary.prototype.copy$default_djl4nn_k$ = function (operator, left, right, method, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      operator = this.operator_1;
    if (!(($mask0 & 2) === 0))
      left = this.left_1;
    if (!(($mask0 & 4) === 0))
      right = this.right_1;
    if (!(($mask0 & 8) === 0))
      method = this.method_1;
    if (!(($mask0 & 16) === 0))
      type = this.type_2;
    return this.copy_so5kls_k$(operator, left, right, method, type);
  };
  Binary.prototype.toString = function () {
    return 'Binary(operator=' + this.operator_1 + ', left=' + this.left_1 + ', right=' + this.right_1 + ', method=' + this.method_1 + ', type=' + this.type_2 + ')';
  };
  Binary.prototype.hashCode = function () {
    var result = getStringHashCode(this.operator_1);
    result = imul(result, 31) + hashCode(this.left_1) | 0;
    result = imul(result, 31) + hashCode(this.right_1) | 0;
    result = imul(result, 31) + (this.method_1 == null ? 0 : hashCode(this.method_1)) | 0;
    result = imul(result, 31) + hashCode(this.type_2) | 0;
    return result;
  };
  Binary.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Binary))
      return false;
    var tmp0_other_with_cast = other instanceof Binary ? other : THROW_CCE();
    if (!(this.operator_1 === tmp0_other_with_cast.operator_1))
      return false;
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    if (!equals(this.method_1, tmp0_other_with_cast.method_1))
      return false;
    if (!equals(this.type_2, tmp0_other_with_cast.type_2))
      return false;
    return true;
  };
  Binary.$metadata$ = classMeta('Binary', undefined, undefined, undefined, undefined, Expression_0.prototype);
  function Access(type) {
    Expression_0.call(this, type);
    this.type_2 = type;
  }
  Access.prototype.get_type_wovaf7_k$ = function () {
    return this.type_2;
  };
  Access.$metadata$ = classMeta('Access', undefined, undefined, undefined, undefined, Expression_0.prototype);
  function Invoke(type) {
    Expression_0.call(this, type);
    this.type_2 = type;
  }
  Invoke.prototype.get_type_wovaf7_k$ = function () {
    return this.type_2;
  };
  Invoke.$metadata$ = classMeta('Invoke', undefined, undefined, undefined, undefined, Expression_0.prototype);
  function Lambda(parameters, body, type) {
    Expression_0.call(this, type);
    this.parameters_1 = parameters;
    this.body_1 = body;
    this.type_2 = type;
  }
  Lambda.prototype.get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  Lambda.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  Lambda.prototype.get_type_wovaf7_k$ = function () {
    return this.type_2;
  };
  Lambda.prototype.component1_7eebsc_k$ = function () {
    return this.parameters_1;
  };
  Lambda.prototype.component2_7eebsb_k$ = function () {
    return this.body_1;
  };
  Lambda.prototype.component3_7eebsa_k$ = function () {
    return this.type_2;
  };
  Lambda.prototype.copy_cqx312_k$ = function (parameters, body, type) {
    return new Lambda(parameters, body, type);
  };
  Lambda.prototype.copy$default_jcp2d6_k$ = function (parameters, body, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parameters = this.parameters_1;
    if (!(($mask0 & 2) === 0))
      body = this.body_1;
    if (!(($mask0 & 4) === 0))
      type = this.type_2;
    return this.copy_cqx312_k$(parameters, body, type);
  };
  Lambda.prototype.toString = function () {
    return 'Lambda(parameters=' + this.parameters_1 + ', body=' + this.body_1 + ', type=' + this.type_2 + ')';
  };
  Lambda.prototype.hashCode = function () {
    var result = hashCode(this.parameters_1);
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    result = imul(result, 31) + hashCode(this.type_2) | 0;
    return result;
  };
  Lambda.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Lambda))
      return false;
    var tmp0_other_with_cast = other instanceof Lambda ? other : THROW_CCE();
    if (!equals(this.parameters_1, tmp0_other_with_cast.parameters_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    if (!equals(this.type_2, tmp0_other_with_cast.type_2))
      return false;
    return true;
  };
  Lambda.$metadata$ = classMeta('Lambda', undefined, undefined, undefined, undefined, Expression_0.prototype);
  function Variable_1(variable) {
    var tmp0_safe_receiver = variable;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.type_1;
    Pattern.call(this, tmp1_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')) : tmp1_elvis_lhs);
    this.variable_1 = variable;
  }
  Variable_1.prototype.get_variable_ik7c5h_k$ = function () {
    return this.variable_1;
  };
  Variable_1.prototype.component1_7eebsc_k$ = function () {
    return this.variable_1;
  };
  Variable_1.prototype.copy_kzfuhc_k$ = function (variable) {
    return new Variable_1(variable);
  };
  Variable_1.prototype.copy$default_zvru3_k$ = function (variable, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      variable = this.variable_1;
    return this.copy_kzfuhc_k$(variable);
  };
  Variable_1.prototype.toString = function () {
    return 'Variable(variable=' + this.variable_1 + ')';
  };
  Variable_1.prototype.hashCode = function () {
    return this.variable_1 == null ? 0 : this.variable_1.hashCode();
  };
  Variable_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Variable_1))
      return false;
    var tmp0_other_with_cast = other instanceof Variable_1 ? other : THROW_CCE();
    if (!equals(this.variable_1, tmp0_other_with_cast.variable_1))
      return false;
    return true;
  };
  Variable_1.$metadata$ = classMeta('Variable', undefined, undefined, undefined, undefined, Pattern.prototype);
  function Value(value) {
    Pattern.call(this, value.get_type_wovaf7_k$());
    this.value_1 = value;
  }
  Value.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Value.prototype.component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  Value.prototype.copy_bglvcx_k$ = function (value) {
    return new Value(value);
  };
  Value.prototype.copy$default_don875_k$ = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    return this.copy_bglvcx_k$(value);
  };
  Value.prototype.toString = function () {
    return 'Value(value=' + this.value_1 + ')';
  };
  Value.prototype.hashCode = function () {
    return hashCode(this.value_1);
  };
  Value.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Value.$metadata$ = classMeta('Value', undefined, undefined, undefined, undefined, Pattern.prototype);
  function Predicate(pattern, predicate) {
    Pattern.call(this, pattern.get_type_wovaf7_k$());
    this.pattern_1 = pattern;
    this.predicate_1 = predicate;
  }
  Predicate.prototype.get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  Predicate.prototype.get_predicate_ds2702_k$ = function () {
    return this.predicate_1;
  };
  Predicate.prototype.component1_7eebsc_k$ = function () {
    return this.pattern_1;
  };
  Predicate.prototype.component2_7eebsb_k$ = function () {
    return this.predicate_1;
  };
  Predicate.prototype.copy_pe9sz1_k$ = function (pattern, predicate) {
    return new Predicate(pattern, predicate);
  };
  Predicate.prototype.copy$default_6c8nc0_k$ = function (pattern, predicate, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      pattern = this.pattern_1;
    if (!(($mask0 & 2) === 0))
      predicate = this.predicate_1;
    return this.copy_pe9sz1_k$(pattern, predicate);
  };
  Predicate.prototype.toString = function () {
    return 'Predicate(pattern=' + this.pattern_1 + ', predicate=' + this.predicate_1 + ')';
  };
  Predicate.prototype.hashCode = function () {
    var result = hashCode(this.pattern_1);
    result = imul(result, 31) + hashCode(this.predicate_1) | 0;
    return result;
  };
  Predicate.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Predicate))
      return false;
    var tmp0_other_with_cast = other instanceof Predicate ? other : THROW_CCE();
    if (!equals(this.pattern_1, tmp0_other_with_cast.pattern_1))
      return false;
    if (!equals(this.predicate_1, tmp0_other_with_cast.predicate_1))
      return false;
    return true;
  };
  Predicate.$metadata$ = classMeta('Predicate', undefined, undefined, undefined, undefined, Pattern.prototype);
  function OrderedDestructure(patterns, type) {
    Pattern.call(this, type);
    this.patterns_1 = patterns;
    this.type_2 = type;
  }
  OrderedDestructure.prototype.get_patterns_b73j2s_k$ = function () {
    return this.patterns_1;
  };
  OrderedDestructure.prototype.get_type_wovaf7_k$ = function () {
    return this.type_2;
  };
  OrderedDestructure.prototype.component1_7eebsc_k$ = function () {
    return this.patterns_1;
  };
  OrderedDestructure.prototype.component2_7eebsb_k$ = function () {
    return this.type_2;
  };
  OrderedDestructure.prototype.copy_3fmikt_k$ = function (patterns, type) {
    return new OrderedDestructure(patterns, type);
  };
  OrderedDestructure.prototype.copy$default_nruirm_k$ = function (patterns, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      patterns = this.patterns_1;
    if (!(($mask0 & 2) === 0))
      type = this.type_2;
    return this.copy_3fmikt_k$(patterns, type);
  };
  OrderedDestructure.prototype.toString = function () {
    return 'OrderedDestructure(patterns=' + this.patterns_1 + ', type=' + this.type_2 + ')';
  };
  OrderedDestructure.prototype.hashCode = function () {
    var result = hashCode(this.patterns_1);
    result = imul(result, 31) + hashCode(this.type_2) | 0;
    return result;
  };
  OrderedDestructure.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderedDestructure))
      return false;
    var tmp0_other_with_cast = other instanceof OrderedDestructure ? other : THROW_CCE();
    if (!equals(this.patterns_1, tmp0_other_with_cast.patterns_1))
      return false;
    if (!equals(this.type_2, tmp0_other_with_cast.type_2))
      return false;
    return true;
  };
  OrderedDestructure.$metadata$ = classMeta('OrderedDestructure', undefined, undefined, undefined, undefined, Pattern.prototype);
  function NamedDestructure(patterns, type) {
    Pattern.call(this, type);
    this.patterns_1 = patterns;
    this.type_2 = type;
  }
  NamedDestructure.prototype.get_patterns_b73j2s_k$ = function () {
    return this.patterns_1;
  };
  NamedDestructure.prototype.get_type_wovaf7_k$ = function () {
    return this.type_2;
  };
  NamedDestructure.prototype.component1_7eebsc_k$ = function () {
    return this.patterns_1;
  };
  NamedDestructure.prototype.component2_7eebsb_k$ = function () {
    return this.type_2;
  };
  NamedDestructure.prototype.copy_omxoxv_k$ = function (patterns, type) {
    return new NamedDestructure(patterns, type);
  };
  NamedDestructure.prototype.copy$default_6k9si4_k$ = function (patterns, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      patterns = this.patterns_1;
    if (!(($mask0 & 2) === 0))
      type = this.type_2;
    return this.copy_omxoxv_k$(patterns, type);
  };
  NamedDestructure.prototype.toString = function () {
    return 'NamedDestructure(patterns=' + this.patterns_1 + ', type=' + this.type_2 + ')';
  };
  NamedDestructure.prototype.hashCode = function () {
    var result = hashCode(this.patterns_1);
    result = imul(result, 31) + hashCode(this.type_2) | 0;
    return result;
  };
  NamedDestructure.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NamedDestructure))
      return false;
    var tmp0_other_with_cast = other instanceof NamedDestructure ? other : THROW_CCE();
    if (!equals(this.patterns_1, tmp0_other_with_cast.patterns_1))
      return false;
    if (!equals(this.type_2, tmp0_other_with_cast.type_2))
      return false;
    return true;
  };
  NamedDestructure.$metadata$ = classMeta('NamedDestructure', undefined, undefined, undefined, undefined, Pattern.prototype);
  function TypedDestructure(type, pattern) {
    Pattern.call(this, type);
    this.type_2 = type;
    this.pattern_1 = pattern;
  }
  TypedDestructure.prototype.get_type_wovaf7_k$ = function () {
    return this.type_2;
  };
  TypedDestructure.prototype.get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  TypedDestructure.prototype.component1_7eebsc_k$ = function () {
    return this.type_2;
  };
  TypedDestructure.prototype.component2_7eebsb_k$ = function () {
    return this.pattern_1;
  };
  TypedDestructure.prototype.copy_55e83q_k$ = function (type, pattern) {
    return new TypedDestructure(type, pattern);
  };
  TypedDestructure.prototype.copy$default_djw198_k$ = function (type, pattern, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.type_2;
    if (!(($mask0 & 2) === 0))
      pattern = this.pattern_1;
    return this.copy_55e83q_k$(type, pattern);
  };
  TypedDestructure.prototype.toString = function () {
    return 'TypedDestructure(type=' + this.type_2 + ', pattern=' + this.pattern_1 + ')';
  };
  TypedDestructure.prototype.hashCode = function () {
    var result = hashCode(this.type_2);
    result = imul(result, 31) + (this.pattern_1 == null ? 0 : hashCode(this.pattern_1)) | 0;
    return result;
  };
  TypedDestructure.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypedDestructure))
      return false;
    var tmp0_other_with_cast = other instanceof TypedDestructure ? other : THROW_CCE();
    if (!equals(this.type_2, tmp0_other_with_cast.type_2))
      return false;
    if (!equals(this.pattern_1, tmp0_other_with_cast.pattern_1))
      return false;
    return true;
  };
  TypedDestructure.$metadata$ = classMeta('TypedDestructure', undefined, undefined, undefined, undefined, Pattern.prototype);
  function VarargDestructure(pattern, operator, type) {
    Pattern.call(this, type);
    this.pattern_1 = pattern;
    this.operator_1 = operator;
    this.type_2 = type;
  }
  VarargDestructure.prototype.get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  VarargDestructure.prototype.get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  VarargDestructure.prototype.get_type_wovaf7_k$ = function () {
    return this.type_2;
  };
  VarargDestructure.prototype.component1_7eebsc_k$ = function () {
    return this.pattern_1;
  };
  VarargDestructure.prototype.component2_7eebsb_k$ = function () {
    return this.operator_1;
  };
  VarargDestructure.prototype.component3_7eebsa_k$ = function () {
    return this.type_2;
  };
  VarargDestructure.prototype.copy_s9qx1h_k$ = function (pattern, operator, type) {
    return new VarargDestructure(pattern, operator, type);
  };
  VarargDestructure.prototype.copy$default_h9zjc0_k$ = function (pattern, operator, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      pattern = this.pattern_1;
    if (!(($mask0 & 2) === 0))
      operator = this.operator_1;
    if (!(($mask0 & 4) === 0))
      type = this.type_2;
    return this.copy_s9qx1h_k$(pattern, operator, type);
  };
  VarargDestructure.prototype.toString = function () {
    return 'VarargDestructure(pattern=' + this.pattern_1 + ', operator=' + this.operator_1 + ', type=' + this.type_2 + ')';
  };
  VarargDestructure.prototype.hashCode = function () {
    var result = this.pattern_1 == null ? 0 : hashCode(this.pattern_1);
    result = imul(result, 31) + getStringHashCode(this.operator_1) | 0;
    result = imul(result, 31) + hashCode(this.type_2) | 0;
    return result;
  };
  VarargDestructure.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VarargDestructure))
      return false;
    var tmp0_other_with_cast = other instanceof VarargDestructure ? other : THROW_CCE();
    if (!equals(this.pattern_1, tmp0_other_with_cast.pattern_1))
      return false;
    if (!(this.operator_1 === tmp0_other_with_cast.operator_1))
      return false;
    if (!equals(this.type_2, tmp0_other_with_cast.type_2))
      return false;
    return true;
  };
  VarargDestructure.$metadata$ = classMeta('VarargDestructure', undefined, undefined, undefined, undefined, Pattern.prototype);
  function Source(imports, statements) {
    RhovasIr.call(this);
    this.imports_1 = imports;
    this.statements_1 = statements;
  }
  Source.prototype.get_imports_x49mdh_k$ = function () {
    return this.imports_1;
  };
  Source.prototype.get_statements_nqb5hv_k$ = function () {
    return this.statements_1;
  };
  Source.prototype.component1_7eebsc_k$ = function () {
    return this.imports_1;
  };
  Source.prototype.component2_7eebsb_k$ = function () {
    return this.statements_1;
  };
  Source.prototype.copy_p30ui5_k$ = function (imports, statements) {
    return new Source(imports, statements);
  };
  Source.prototype.copy$default_ab6pr4_k$ = function (imports, statements, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      imports = this.imports_1;
    if (!(($mask0 & 2) === 0))
      statements = this.statements_1;
    return this.copy_p30ui5_k$(imports, statements);
  };
  Source.prototype.toString = function () {
    return 'Source(imports=' + this.imports_1 + ', statements=' + this.statements_1 + ')';
  };
  Source.prototype.hashCode = function () {
    var result = hashCode(this.imports_1);
    result = imul(result, 31) + hashCode(this.statements_1) | 0;
    return result;
  };
  Source.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Source))
      return false;
    var tmp0_other_with_cast = other instanceof Source ? other : THROW_CCE();
    if (!equals(this.imports_1, tmp0_other_with_cast.imports_1))
      return false;
    if (!equals(this.statements_1, tmp0_other_with_cast.statements_1))
      return false;
    return true;
  };
  Source.$metadata$ = classMeta('Source', undefined, undefined, undefined, undefined, RhovasIr.prototype);
  function Import(type) {
    RhovasIr.call(this);
    this.type_1 = type;
  }
  Import.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Import.prototype.component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  Import.prototype.copy_z3miat_k$ = function (type) {
    return new Import(type);
  };
  Import.prototype.copy$default_vcwy05_k$ = function (type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.type_1;
    return this.copy_z3miat_k$(type);
  };
  Import.prototype.toString = function () {
    return 'Import(type=' + this.type_1 + ')';
  };
  Import.prototype.hashCode = function () {
    return hashCode(this.type_1);
  };
  Import.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Import))
      return false;
    var tmp0_other_with_cast = other instanceof Import ? other : THROW_CCE();
    if (!equals(this.type_1, tmp0_other_with_cast.type_1))
      return false;
    return true;
  };
  Import.$metadata$ = classMeta('Import', undefined, undefined, undefined, undefined, RhovasIr.prototype);
  function Component_0() {
    RhovasIr.call(this);
  }
  Component_0.$metadata$ = classMeta('Component', undefined, undefined, undefined, undefined, RhovasIr.prototype);
  function Statement() {
    RhovasIr.call(this);
  }
  Statement.$metadata$ = classMeta('Statement', undefined, undefined, undefined, undefined, RhovasIr.prototype);
  function Expression_0(type) {
    RhovasIr.call(this);
    this.type_1 = type;
  }
  Expression_0.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Expression_0.$metadata$ = classMeta('Expression', undefined, undefined, undefined, undefined, RhovasIr.prototype);
  function Pattern(type) {
    RhovasIr.call(this);
    this.type_1 = type;
  }
  Pattern.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Pattern.$metadata$ = classMeta('Pattern', undefined, undefined, undefined, undefined, RhovasIr.prototype);
  function Type(type) {
    RhovasIr.call(this);
    this.type_1 = type;
  }
  Type.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Type.prototype.component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  Type.prototype.copy_z3miat_k$ = function (type) {
    return new Type(type);
  };
  Type.prototype.copy$default_vcwy05_k$ = function (type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.type_1;
    return this.copy_z3miat_k$(type);
  };
  Type.prototype.toString = function () {
    return 'Type(type=' + this.type_1 + ')';
  };
  Type.prototype.hashCode = function () {
    return hashCode(this.type_1);
  };
  Type.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Type))
      return false;
    var tmp0_other_with_cast = other instanceof Type ? other : THROW_CCE();
    if (!equals(this.type_1, tmp0_other_with_cast.type_1))
      return false;
    return true;
  };
  Type.$metadata$ = classMeta('Type', undefined, undefined, undefined, undefined, RhovasIr.prototype);
  function Visitor() {
  }
  Visitor.$metadata$ = interfaceMeta('Visitor');
  function RhovasIr() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$0 = emptyList();
    tmp.context_1 = tmp$ret$0;
  }
  RhovasIr.prototype.set_context_8ca77u_k$ = function (_set____db54di) {
    this.context_1 = _set____db54di;
  };
  RhovasIr.prototype.get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  RhovasIr.$metadata$ = classMeta('RhovasIr');
  function Function$Definition$bind$lambda(this$0) {
    return function (it) {
      return this$0.get_implementation_9txf7p_k$()(it);
    };
  }
  function Declaration_0(name, generics, parameters, returns, throws) {
    this.name_1 = name;
    this.generics_1 = generics;
    this.parameters_1 = parameters;
    this.returns_1 = returns;
    this.throws_1 = throws;
  }
  Declaration_0.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Declaration_0.prototype.get_generics_1v316j_k$ = function () {
    return this.generics_1;
  };
  Declaration_0.prototype.get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  Declaration_0.prototype.get_returns_jfk3fe_k$ = function () {
    return this.returns_1;
  };
  Declaration_0.prototype.get_throws_jy60ra_k$ = function () {
    return this.throws_1;
  };
  Declaration_0.prototype.bind_9oflcx_k$ = function (generics) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.generics_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.environment.Declaration.bind.<anonymous>' call
      tmp$ret$0 = new Generic(item.name_1, item.bound_1.bind_9oflcx_k$(generics));
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = this.parameters_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.environment.Declaration.bind.<anonymous>' call
      tmp$ret$3 = new Declaration_4(item_0.name_1, item_0.type_1.bind_9oflcx_k$(generics), item_0.mutable_1);
      tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo_0;
    tmp$ret$5 = tmp$ret$4;
    var tmp_0 = tmp$ret$5;
    var tmp_1 = this.returns_1.bind_9oflcx_k$(generics);
    var tmp$ret$8;
    // Inline function 'kotlin.collections.map' call
    var tmp2_map = this.throws_1;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
    var tmp0_iterator_1 = tmp2_map.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_1 = tmp0_iterator_1.next_20eer_k$();
      var tmp$ret$6;
      // Inline function 'dev.rhovas.interpreter.environment.Declaration.bind.<anonymous>' call
      tmp$ret$6 = item_1.bind_9oflcx_k$(generics);
      tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$6);
    }
    tmp$ret$7 = tmp0_mapTo_1;
    tmp$ret$8 = tmp$ret$7;
    return new Declaration_0(this.name_1, tmp, tmp_0, tmp_1, tmp$ret$8);
  };
  Declaration_0.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  Declaration_0.prototype.component2_7eebsb_k$ = function () {
    return this.generics_1;
  };
  Declaration_0.prototype.component3_7eebsa_k$ = function () {
    return this.parameters_1;
  };
  Declaration_0.prototype.component4_7eebs9_k$ = function () {
    return this.returns_1;
  };
  Declaration_0.prototype.component5_7eebs8_k$ = function () {
    return this.throws_1;
  };
  Declaration_0.prototype.copy_l9v1bv_k$ = function (name, generics, parameters, returns, throws) {
    return new Declaration_0(name, generics, parameters, returns, throws);
  };
  Declaration_0.prototype.copy$default_e0kf9v_k$ = function (name, generics, parameters, returns, throws, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      generics = this.generics_1;
    if (!(($mask0 & 4) === 0))
      parameters = this.parameters_1;
    if (!(($mask0 & 8) === 0))
      returns = this.returns_1;
    if (!(($mask0 & 16) === 0))
      throws = this.throws_1;
    return this.copy_l9v1bv_k$(name, generics, parameters, returns, throws);
  };
  Declaration_0.prototype.toString = function () {
    return 'Declaration(name=' + this.name_1 + ', generics=' + this.generics_1 + ', parameters=' + this.parameters_1 + ', returns=' + this.returns_1 + ', throws=' + this.throws_1 + ')';
  };
  Declaration_0.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.generics_1) | 0;
    result = imul(result, 31) + hashCode(this.parameters_1) | 0;
    result = imul(result, 31) + hashCode(this.returns_1) | 0;
    result = imul(result, 31) + hashCode(this.throws_1) | 0;
    return result;
  };
  Declaration_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Declaration_0))
      return false;
    var tmp0_other_with_cast = other instanceof Declaration_0 ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.generics_1, tmp0_other_with_cast.generics_1))
      return false;
    if (!equals(this.parameters_1, tmp0_other_with_cast.parameters_1))
      return false;
    if (!equals(this.returns_1, tmp0_other_with_cast.returns_1))
      return false;
    if (!equals(this.throws_1, tmp0_other_with_cast.throws_1))
      return false;
    return true;
  };
  Declaration_0.$metadata$ = classMeta('Declaration', [Function_1]);
  function Definition(declaration) {
    this.declaration_1 = declaration;
  }
  Definition.prototype.get_declaration_jnio6n_k$ = function () {
    return this.declaration_1;
  };
  Definition.prototype.get_generics_1v316j_k$ = function () {
    return this.declaration_1.generics_1;
  };
  Definition.prototype.get_name_woqyms_k$ = function () {
    return this.declaration_1.name_1;
  };
  Definition.prototype.get_parameters_cl4rkd_k$ = function () {
    return this.declaration_1.parameters_1;
  };
  Definition.prototype.get_returns_jfk3fe_k$ = function () {
    return this.declaration_1.returns_1;
  };
  Definition.prototype.get_throws_jy60ra_k$ = function () {
    return this.declaration_1.throws_1;
  };
  Definition.prototype.set_implementation_na4ebh_k$ = function (_set____db54di) {
    this.implementation_1 = _set____db54di;
  };
  Definition.prototype.get_implementation_9txf7p_k$ = function () {
    var tmp = this.implementation_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('implementation');
    }
  };
  Definition.prototype.invoke_ed3umv_k$ = function (arguments_0) {
    return this.get_implementation_9txf7p_k$()(arguments_0);
  };
  Definition.prototype.bind_9oflcx_k$ = function (generics) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Definition(this.declaration_1.bind_9oflcx_k$(generics));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.environment.Definition.bind.<anonymous>' call
    var tmp = tmp0_also;
    tmp.implementation_1 = Function$Definition$bind$lambda(this);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Definition.prototype.component1_7eebsc_k$ = function () {
    return this.declaration_1;
  };
  Definition.prototype.copy_7jtxox_k$ = function (declaration) {
    return new Definition(declaration);
  };
  Definition.prototype.copy$default_zvru3_k$ = function (declaration, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      declaration = this.declaration_1;
    return this.copy_7jtxox_k$(declaration);
  };
  Definition.prototype.toString = function () {
    return 'Definition(declaration=' + this.declaration_1 + ')';
  };
  Definition.prototype.hashCode = function () {
    return this.declaration_1.hashCode();
  };
  Definition.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Definition))
      return false;
    var tmp0_other_with_cast = other instanceof Definition ? other : THROW_CCE();
    if (!this.declaration_1.equals(tmp0_other_with_cast.declaration_1))
      return false;
    return true;
  };
  Definition.$metadata$ = classMeta('Definition', [Function_1]);
  function Function_1() {
  }
  Function_1.$metadata$ = interfaceMeta('Function');
  function Declaration_1(function_0) {
    this.function_1 = function_0;
  }
  Declaration_1.prototype.get_function_8yrfj3_k$ = function () {
    return this.function_1;
  };
  Declaration_1.prototype.component1_7eebsc_k$ = function () {
    return this.function_1;
  };
  Declaration_1.prototype.copy_zcc9ml_k$ = function (function_0) {
    return new Declaration_1(function_0);
  };
  Declaration_1.prototype.copy$default_uq7zr7_k$ = function (function_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      function_0 = this.function_1;
    return this.copy_zcc9ml_k$(function_0);
  };
  Declaration_1.prototype.toString = function () {
    return 'Declaration(function=' + this.function_1 + ')';
  };
  Declaration_1.prototype.hashCode = function () {
    return hashCode(this.function_1);
  };
  Declaration_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Declaration_1))
      return false;
    var tmp0_other_with_cast = other instanceof Declaration_1 ? other : THROW_CCE();
    if (!equals(this.function_1, tmp0_other_with_cast.function_1))
      return false;
    return true;
  };
  Declaration_1.$metadata$ = classMeta('Declaration', [Method_0]);
  function Bound(function_0, instance) {
    this.function_1 = function_0;
    this.instance_1 = instance;
  }
  Bound.prototype.get_function_8yrfj3_k$ = function () {
    return this.function_1;
  };
  Bound.prototype.get_instance_mmff6q_k$ = function () {
    return this.instance_1;
  };
  Bound.prototype.invoke_ed3umv_k$ = function (arguments_0) {
    return this.function_1.invoke_ed3umv_k$(plus(listOf(this.instance_1), arguments_0));
  };
  Bound.prototype.component1_7eebsc_k$ = function () {
    return this.function_1;
  };
  Bound.prototype.component2_7eebsb_k$ = function () {
    return this.instance_1;
  };
  Bound.prototype.copy_597ann_k$ = function (function_0, instance) {
    return new Bound(function_0, instance);
  };
  Bound.prototype.copy$default_cm6jl0_k$ = function (function_0, instance, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      function_0 = this.function_1;
    if (!(($mask0 & 2) === 0))
      instance = this.instance_1;
    return this.copy_597ann_k$(function_0, instance);
  };
  Bound.prototype.toString = function () {
    return 'Bound(function=' + this.function_1 + ', instance=' + this.instance_1 + ')';
  };
  Bound.prototype.hashCode = function () {
    var result = this.function_1.hashCode();
    result = imul(result, 31) + this.instance_1.hashCode() | 0;
    return result;
  };
  Bound.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Bound))
      return false;
    var tmp0_other_with_cast = other instanceof Bound ? other : THROW_CCE();
    if (!this.function_1.equals(tmp0_other_with_cast.function_1))
      return false;
    if (!this.instance_1.equals(tmp0_other_with_cast.instance_1))
      return false;
    return true;
  };
  Bound.$metadata$ = classMeta('Bound', [Method_0]);
  function Method_0() {
  }
  Method_0.$metadata$ = interfaceMeta('Method');
  function PropertiesDelegate($outer) {
    this.$this_1 = $outer;
  }
  PropertiesDelegate.prototype.get_4u8u51_k$ = function (name) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$0 = emptyList();
    var tmp0_safe_receiver = this.$this_1.methods_1.get_ffk12n_k$(name, tmp$ret$0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.environment.PropertiesDelegate.get.<anonymous>' call
      tmp$ret$1 = new Bound_0(tmp0_safe_receiver, this.$this_1.methods_1.get_ffk12n_k$(name, listOf(tmp0_safe_receiver.get_returns_jfk3fe_k$())));
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  };
  PropertiesDelegate.$metadata$ = classMeta('PropertiesDelegate');
  function MethodsDelegate($outer) {
    this.$this_1 = $outer;
  }
  MethodsDelegate.prototype.get_ffk12n_k$ = function (name, arguments_0) {
    var tmp0_safe_receiver = this.$this_1.type_1.functions_1.get_ffk12n_k$(name, plus(listOf(this.$this_1.type_1), arguments_0));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.environment.MethodsDelegate.get.<anonymous>' call
      tmp$ret$0 = new Bound(tmp0_safe_receiver instanceof Definition ? tmp0_safe_receiver : THROW_CCE(), this.$this_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  MethodsDelegate.$metadata$ = classMeta('MethodsDelegate');
  function Object_1(type, value) {
    this.type_1 = type;
    this.value_1 = value;
    this.properties_1 = new PropertiesDelegate(this);
    this.methods_1 = new MethodsDelegate(this);
  }
  Object_1.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Object_1.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Object_1.prototype.get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  Object_1.prototype.get_methods_h2gczt_k$ = function () {
    return this.methods_1;
  };
  Object_1.prototype.get_4982fz_k$ = function (property) {
    return this.properties_1.get_4u8u51_k$(property.get_name_woqyms_k$());
  };
  Object_1.prototype.get_uggsz1_k$ = function (method) {
    var tmp = method.get_name_woqyms_k$();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = method.get_parameters_cl4rkd_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.environment.Object.get.<anonymous>' call
      tmp$ret$0 = item.type_1;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return this.methods_1.get_ffk12n_k$(tmp, tmp$ret$2);
  };
  Object_1.prototype.component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  Object_1.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  Object_1.prototype.copy_ehy4km_k$ = function (type, value) {
    return new Object_1(type, value);
  };
  Object_1.prototype.copy$default_2zhunw_k$ = function (type, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.type_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    return this.copy_ehy4km_k$(type, value);
  };
  Object_1.prototype.toString = function () {
    return 'Object(type=' + this.type_1 + ', value=' + toString_0(this.value_1) + ')';
  };
  Object_1.prototype.hashCode = function () {
    var result = hashCode(this.type_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
    return result;
  };
  Object_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Object_1))
      return false;
    var tmp0_other_with_cast = other instanceof Object_1 ? other : THROW_CCE();
    if (!equals(this.type_1, tmp0_other_with_cast.type_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Object_1.$metadata$ = classMeta('Object');
  function Declaration_2(getter, setter) {
    this.getter_1 = getter;
    this.setter_1 = setter;
  }
  Declaration_2.prototype.get_getter_dqyx3o_k$ = function () {
    return this.getter_1;
  };
  Declaration_2.prototype.get_setter_jfidu0_k$ = function () {
    return this.setter_1;
  };
  Declaration_2.prototype.component1_7eebsc_k$ = function () {
    return this.getter_1;
  };
  Declaration_2.prototype.component2_7eebsb_k$ = function () {
    return this.setter_1;
  };
  Declaration_2.prototype.copy_b7t9ks_k$ = function (getter, setter) {
    return new Declaration_2(getter, setter);
  };
  Declaration_2.prototype.copy$default_1pr6i8_k$ = function (getter, setter, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      getter = this.getter_1;
    if (!(($mask0 & 2) === 0))
      setter = this.setter_1;
    return this.copy_b7t9ks_k$(getter, setter);
  };
  Declaration_2.prototype.toString = function () {
    return 'Declaration(getter=' + this.getter_1 + ', setter=' + this.setter_1 + ')';
  };
  Declaration_2.prototype.hashCode = function () {
    var result = hashCode(this.getter_1);
    result = imul(result, 31) + (this.setter_1 == null ? 0 : hashCode(this.setter_1)) | 0;
    return result;
  };
  Declaration_2.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Declaration_2))
      return false;
    var tmp0_other_with_cast = other instanceof Declaration_2 ? other : THROW_CCE();
    if (!equals(this.getter_1, tmp0_other_with_cast.getter_1))
      return false;
    if (!equals(this.setter_1, tmp0_other_with_cast.setter_1))
      return false;
    return true;
  };
  Declaration_2.$metadata$ = classMeta('Declaration', [Property_1]);
  function Bound_0(getter, setter) {
    this.getter_1 = getter;
    this.setter_1 = setter;
  }
  Bound_0.prototype.get_getter_dqyx3o_k$ = function () {
    return this.getter_1;
  };
  Bound_0.prototype.get_setter_jfidu0_k$ = function () {
    return this.setter_1;
  };
  Bound_0.prototype.component1_7eebsc_k$ = function () {
    return this.getter_1;
  };
  Bound_0.prototype.component2_7eebsb_k$ = function () {
    return this.setter_1;
  };
  Bound_0.prototype.copy_dy51sm_k$ = function (getter, setter) {
    return new Bound_0(getter, setter);
  };
  Bound_0.prototype.copy$default_g8f7sy_k$ = function (getter, setter, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      getter = this.getter_1;
    if (!(($mask0 & 2) === 0))
      setter = this.setter_1;
    return this.copy_dy51sm_k$(getter, setter);
  };
  Bound_0.prototype.toString = function () {
    return 'Bound(getter=' + this.getter_1 + ', setter=' + this.setter_1 + ')';
  };
  Bound_0.prototype.hashCode = function () {
    var result = this.getter_1.hashCode();
    result = imul(result, 31) + (this.setter_1 == null ? 0 : this.setter_1.hashCode()) | 0;
    return result;
  };
  Bound_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Bound_0))
      return false;
    var tmp0_other_with_cast = other instanceof Bound_0 ? other : THROW_CCE();
    if (!this.getter_1.equals(tmp0_other_with_cast.getter_1))
      return false;
    if (!equals(this.setter_1, tmp0_other_with_cast.setter_1))
      return false;
    return true;
  };
  Bound_0.$metadata$ = classMeta('Bound', [Property_1]);
  function Property_1() {
  }
  Property_1.$metadata$ = interfaceMeta('Property');
  function _get_variables__748mgq($this) {
    return $this.variables_1;
  }
  function _get_functions__mnzx7u($this) {
    return $this.functions_1;
  }
  function _get_types__aoxh8o($this) {
    return $this.types_1;
  }
  function _get_parent__oo9xup($this) {
    return $this.parent_1;
  }
  function Declaration_3(parent) {
    Scope.call(this, parent);
  }
  Declaration_3.$metadata$ = classMeta('Declaration', undefined, undefined, undefined, undefined, Scope.prototype);
  function Definition_0(parent) {
    Scope.call(this, parent);
  }
  Definition_0.$metadata$ = classMeta('Definition', undefined, undefined, undefined, undefined, Scope.prototype);
  function VariablesDelegate($outer) {
    this.$this_1 = $outer;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$_0();
    tmp.variables_1 = tmp$ret$0;
  }
  VariablesDelegate.prototype.get_mex3b9_k$ = function (name, current) {
    var tmp2_elvis_lhs = this.variables_1.get_1mhr4y_k$(name);
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0;
      if (current) {
        tmp_0 = null;
      } else {
        var tmp_1 = this.$this_1.parent_1;
        var tmp0_safe_receiver = (tmp_1 == null ? true : tmp_1 instanceof Scope) ? tmp_1 : THROW_CCE();
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.variables_1;
        var tmp_2;
        if (tmp1_safe_receiver == null) {
          tmp_2 = null;
        } else {
          tmp_2 = tmp1_safe_receiver.get$default_ig9dkq_k$(name, false, 2, null);
        }
        tmp_0 = tmp_2;
      }
      tmp = tmp_0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  VariablesDelegate.prototype.get$default_ig9dkq_k$ = function (name, current, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      current = false;
    return this.get_mex3b9_k$(name, current);
  };
  VariablesDelegate.prototype.define_f87tdr_k$ = function (variable) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.variables_1;
    var tmp1_set = variable.get_name_woqyms_k$();
    tmp0_set.put_3mhbri_k$(tmp1_set, variable);
  };
  VariablesDelegate.prototype.collect_fp9wdm_k$ = function () {
    var tmp = this.$this_1.parent_1;
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof Scope) ? tmp : THROW_CCE();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.variables_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.collect_fp9wdm_k$();
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$_0();
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var map = tmp_0;
    map.putAll_mee1c3_k$(this.variables_1);
    return map;
  };
  VariablesDelegate.$metadata$ = classMeta('VariablesDelegate');
  function FunctionsDelegate($outer) {
    this.$this_1 = $outer;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$_0();
    tmp.functions_1 = tmp$ret$0;
  }
  FunctionsDelegate.prototype.get_umit0u_k$ = function (name, arity, current) {
    var tmp3_elvis_lhs = this.functions_1.get_1mhr4y_k$(new Pair(name, arity));
    var tmp;
    if (tmp3_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp = tmp$ret$0;
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var tmp_0 = tmp;
    var tmp_1;
    if (current) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$1 = emptyList();
      tmp_1 = tmp$ret$1;
    } else {
      var tmp_2 = this.$this_1.parent_1;
      var tmp0_safe_receiver = (tmp_2 == null ? true : tmp_2 instanceof Scope) ? tmp_2 : THROW_CCE();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.functions_1;
      var tmp_3;
      if (tmp1_safe_receiver == null) {
        tmp_3 = null;
      } else {
        tmp_3 = tmp1_safe_receiver.get$default_vibwnr_k$(name, arity, false, 4, null);
      }
      var tmp2_elvis_lhs = tmp_3;
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.listOf' call
        tmp$ret$2 = emptyList();
        tmp_4 = tmp$ret$2;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      tmp_1 = tmp_4;
    }
    return plus(tmp_0, tmp_1);
  };
  FunctionsDelegate.prototype.get$default_vibwnr_k$ = function (name, arity, current, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      current = false;
    return this.get_umit0u_k$(name, arity, current);
  };
  FunctionsDelegate.prototype.get_603czb_k$ = function (name, arguments_0, current) {
    var tmp$ret$13;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0_mapNotNull = this.get_umit0u_k$(name, arguments_0.get_size_woubt6_k$(), current);
    var tmp$ret$12;
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var tmp0_mapNotNullTo = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = tmp0_mapNotNull.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      var tmp$ret$10;
      // Inline function 'dev.rhovas.interpreter.environment.FunctionsDelegate.get.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$_0();
      var generics = tmp$ret$0;
      var tmp$ret$4;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.environment.FunctionsDelegate.get.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp0_all = zip(arguments_0, element.get_parameters_cl4rkd_k$());
        var tmp_0;
        if (isInterface(tmp0_all, Collection)) {
          tmp_0 = tmp0_all.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
        var tmp0_iterator_0 = tmp0_all.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          var tmp$ret$2;
          // Inline function 'dev.rhovas.interpreter.environment.FunctionsDelegate.get.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$2 = element_0.first_1.isSubtypeOf_32g6kb_k$(element_0.second_1.type_1, generics);
          if (!tmp$ret$2) {
            tmp$ret$1 = false;
            break $l$block_0;
          }
        }
        tmp$ret$1 = true;
      }
      tmp$ret$3 = tmp$ret$1;
      if (tmp$ret$3) {
        tmp = element;
      } else {
        tmp = null;
      }
      tmp$ret$4 = tmp;
      var tmp0_safe_receiver = tmp$ret$4;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$9;
        // Inline function 'kotlin.collections.mapValues' call
        var tmp$ret$8;
        // Inline function 'kotlin.collections.mapValuesTo' call
        var tmp1_mapValuesTo = LinkedHashMap_init_$Create$(mapCapacity(generics.get_size_woubt6_k$()));
        var tmp$ret$7;
        // Inline function 'kotlin.collections.associateByTo' call
        var tmp0_associateByTo = generics.get_entries_p20ztl_k$();
        var tmp0_iterator_1 = tmp0_associateByTo.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_1 = tmp0_iterator_1.next_20eer_k$();
          var tmp$ret$5;
          // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
          tmp$ret$5 = element_1.get_key_18j28a_k$();
          var tmp_2 = tmp$ret$5;
          var tmp$ret$6;
          // Inline function 'dev.rhovas.interpreter.environment.FunctionsDelegate.get.<anonymous>.<anonymous>' call
          var type = element_1.get_value_j01efc_k$();
          var tmp_3;
          if (type instanceof Variant) {
            var tmp0_elvis_lhs = type.upper_1;
            var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? type.lower_1 : tmp0_elvis_lhs;
            tmp_3 = tmp1_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Any')) : tmp1_elvis_lhs;
          } else {
            tmp_3 = type;
          }
          tmp$ret$6 = tmp_3;
          tmp1_mapValuesTo.put_3mhbri_k$(tmp_2, tmp$ret$6);
        }
        tmp$ret$7 = tmp1_mapValuesTo;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        tmp_1 = tmp0_safe_receiver.bind_9oflcx_k$(tmp$ret$9);
      }
      var tmp_4 = tmp_1;
      tmp$ret$10 = (tmp_4 == null ? true : isInterface(tmp_4, Function_1)) ? tmp_4 : THROW_CCE();
      var tmp0_safe_receiver_0 = tmp$ret$10;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_mapNotNullTo.add_1j60pz_k$(tmp0_safe_receiver_0);
        tmp$ret$11 = Unit_getInstance();
      }
    }
    tmp$ret$12 = tmp0_mapNotNullTo;
    tmp$ret$13 = tmp$ret$12;
    var candidates = tmp$ret$13;
    var tmp0_subject = candidates.get_size_woubt6_k$();
    var tmp_5;
    switch (tmp0_subject) {
      case 0:
        tmp_5 = null;
        break;
      case 1:
        tmp_5 = candidates.get_fkrdnv_k$(0);
        break;
      default:
        throw AssertionError_init_$Create$();
    }
    return tmp_5;
  };
  FunctionsDelegate.prototype.get$default_q9ul3w_k$ = function (name, arguments_0, current, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      current = false;
    return this.get_603czb_k$(name, arguments_0, current);
  };
  FunctionsDelegate.prototype.define_l7919s_k$ = function (function_0, alias) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.functions_1;
    var tmp1_getOrPut = new Pair(alias, function_0.get_parameters_cl4rkd_k$().get_size_woubt6_k$());
    var value = tmp0_getOrPut.get_1mhr4y_k$(tmp1_getOrPut);
    var tmp;
    if (value == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var answer = tmp$ret$0;
      tmp0_getOrPut.put_3mhbri_k$(tmp1_getOrPut, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$1 = tmp;
    tmp$ret$1.add_1j60pz_k$(function_0);
  };
  FunctionsDelegate.prototype.define$default_1vvya8_k$ = function (function_0, alias, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      alias = function_0.get_name_woqyms_k$();
    return this.define_l7919s_k$(function_0, alias);
  };
  FunctionsDelegate.prototype.collect_fp9wdm_k$ = function () {
    var tmp = this.$this_1.parent_1;
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof Scope) ? tmp : THROW_CCE();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.functions_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.collect_fp9wdm_k$();
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$_0();
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var map = tmp_0;
    map.putAll_mee1c3_k$(this.functions_1);
    return map;
  };
  FunctionsDelegate.$metadata$ = classMeta('FunctionsDelegate');
  function TypesDelegate($outer) {
    this.$this_1 = $outer;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$_0();
    tmp.types_1 = tmp$ret$0;
  }
  TypesDelegate.prototype.get_4u8u51_k$ = function (name) {
    var tmp2_elvis_lhs = this.types_1.get_1mhr4y_k$(name);
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp0_safe_receiver = this.$this_1.parent_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.types_1;
      tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_4u8u51_k$(name);
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  TypesDelegate.prototype.isDefined_bxumpo_k$ = function (name, current) {
    var tmp;
    if (this.types_1.containsKey_wgk31w_k$(name)) {
      tmp = true;
    } else {
      var tmp_0;
      if (!current) {
        var tmp0_safe_receiver = this.$this_1.parent_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.types_1;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.isDefined_bxumpo_k$(name, current);
        tmp_0 = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  TypesDelegate.prototype.define_b5rmah_k$ = function (type, alias) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.types_1;
    tmp0_set.put_3mhbri_k$(alias, type);
  };
  TypesDelegate.prototype.define$default_53rrc7_k$ = function (type, alias, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      alias = type.get_base_wojaxm_k$().name_1;
    return this.define_b5rmah_k$(type, alias);
  };
  TypesDelegate.prototype.collect_fp9wdm_k$ = function () {
    var tmp0_safe_receiver = this.$this_1.parent_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.types_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.collect_fp9wdm_k$();
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$_0();
      tmp = tmp$ret$0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var map = tmp;
    map.putAll_mee1c3_k$(this.types_1);
    return map;
  };
  TypesDelegate.$metadata$ = classMeta('TypesDelegate');
  function Scope(parent) {
    this.parent_1 = parent;
    this.variables_1 = new VariablesDelegate(this);
    this.functions_1 = new FunctionsDelegate(this);
    this.types_1 = new TypesDelegate(this);
  }
  Scope.prototype.get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  Scope.prototype.get_functions_66tuk2_k$ = function () {
    return this.functions_1;
  };
  Scope.prototype.get_types_izd7io_k$ = function () {
    return this.types_1;
  };
  Scope.prototype.toString = function () {
    var tmp0_safe_receiver = this.parent_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.environment.Scope.toString.<anonymous>' call
      tmp$ret$0 = 'Scope@' + toString_1(hashCode(tmp0_safe_receiver), 16);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return 'Scope(' + ('parent=' + tmp + ', ') + ('variables=' + this.variables_1.collect_fp9wdm_k$() + ', ') + ('functions=' + this.functions_1.collect_fp9wdm_k$()) + ('types=' + this.types_1.collect_fp9wdm_k$()) + ')';
  };
  Scope.$metadata$ = classMeta('Scope');
  function FunctionsDelegate_0($outer) {
    this.$this_1 = $outer;
  }
  FunctionsDelegate_0.prototype.get_fseki4_k$ = function (name, arity) {
    return this.$this_1.getFunction_2rx6ss_k$(name, arity);
  };
  FunctionsDelegate_0.prototype.get_ffk12n_k$ = function (name, arguments_0) {
    return this.$this_1.getFunction_wz64br_k$(name, arguments_0);
  };
  FunctionsDelegate_0.$metadata$ = classMeta('FunctionsDelegate');
  function PropertiesDelegate_0($outer) {
    this.$this_1 = $outer;
  }
  PropertiesDelegate_0.prototype.get_4u8u51_k$ = function (name) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$0 = emptyList();
    var tmp0_safe_receiver = this.$this_1.methods_1.get_ffk12n_k$(name, tmp$ret$0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.environment.PropertiesDelegate.get.<anonymous>' call
      tmp$ret$1 = new Declaration_2(tmp0_safe_receiver, this.$this_1.methods_1.get_ffk12n_k$(name, listOf(tmp0_safe_receiver.get_returns_jfk3fe_k$())));
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  };
  PropertiesDelegate_0.$metadata$ = classMeta('PropertiesDelegate');
  function MethodsDelegate_0($outer) {
    this.$this_1 = $outer;
  }
  MethodsDelegate_0.prototype.get_ffk12n_k$ = function (name, arguments_0) {
    var tmp0_safe_receiver = this.$this_1.functions_1.get_ffk12n_k$(name, plus(listOf(this.$this_1), arguments_0));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.environment.MethodsDelegate.get.<anonymous>' call
      tmp$ret$0 = new Declaration_1(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  MethodsDelegate_0.$metadata$ = classMeta('MethodsDelegate');
  function Base(name, generics, inherits, scope) {
    this.name_1 = name;
    this.generics_1 = generics;
    this.inherits_1 = inherits;
    this.scope_1 = scope;
    this.reference_1 = new Reference(this, this.generics_1);
  }
  Base.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Base.prototype.get_generics_1v316j_k$ = function () {
    return this.generics_1;
  };
  Base.prototype.get_inherits_s1vexr_k$ = function () {
    return this.inherits_1;
  };
  Base.prototype.get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  Base.prototype.get_reference_6sahcu_k$ = function () {
    return this.reference_1;
  };
  Base.prototype.toString = function () {
    return 'Base(' + ("name='" + this.name_1 + "', ") + ('generics=' + this.generics_1 + ', ') + ('inherits=' + this.inherits_1 + ', ') + ('scope=' + this.scope_1 + ', ') + ')';
  };
  Base.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof Base) {
      tmp_1 = this.name_1 === other.name_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(this.generics_1, other.generics_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.inherits_1, other.inherits_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Base.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  Base.prototype.component2_7eebsb_k$ = function () {
    return this.generics_1;
  };
  Base.prototype.component3_7eebsa_k$ = function () {
    return this.inherits_1;
  };
  Base.prototype.component4_7eebs9_k$ = function () {
    return this.scope_1;
  };
  Base.prototype.copy_cz80dy_k$ = function (name, generics, inherits, scope) {
    return new Base(name, generics, inherits, scope);
  };
  Base.prototype.copy$default_qd4dmx_k$ = function (name, generics, inherits, scope, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      generics = this.generics_1;
    if (!(($mask0 & 4) === 0))
      inherits = this.inherits_1;
    if (!(($mask0 & 8) === 0))
      scope = this.scope_1;
    return this.copy_cz80dy_k$(name, generics, inherits, scope);
  };
  Base.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.generics_1) | 0;
    result = imul(result, 31) + hashCode(this.inherits_1) | 0;
    result = imul(result, 31) + hashCode(this.scope_1) | 0;
    return result;
  };
  Base.$metadata$ = classMeta('Base');
  function Reference(base, generics) {
    Type_0.call(this, base);
    this.base_2 = base;
    this.generics_1 = generics;
  }
  Reference.prototype.get_base_wojaxm_k$ = function () {
    return this.base_2;
  };
  Reference.prototype.get_generics_1v316j_k$ = function () {
    return this.generics_1;
  };
  Reference.prototype.getFunction_2rx6ss_k$ = function (name, arity) {
    var tmp;
    if (this.base_2.name_1 === 'Dynamic') {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      var tmp_0 = tmp$ret$0;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = numberRangeToNumber(1, arity);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var inductionVariable = tmp0_map.first_1;
      var last = tmp0_map.last_1;
      if (inductionVariable <= last)
        do {
          var item = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$1;
          // Inline function 'dev.rhovas.interpreter.environment.Reference.getFunction.<anonymous>' call
          tmp$ret$1 = new Declaration_4('val_' + item, this, false);
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
        }
         while (!(item === last));
      tmp$ret$2 = tmp0_mapTo;
      tmp$ret$3 = tmp$ret$2;
      var tmp_1 = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$4 = emptyList();
      tmp = listOf(new Declaration_0(name, tmp_0, tmp_1, this, tmp$ret$4));
    } else {
      tmp = this.base_2.scope_1.functions_1.get$default_vibwnr_k$(name, arity, false, 4, null);
    }
    return tmp;
  };
  Reference.prototype.getFunction_wz64br_k$ = function (name, arguments_0) {
    var tmp;
    if (this.base_2.name_1 === 'Dynamic') {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      var tmp_0 = tmp$ret$0;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = get_indices(arguments_0);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var inductionVariable = tmp0_map.first_1;
      var last = tmp0_map.last_1;
      if (inductionVariable <= last)
        do {
          var item = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$1;
          // Inline function 'dev.rhovas.interpreter.environment.Reference.getFunction.<anonymous>' call
          tmp$ret$1 = new Declaration_4('val_' + item, this, false);
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
        }
         while (!(item === last));
      tmp$ret$2 = tmp0_mapTo;
      tmp$ret$3 = tmp$ret$2;
      var tmp_1 = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$4 = emptyList();
      tmp = new Declaration_0(name, tmp_0, tmp_1, this, tmp$ret$4);
    } else {
      tmp = this.base_2.scope_1.functions_1.get$default_q9ul3w_k$(name, arguments_0, false, 4, null);
    }
    return tmp;
  };
  Reference.prototype.bind_9oflcx_k$ = function (parameters) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.generics_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.environment.Reference.bind.<anonymous>' call
      tmp$ret$0 = item.bind_9oflcx_k$(parameters);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return new Reference(this.base_2, tmp$ret$2);
  };
  Reference.prototype.isSubtypeOf_ngr8tl_k$ = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof Reference) {
      var tmp_0;
      if ((this.base_2.name_1 === 'Dynamic' ? true : other.get_base_wojaxm_k$().name_1 === 'Dynamic') ? true : other.get_base_wojaxm_k$().name_1 === 'Any') {
        tmp_0 = true;
      } else if (this.base_2.name_1 === other.get_base_wojaxm_k$().name_1) {
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.all' call
          var tmp0_all = zip(this.generics_1, other.generics_1);
          var tmp_1;
          if (isInterface(tmp0_all, Collection)) {
            tmp_1 = tmp0_all.isEmpty_y1axqb_k$();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
          var tmp0_iterator = tmp0_all.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            var tmp$ret$1;
            // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>' call
            tmp$ret$1 = element.first_1.isSubtypeOf_ngr8tl_k$(element.second_1) ? element.second_1.isSubtypeOf_ngr8tl_k$(element.first_1) : false;
            if (!tmp$ret$1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
          }
          tmp$ret$0 = true;
        }
        tmp_0 = tmp$ret$0;
      } else {
        var tmp$ret$4;
        // Inline function 'kotlin.collections.associate' call
        var tmp1_associate = zip(this.base_2.generics_1, this.generics_1);
        var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp1_associate, 10)), 16);
        var tmp$ret$3;
        // Inline function 'kotlin.collections.associateTo' call
        var tmp1_associateTo = LinkedHashMap_init_$Create$(capacity);
        var tmp0_iterator_0 = tmp1_associate.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp$ret$2;
          // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>' call
          tmp$ret$2 = new Pair(element_0.first_1.name_1, element_0.second_1);
          var tmp0_plusAssign = tmp$ret$2;
          tmp1_associateTo.put_3mhbri_k$(tmp0_plusAssign.first_1, tmp0_plusAssign.second_1);
        }
        tmp$ret$3 = tmp1_associateTo;
        tmp$ret$4 = tmp$ret$3;
        var parameters = tmp$ret$4;
        var tmp$ret$5;
        $l$block_2: {
          // Inline function 'kotlin.collections.any' call
          var tmp2_any = this.base_2.inherits_1;
          var tmp_2;
          if (isInterface(tmp2_any, Collection)) {
            tmp_2 = tmp2_any.isEmpty_y1axqb_k$();
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp$ret$5 = false;
            break $l$block_2;
          }
          var tmp0_iterator_1 = tmp2_any.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_1 = tmp0_iterator_1.next_20eer_k$();
            var tmp$ret$6;
            // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>' call
            tmp$ret$6 = element_1.bind_9oflcx_k$(parameters).isSubtypeOf_ngr8tl_k$(other);
            if (tmp$ret$6) {
              tmp$ret$5 = true;
              break $l$block_2;
            }
          }
          tmp$ret$5 = false;
        }
        tmp_0 = tmp$ret$5;
      }
      tmp = tmp_0;
    } else {
      if (tmp0_subject instanceof Generic) {
        tmp = this.base_2.name_1 === 'Dynamic';
      } else {
        if (tmp0_subject instanceof Variant) {
          var tmp_3;
          var tmp1_safe_receiver = other.lower_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.isSubtypeOf_ngr8tl_k$(this);
          if (tmp2_elvis_lhs == null ? true : tmp2_elvis_lhs) {
            var tmp3_safe_receiver = other.upper_1;
            var tmp_4;
            if (tmp3_safe_receiver == null) {
              tmp_4 = null;
            } else {
              var tmp$ret$8;
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$7;
              // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>' call
              tmp$ret$7 = this.isSubtypeOf_ngr8tl_k$(tmp3_safe_receiver);
              tmp$ret$8 = tmp$ret$7;
              tmp_4 = tmp$ret$8;
            }
            var tmp4_elvis_lhs = tmp_4;
            tmp_3 = tmp4_elvis_lhs == null ? true : tmp4_elvis_lhs;
          } else {
            tmp_3 = false;
          }
          tmp = tmp_3;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  Reference.prototype.isSubtypeOf_32g6kb_k$ = function (other, bindings) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof Reference) {
      var tmp_0;
      if ((this.base_2.name_1 === 'Dynamic' ? true : other.get_base_wojaxm_k$().name_1 === 'Dynamic') ? true : other.get_base_wojaxm_k$().name_1 === 'Any') {
        tmp_0 = true;
      } else if (this.base_2.name_1 === other.get_base_wojaxm_k$().name_1) {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlin.collections.all' call
          var tmp0_all = zip(this.generics_1, other.generics_1);
          var tmp_1;
          if (isInterface(tmp0_all, Collection)) {
            tmp_1 = tmp0_all.isEmpty_y1axqb_k$();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$0 = true;
            break $l$block;
          }
          var tmp0_iterator = tmp0_all.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            var type = element.component1_7eebsc_k$();
            var other_0 = element.component2_7eebsb_k$();
            var tmp_2;
            if (other_0 instanceof Generic) {
              var binding = bindings.get_1mhr4y_k$(other_0.name_1);
              var tmp_3;
              if (binding == null) {
                var tmp$ret$1;
                // Inline function 'kotlin.also' call
                var tmp0_also = type.isSubtypeOf_32g6kb_k$(other_0, bindings);
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>.<anonymous>' call
                var tmp_4 = bindings.get_1mhr4y_k$(other_0.name_1);
                if (tmp_4 instanceof Variant) {
                  // Inline function 'kotlin.collections.set' call
                  var tmp0_set = other_0.name_1;
                  var tmp1_set = new Variant(type, type);
                  bindings.put_3mhbri_k$(tmp0_set, tmp1_set);
                }
                tmp$ret$1 = tmp0_also;
                tmp_3 = tmp$ret$1;
              } else {
                if (binding instanceof Variant) {
                  var tmp$ret$7;
                  // Inline function 'kotlin.takeIf' call
                  var tmp_5;
                  var tmp0_safe_receiver = binding.lower_1;
                  var tmp_6;
                  if (tmp0_safe_receiver == null) {
                    tmp_6 = null;
                  } else {
                    var tmp$ret$3;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var tmp$ret$2;
                    // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>.<anonymous>' call
                    tmp$ret$2 = tmp0_safe_receiver.isSubtypeOf_ngr8tl_k$(type);
                    tmp$ret$3 = tmp$ret$2;
                    tmp_6 = tmp$ret$3;
                  }
                  var tmp1_elvis_lhs = tmp_6;
                  if (tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs) {
                    var tmp2_safe_receiver = binding.upper_1;
                    var tmp_7;
                    if (tmp2_safe_receiver == null) {
                      tmp_7 = null;
                    } else {
                      var tmp$ret$5;
                      // Inline function 'kotlin.let' call
                      // Inline function 'kotlin.contracts.contract' call
                      var tmp$ret$4;
                      // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>.<anonymous>' call
                      tmp$ret$4 = type.isSubtypeOf_ngr8tl_k$(tmp2_safe_receiver);
                      tmp$ret$5 = tmp$ret$4;
                      tmp_7 = tmp$ret$5;
                    }
                    var tmp3_elvis_lhs = tmp_7;
                    tmp_5 = tmp3_elvis_lhs == null ? true : tmp3_elvis_lhs;
                  } else {
                    tmp_5 = false;
                  }
                  var tmp1_takeIf = tmp_5;
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp_8;
                  var tmp$ret$6;
                  // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>.<anonymous>' call
                  tmp$ret$6 = true;
                  if (tmp$ret$6) {
                    tmp_8 = tmp1_takeIf;
                  } else {
                    tmp_8 = null;
                  }
                  tmp$ret$7 = tmp_8;
                  var tmp4_safe_receiver = tmp$ret$7;
                  var tmp_9;
                  if (tmp4_safe_receiver == null) {
                    tmp_9 = null;
                  } else {
                    var tmp$ret$8;
                    // Inline function 'kotlin.also' call
                    // Inline function 'kotlin.contracts.contract' call
                    // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>.<anonymous>' call
                    // Inline function 'kotlin.collections.set' call
                    var tmp0_set_0 = other_0.name_1;
                    var tmp1_set_0 = new Variant(type, type);
                    bindings.put_3mhbri_k$(tmp0_set_0, tmp1_set_0);
                    tmp$ret$8 = tmp4_safe_receiver;
                    tmp_9 = tmp$ret$8;
                  }
                  var tmp5_elvis_lhs = tmp_9;
                  tmp_3 = tmp5_elvis_lhs == null ? false : tmp5_elvis_lhs;
                } else {
                  tmp_3 = type.isSubtypeOf_32g6kb_k$(other_0, bindings) ? other_0.isSubtypeOf_32g6kb_k$(type, bindings) : false;
                }
              }
              tmp_2 = tmp_3;
            } else {
              tmp_2 = type.isSubtypeOf_32g6kb_k$(other_0, bindings) ? other_0.isSubtypeOf_32g6kb_k$(type, bindings) : false;
            }
            return tmp_2;
          }
          tmp$ret$0 = true;
        }
        tmp_0 = tmp$ret$0;
      } else {
        var tmp$ret$11;
        // Inline function 'kotlin.collections.associate' call
        var tmp1_associate = zip(this.base_2.generics_1, this.generics_1);
        var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp1_associate, 10)), 16);
        var tmp$ret$10;
        // Inline function 'kotlin.collections.associateTo' call
        var tmp1_associateTo = LinkedHashMap_init_$Create$(capacity);
        var tmp0_iterator_0 = tmp1_associate.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp$ret$9;
          // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>' call
          tmp$ret$9 = new Pair(element_0.first_1.name_1, element_0.second_1);
          var tmp0_plusAssign = tmp$ret$9;
          tmp1_associateTo.put_3mhbri_k$(tmp0_plusAssign.first_1, tmp0_plusAssign.second_1);
        }
        tmp$ret$10 = tmp1_associateTo;
        tmp$ret$11 = tmp$ret$10;
        var parameters = tmp$ret$11;
        var tmp$ret$12;
        $l$block_1: {
          // Inline function 'kotlin.collections.any' call
          var tmp2_any = this.base_2.inherits_1;
          var tmp_10;
          if (isInterface(tmp2_any, Collection)) {
            tmp_10 = tmp2_any.isEmpty_y1axqb_k$();
          } else {
            tmp_10 = false;
          }
          if (tmp_10) {
            tmp$ret$12 = false;
            break $l$block_1;
          }
          var tmp0_iterator_1 = tmp2_any.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_1 = tmp0_iterator_1.next_20eer_k$();
            var tmp$ret$13;
            // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>' call
            tmp$ret$13 = element_1.bind_9oflcx_k$(parameters).isSubtypeOf_32g6kb_k$(other, bindings);
            if (tmp$ret$13) {
              tmp$ret$12 = true;
              break $l$block_1;
            }
          }
          tmp$ret$12 = false;
        }
        tmp_0 = tmp$ret$12;
      }
      tmp = tmp_0;
    } else {
      if (tmp0_subject instanceof Generic) {
        var tmp_11;
        if (this.base_2.name_1 === 'Dynamic') {
          var tmp$ret$14;
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>' call
          // Inline function 'kotlin.collections.set' call
          var tmp0_set_1 = other.name_1;
          bindings.put_3mhbri_k$(tmp0_set_1, this);
          tmp$ret$14 = true;
          tmp_11 = tmp$ret$14;
        } else if (other.get_base_wojaxm_k$().name_1 === 'Dynamic') {
          var tmp$ret$15;
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>' call
          // Inline function 'kotlin.collections.set' call
          var tmp0_set_2 = other.name_1;
          bindings.put_3mhbri_k$(tmp0_set_2, other);
          tmp$ret$15 = true;
          tmp_11 = tmp$ret$15;
        } else if (bindings.containsKey_wgk31w_k$(other.name_1)) {
          tmp_11 = this.isSubtypeOf_32g6kb_k$(ensureNotNull(bindings.get_1mhr4y_k$(other.name_1)), bindings);
        } else {
          var tmp$ret$17;
          // Inline function 'kotlin.takeIf' call
          var tmp3_takeIf = this.isSubtypeOf_32g6kb_k$(other.bound_1, bindings);
          // Inline function 'kotlin.contracts.contract' call
          var tmp_12;
          var tmp$ret$16;
          // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>' call
          tmp$ret$16 = tmp3_takeIf;
          if (tmp$ret$16) {
            tmp_12 = tmp3_takeIf;
          } else {
            tmp_12 = null;
          }
          tmp$ret$17 = tmp_12;
          var tmp1_safe_receiver = tmp$ret$17;
          var tmp_13;
          if (tmp1_safe_receiver == null) {
            tmp_13 = null;
          } else {
            var tmp$ret$18;
            // Inline function 'kotlin.also' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>' call
            // Inline function 'kotlin.collections.set' call
            var tmp0_set_3 = other.name_1;
            var tmp1_set_1 = new Variant(this, null);
            bindings.put_3mhbri_k$(tmp0_set_3, tmp1_set_1);
            tmp$ret$18 = tmp1_safe_receiver;
            tmp_13 = tmp$ret$18;
          }
          var tmp2_elvis_lhs = tmp_13;
          tmp_11 = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
        }
        tmp = tmp_11;
      } else {
        if (tmp0_subject instanceof Variant) {
          var tmp3_safe_receiver = other.upper_1;
          var tmp_14;
          if (tmp3_safe_receiver == null) {
            tmp_14 = null;
          } else {
            var tmp$ret$20;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$19;
            // Inline function 'dev.rhovas.interpreter.environment.Reference.isSubtypeOf.<anonymous>' call
            tmp$ret$19 = this.isSubtypeOf_32g6kb_k$(tmp3_safe_receiver, bindings);
            tmp$ret$20 = tmp$ret$19;
            tmp_14 = tmp$ret$20;
          }
          var tmp4_elvis_lhs = tmp_14;
          tmp = tmp4_elvis_lhs == null ? true : tmp4_elvis_lhs;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  Reference.prototype.toString = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = this.generics_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'dev.rhovas.interpreter.environment.Reference.toString.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !tmp0_takeIf.isEmpty_y1axqb_k$();
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = joinToString$default(tmp0_safe_receiver, ', ', '<', '>', 0, null, null, 56, null);
    }
    var tmp1_elvis_lhs = tmp_0;
    return this.base_2.name_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  Reference.prototype.component1_7eebsc_k$ = function () {
    return this.base_2;
  };
  Reference.prototype.component2_7eebsb_k$ = function () {
    return this.generics_1;
  };
  Reference.prototype.copy_sts1py_k$ = function (base, generics) {
    return new Reference(base, generics);
  };
  Reference.prototype.copy$default_et6ytn_k$ = function (base, generics, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      base = this.base_2;
    if (!(($mask0 & 2) === 0))
      generics = this.generics_1;
    return this.copy_sts1py_k$(base, generics);
  };
  Reference.prototype.hashCode = function () {
    var result = this.base_2.hashCode();
    result = imul(result, 31) + hashCode(this.generics_1) | 0;
    return result;
  };
  Reference.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Reference))
      return false;
    var tmp0_other_with_cast = other instanceof Reference ? other : THROW_CCE();
    if (!this.base_2.equals(tmp0_other_with_cast.base_2))
      return false;
    if (!equals(this.generics_1, tmp0_other_with_cast.generics_1))
      return false;
    return true;
  };
  Reference.$metadata$ = classMeta('Reference', undefined, undefined, undefined, undefined, Type_0.prototype);
  function Generic(name, bound) {
    Type_0.call(this, bound.get_base_wojaxm_k$());
    this.name_1 = name;
    this.bound_1 = bound;
  }
  Generic.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Generic.prototype.get_bound_ipamvp_k$ = function () {
    return this.bound_1;
  };
  Generic.prototype.getFunction_2rx6ss_k$ = function (name, arity) {
    return this.bound_1.getFunction_2rx6ss_k$(name, arity);
  };
  Generic.prototype.getFunction_wz64br_k$ = function (name, arguments_0) {
    return this.bound_1.getFunction_wz64br_k$(name, arguments_0);
  };
  Generic.prototype.bind_9oflcx_k$ = function (parameters) {
    var tmp0_elvis_lhs = parameters.get_1mhr4y_k$(this.name_1);
    return tmp0_elvis_lhs == null ? this.bound_1 : tmp0_elvis_lhs;
  };
  Generic.prototype.isSubtypeOf_ngr8tl_k$ = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof Generic) {
      tmp = this.name_1 === other.name_1;
    } else {
      tmp = this.bound_1.isSubtypeOf_ngr8tl_k$(other);
    }
    return tmp;
  };
  Generic.prototype.isSubtypeOf_32g6kb_k$ = function (other, bindings) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof Generic) {
      var tmp_0;
      if (bindings.containsKey_wgk31w_k$(this.name_1)) {
        tmp_0 = ensureNotNull(bindings.get_1mhr4y_k$(this.name_1)).isSubtypeOf_ngr8tl_k$(other);
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.takeIf' call
        var tmp0_takeIf = this.bound_1.isSubtypeOf_ngr8tl_k$(other.bound_1);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.environment.Generic.isSubtypeOf.<anonymous>' call
        tmp$ret$0 = tmp0_takeIf;
        if (tmp$ret$0) {
          tmp_1 = tmp0_takeIf;
        } else {
          tmp_1 = null;
        }
        tmp$ret$1 = tmp_1;
        var tmp1_safe_receiver = tmp$ret$1;
        var tmp_2;
        if (tmp1_safe_receiver == null) {
          tmp_2 = null;
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.rhovas.interpreter.environment.Generic.isSubtypeOf.<anonymous>' call
          // Inline function 'kotlin.collections.set' call
          var tmp0_set = this.name_1;
          bindings.put_3mhbri_k$(tmp0_set, other);
          tmp$ret$2 = tmp1_safe_receiver;
          tmp_2 = tmp$ret$2;
        }
        var tmp2_elvis_lhs = tmp_2;
        tmp_0 = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.takeIf' call
      var tmp1_takeIf = this.bound_1.isSubtypeOf_ngr8tl_k$(other);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_3;
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.environment.Generic.isSubtypeOf.<anonymous>' call
      tmp$ret$3 = tmp1_takeIf;
      if (tmp$ret$3) {
        tmp_3 = tmp1_takeIf;
      } else {
        tmp_3 = null;
      }
      tmp$ret$4 = tmp_3;
      var tmp3_safe_receiver = tmp$ret$4;
      var tmp_4;
      if (tmp3_safe_receiver == null) {
        tmp_4 = null;
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.environment.Generic.isSubtypeOf.<anonymous>' call
        // Inline function 'kotlin.collections.set' call
        var tmp0_set_0 = this.name_1;
        bindings.put_3mhbri_k$(tmp0_set_0, other);
        tmp$ret$5 = tmp3_safe_receiver;
        tmp_4 = tmp$ret$5;
      }
      var tmp4_elvis_lhs = tmp_4;
      tmp = tmp4_elvis_lhs == null ? false : tmp4_elvis_lhs;
    }
    return tmp;
  };
  Generic.prototype.toString = function () {
    return this.name_1 + ': ' + this.bound_1;
  };
  Generic.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  Generic.prototype.component2_7eebsb_k$ = function () {
    return this.bound_1;
  };
  Generic.prototype.copy_vgrxlo_k$ = function (name, bound) {
    return new Generic(name, bound);
  };
  Generic.prototype.copy$default_b9b8rl_k$ = function (name, bound, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      bound = this.bound_1;
    return this.copy_vgrxlo_k$(name, bound);
  };
  Generic.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.bound_1) | 0;
    return result;
  };
  Generic.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Generic))
      return false;
    var tmp0_other_with_cast = other instanceof Generic ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.bound_1, tmp0_other_with_cast.bound_1))
      return false;
    return true;
  };
  Generic.$metadata$ = classMeta('Generic', undefined, undefined, undefined, undefined, Type_0.prototype);
  function Variant(lower, upper) {
    var tmp0_elvis_lhs = upper;
    Type_0.call(this, (tmp0_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Any')) : tmp0_elvis_lhs).get_base_wojaxm_k$());
    this.lower_1 = lower;
    this.upper_1 = upper;
  }
  Variant.prototype.get_lower_iusm3c_k$ = function () {
    return this.lower_1;
  };
  Variant.prototype.get_upper_izr989_k$ = function () {
    return this.upper_1;
  };
  Variant.prototype.getFunction_2rx6ss_k$ = function (name, arity) {
    var tmp0_elvis_lhs = this.upper_1;
    return (tmp0_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Any')) : tmp0_elvis_lhs).getFunction_2rx6ss_k$(name, arity);
  };
  Variant.prototype.getFunction_wz64br_k$ = function (name, arguments_0) {
    var tmp0_elvis_lhs = this.upper_1;
    return (tmp0_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Any')) : tmp0_elvis_lhs).getFunction_wz64br_k$(name, arguments_0);
  };
  Variant.prototype.bind_9oflcx_k$ = function (parameters) {
    var tmp0_safe_receiver = this.lower_1;
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bind_9oflcx_k$(parameters);
    var tmp1_safe_receiver = this.upper_1;
    return new Variant(tmp, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bind_9oflcx_k$(parameters));
  };
  Variant.prototype.isSubtypeOf_ngr8tl_k$ = function (other) {
    var tmp0_elvis_lhs = this.upper_1;
    return (tmp0_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Any')) : tmp0_elvis_lhs).isSubtypeOf_ngr8tl_k$(other);
  };
  Variant.prototype.isSubtypeOf_32g6kb_k$ = function (other, bindings) {
    var tmp0_elvis_lhs = this.upper_1;
    return (tmp0_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Any')) : tmp0_elvis_lhs).isSubtypeOf_32g6kb_k$(other, bindings);
  };
  Variant.prototype.component1_7eebsc_k$ = function () {
    return this.lower_1;
  };
  Variant.prototype.component2_7eebsb_k$ = function () {
    return this.upper_1;
  };
  Variant.prototype.copy_lxytij_k$ = function (lower, upper) {
    return new Variant(lower, upper);
  };
  Variant.prototype.copy$default_24q85s_k$ = function (lower, upper, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      lower = this.lower_1;
    if (!(($mask0 & 2) === 0))
      upper = this.upper_1;
    return this.copy_lxytij_k$(lower, upper);
  };
  Variant.prototype.toString = function () {
    return 'Variant(lower=' + this.lower_1 + ', upper=' + this.upper_1 + ')';
  };
  Variant.prototype.hashCode = function () {
    var result = this.lower_1 == null ? 0 : hashCode(this.lower_1);
    result = imul(result, 31) + (this.upper_1 == null ? 0 : hashCode(this.upper_1)) | 0;
    return result;
  };
  Variant.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Variant))
      return false;
    var tmp0_other_with_cast = other instanceof Variant ? other : THROW_CCE();
    if (!equals(this.lower_1, tmp0_other_with_cast.lower_1))
      return false;
    if (!equals(this.upper_1, tmp0_other_with_cast.upper_1))
      return false;
    return true;
  };
  Variant.$metadata$ = classMeta('Variant', undefined, undefined, undefined, undefined, Type_0.prototype);
  function Type_0(base) {
    this.base_1 = base;
    this.functions_1 = new FunctionsDelegate_0(this);
    this.properties_1 = new PropertiesDelegate_0(this);
    this.methods_1 = new MethodsDelegate_0(this);
  }
  Type_0.prototype.get_base_wojaxm_k$ = function () {
    return this.base_1;
  };
  Type_0.prototype.get_functions_66tuk2_k$ = function () {
    return this.functions_1;
  };
  Type_0.prototype.get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  Type_0.prototype.get_methods_h2gczt_k$ = function () {
    return this.methods_1;
  };
  Type_0.$metadata$ = classMeta('Type');
  function Declaration_4(name, type, mutable) {
    this.name_1 = name;
    this.type_1 = type;
    this.mutable_1 = mutable;
  }
  Declaration_4.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Declaration_4.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Declaration_4.prototype.get_mutable_on1kxp_k$ = function () {
    return this.mutable_1;
  };
  Declaration_4.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  Declaration_4.prototype.component2_7eebsb_k$ = function () {
    return this.type_1;
  };
  Declaration_4.prototype.component3_7eebsa_k$ = function () {
    return this.mutable_1;
  };
  Declaration_4.prototype.copy_ykxbai_k$ = function (name, type, mutable) {
    return new Declaration_4(name, type, mutable);
  };
  Declaration_4.prototype.copy$default_nuz3bd_k$ = function (name, type, mutable, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      type = this.type_1;
    if (!(($mask0 & 4) === 0))
      mutable = this.mutable_1;
    return this.copy_ykxbai_k$(name, type, mutable);
  };
  Declaration_4.prototype.toString = function () {
    return 'Declaration(name=' + this.name_1 + ', type=' + this.type_1 + ', mutable=' + this.mutable_1 + ')';
  };
  Declaration_4.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.type_1) | 0;
    result = imul(result, 31) + (this.mutable_1 | 0) | 0;
    return result;
  };
  Declaration_4.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Declaration_4))
      return false;
    var tmp0_other_with_cast = other instanceof Declaration_4 ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.type_1, tmp0_other_with_cast.type_1))
      return false;
    if (!(this.mutable_1 === tmp0_other_with_cast.mutable_1))
      return false;
    return true;
  };
  Declaration_4.$metadata$ = classMeta('Declaration', [Variable_2]);
  function Definition_1(declaration) {
    this.declaration_1 = declaration;
  }
  Definition_1.prototype.get_declaration_jnio6n_k$ = function () {
    return this.declaration_1;
  };
  Definition_1.prototype.get_mutable_on1kxp_k$ = function () {
    return this.declaration_1.mutable_1;
  };
  Definition_1.prototype.get_name_woqyms_k$ = function () {
    return this.declaration_1.name_1;
  };
  Definition_1.prototype.get_type_wovaf7_k$ = function () {
    return this.declaration_1.type_1;
  };
  Definition_1.prototype.set_value_8rvt4_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  Definition_1.prototype.get_value_j01efc_k$ = function () {
    var tmp = this.value_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('value');
    }
  };
  Definition_1.prototype.component1_7eebsc_k$ = function () {
    return this.declaration_1;
  };
  Definition_1.prototype.copy_7jtxox_k$ = function (declaration) {
    return new Definition_1(declaration);
  };
  Definition_1.prototype.copy$default_zvru3_k$ = function (declaration, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      declaration = this.declaration_1;
    return this.copy_7jtxox_k$(declaration);
  };
  Definition_1.prototype.toString = function () {
    return 'Definition(declaration=' + this.declaration_1 + ')';
  };
  Definition_1.prototype.hashCode = function () {
    return this.declaration_1.hashCode();
  };
  Definition_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Definition_1))
      return false;
    var tmp0_other_with_cast = other instanceof Definition_1 ? other : THROW_CCE();
    if (!this.declaration_1.equals(tmp0_other_with_cast.declaration_1))
      return false;
    return true;
  };
  Definition_1.$metadata$ = classMeta('Definition', [Variable_2]);
  function Variable_2() {
  }
  Variable_2.$metadata$ = interfaceMeta('Variable');
  function EvaluateException(summary, details, range, context) {
    Exception_init_$Init$('' + range.line_1 + ':' + range.column_1 + '-' + (range.column_1 + range.length_1 | 0) + ': ' + summary, this);
    this.summary_1 = summary;
    this.details_1 = details;
    this.range_1 = range;
    this.context_1 = context;
    captureStack(this, EvaluateException);
  }
  EvaluateException.prototype.get_summary_tgfqkj_k$ = function () {
    return this.summary_1;
  };
  EvaluateException.prototype.get_details_r0zbrt_k$ = function () {
    return this.details_1;
  };
  EvaluateException.prototype.get_range_ixu978_k$ = function () {
    return this.range_1;
  };
  EvaluateException.prototype.get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  EvaluateException.prototype.component1_7eebsc_k$ = function () {
    return this.summary_1;
  };
  EvaluateException.prototype.component2_7eebsb_k$ = function () {
    return this.details_1;
  };
  EvaluateException.prototype.component3_7eebsa_k$ = function () {
    return this.range_1;
  };
  EvaluateException.prototype.component4_7eebs9_k$ = function () {
    return this.context_1;
  };
  EvaluateException.prototype.copy_ufkztd_k$ = function (summary, details, range, context) {
    return new EvaluateException(summary, details, range, context);
  };
  EvaluateException.prototype.copy$default_hm2lgm_k$ = function (summary, details, range, context, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      summary = this.summary_1;
    if (!(($mask0 & 2) === 0))
      details = this.details_1;
    if (!(($mask0 & 4) === 0))
      range = this.range_1;
    if (!(($mask0 & 8) === 0))
      context = this.context_1;
    return this.copy_ufkztd_k$(summary, details, range, context);
  };
  EvaluateException.prototype.toString = function () {
    return 'EvaluateException(summary=' + this.summary_1 + ', details=' + this.details_1 + ', range=' + this.range_1 + ', context=' + this.context_1 + ')';
  };
  EvaluateException.prototype.hashCode = function () {
    var result = getStringHashCode(this.summary_1);
    result = imul(result, 31) + getStringHashCode(this.details_1) | 0;
    result = imul(result, 31) + this.range_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.context_1) | 0;
    return result;
  };
  EvaluateException.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EvaluateException))
      return false;
    var tmp0_other_with_cast = other instanceof EvaluateException ? other : THROW_CCE();
    if (!(this.summary_1 === tmp0_other_with_cast.summary_1))
      return false;
    if (!(this.details_1 === tmp0_other_with_cast.details_1))
      return false;
    if (!this.range_1.equals(tmp0_other_with_cast.range_1))
      return false;
    if (!equals(this.context_1, tmp0_other_with_cast.context_1))
      return false;
    return true;
  };
  EvaluateException.$metadata$ = classMeta('EvaluateException', undefined, undefined, undefined, undefined, Exception.prototype);
  function Evaluator$Lambda$invoke$lambda(this$0, $arguments) {
    return function () {
      var tmp;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp0_isNotEmpty = this$0.ast_1.parameters_1;
      tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
      if (tmp$ret$0) {
        var inductionVariable = 0;
        var last = this$0.ast_1.parameters_1.get_size_woubt6_k$() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var variable = new Definition_1(this$0.ast_1.parameters_1.get_fkrdnv_k$(i));
            variable.value_1 = $arguments.get_fkrdnv_k$(i).third_1;
            this$0.evaluator_1.scope_1.variables_1.define_f87tdr_k$(variable);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if ($arguments.get_size_woubt6_k$() === 1) {
          var variable_0 = new Definition_1(new Declaration_4('val', $arguments.get_fkrdnv_k$(0).second_1, false));
          variable_0.value_1 = $arguments.get_fkrdnv_k$(0).third_1;
          this$0.evaluator_1.scope_1.variables_1.define_f87tdr_k$(variable_0);
          tmp = Unit_getInstance();
        } else {
          var variable_1 = new Definition_1(new Declaration_4('val', ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object')), false));
          var tmp_1 = variable_1;
          var tmp_2 = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object'));
          var tmp$ret$3;
          // Inline function 'kotlin.collections.associate' call
          var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($arguments, 10)), 16);
          var tmp$ret$2;
          // Inline function 'kotlin.collections.associateTo' call
          var tmp1_associateTo = LinkedHashMap_init_$Create$(capacity);
          var tmp0_iterator = $arguments.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp$ret$1;
            // Inline function 'dev.rhovas.interpreter.evaluator.Lambda.invoke.<anonymous>.<anonymous>' call
            tmp$ret$1 = to(element.first_1, element.third_1);
            var tmp0_plusAssign = tmp$ret$1;
            tmp1_associateTo.put_3mhbri_k$(tmp0_plusAssign.first_1, tmp0_plusAssign.second_1);
          }
          tmp$ret$2 = tmp1_associateTo;
          tmp$ret$3 = tmp$ret$2;
          tmp_1.value_1 = new Object_1(tmp_2, tmp$ret$3);
          this$0.evaluator_1.scope_1.variables_1.define_f87tdr_k$(variable_1);
          tmp = Unit_getInstance();
        }
      }
      var tmp_3;
      try {
        this$0.evaluator_1.visit_iveuaz_k$(this$0.ast_1.body_1);
        tmp_3 = new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
      } catch ($p) {
        var tmp_4;
        if ($p instanceof Return_0) {
          var tmp1_elvis_lhs = $p.value_1;
          tmp_4 = tmp1_elvis_lhs == null ? new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance()) : tmp1_elvis_lhs;
        } else {
          throw $p;
        }
        tmp_3 = tmp_4;
      }
      return tmp_3;
    };
  }
  function _set_scope__kj1gmp($this, _set____db54di) {
    $this.scope_1 = _set____db54di;
  }
  function _get_scope__bi2zur_0($this) {
    return $this.scope_1;
  }
  function _set_label__h6dzv5($this, _set____db54di) {
    $this.label_1 = _set____db54di;
  }
  function _get_label__euqgmb($this) {
    return $this.label_1;
  }
  function _set_patternState__etd5li($this, _set____db54di) {
    $this.patternState_1 = _set____db54di;
  }
  function _get_patternState__ud3w5m($this) {
    var tmp = $this.patternState_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('patternState');
    }
  }
  function _set_stacktrace__rltuh2($this, _set____db54di) {
    $this.stacktrace_1 = _set____db54di;
  }
  function _get_stacktrace__sd1mcu($this) {
    return $this.stacktrace_1;
  }
  function scoped($this, scope, block) {
    var original = $this.scope_1;
    $this.scope_1 = scope;
    try {
      return block();
    }finally {
      $this.scope_1 = original;
    }
  }
  function trace($this, source, range, block) {
    var tmp = $this.stacktrace_1;
    var tmp_0 = $this.stacktrace_1.removeLast_i5wx8a_k$();
    var tmp0_elvis_lhs = range;
    tmp.addLast_i401o4_k$(tmp_0.copy$default_1no1cq_k$(null, tmp0_elvis_lhs == null ? new Range(0, 1, 0, 0) : tmp0_elvis_lhs, 1, null));
    $this.stacktrace_1.addLast_i401o4_k$(new StackFrame(source, new Range(0, 1, 0, 0)));
    try {
      return block();
    }finally {
      $this.stacktrace_1.removeLast_i5wx8a_k$();
    }
  }
  function Break_0(label) {
    Exception_init_$Init$_0(this);
    this.label_1 = label;
    captureStack(this, Break_0);
  }
  Break_0.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  Break_0.prototype.component1_7eebsc_k$ = function () {
    return this.label_1;
  };
  Break_0.prototype.copy_o1ci45_k$ = function (label) {
    return new Break_0(label);
  };
  Break_0.prototype.copy$default_q3pzg4_k$ = function (label, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      label = this.label_1;
    return this.copy_o1ci45_k$(label);
  };
  Break_0.prototype.toString = function () {
    return 'Break(label=' + this.label_1 + ')';
  };
  Break_0.prototype.hashCode = function () {
    return this.label_1 == null ? 0 : getStringHashCode(this.label_1);
  };
  Break_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Break_0))
      return false;
    var tmp0_other_with_cast = other instanceof Break_0 ? other : THROW_CCE();
    if (!(this.label_1 == tmp0_other_with_cast.label_1))
      return false;
    return true;
  };
  Break_0.$metadata$ = classMeta('Break', undefined, undefined, undefined, undefined, Exception.prototype);
  function Continue_0(label) {
    Exception_init_$Init$_0(this);
    this.label_1 = label;
    captureStack(this, Continue_0);
  }
  Continue_0.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  Continue_0.prototype.component1_7eebsc_k$ = function () {
    return this.label_1;
  };
  Continue_0.prototype.copy_o1ci45_k$ = function (label) {
    return new Continue_0(label);
  };
  Continue_0.prototype.copy$default_q3pzg4_k$ = function (label, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      label = this.label_1;
    return this.copy_o1ci45_k$(label);
  };
  Continue_0.prototype.toString = function () {
    return 'Continue(label=' + this.label_1 + ')';
  };
  Continue_0.prototype.hashCode = function () {
    return this.label_1 == null ? 0 : getStringHashCode(this.label_1);
  };
  Continue_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Continue_0))
      return false;
    var tmp0_other_with_cast = other instanceof Continue_0 ? other : THROW_CCE();
    if (!(this.label_1 == tmp0_other_with_cast.label_1))
      return false;
    return true;
  };
  Continue_0.$metadata$ = classMeta('Continue', undefined, undefined, undefined, undefined, Exception.prototype);
  function Return_0(ast, value) {
    Exception_init_$Init$_0(this);
    this.ast_1 = ast;
    this.value_1 = value;
    captureStack(this, Return_0);
  }
  Return_0.prototype.get_ast_18j9bb_k$ = function () {
    return this.ast_1;
  };
  Return_0.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Return_0.prototype.component1_7eebsc_k$ = function () {
    return this.ast_1;
  };
  Return_0.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  Return_0.prototype.copy_4cj4ln_k$ = function (ast, value) {
    return new Return_0(ast, value);
  };
  Return_0.prototype.copy$default_7m26yj_k$ = function (ast, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ast = this.ast_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    return this.copy_4cj4ln_k$(ast, value);
  };
  Return_0.prototype.toString = function () {
    return 'Return(ast=' + this.ast_1 + ', value=' + this.value_1 + ')';
  };
  Return_0.prototype.hashCode = function () {
    var result = hashCode(this.ast_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : this.value_1.hashCode()) | 0;
    return result;
  };
  Return_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Return_0))
      return false;
    var tmp0_other_with_cast = other instanceof Return_0 ? other : THROW_CCE();
    if (!equals(this.ast_1, tmp0_other_with_cast.ast_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Return_0.$metadata$ = classMeta('Return', undefined, undefined, undefined, undefined, Exception.prototype);
  function Throw_0(exception) {
    Exception_init_$Init$_0(this);
    this.exception_1 = exception;
    captureStack(this, Throw_0);
  }
  Throw_0.prototype.get_exception_x0n6w6_k$ = function () {
    return this.exception_1;
  };
  Throw_0.prototype.component1_7eebsc_k$ = function () {
    return this.exception_1;
  };
  Throw_0.prototype.copy_ammowm_k$ = function (exception) {
    return new Throw_0(exception);
  };
  Throw_0.prototype.copy$default_6g7ewa_k$ = function (exception, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exception = this.exception_1;
    return this.copy_ammowm_k$(exception);
  };
  Throw_0.prototype.toString = function () {
    return 'Throw(exception=' + this.exception_1 + ')';
  };
  Throw_0.prototype.hashCode = function () {
    return this.exception_1.hashCode();
  };
  Throw_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Throw_0))
      return false;
    var tmp0_other_with_cast = other instanceof Throw_0 ? other : THROW_CCE();
    if (!this.exception_1.equals(tmp0_other_with_cast.exception_1))
      return false;
    return true;
  };
  Throw_0.$metadata$ = classMeta('Throw', undefined, undefined, undefined, undefined, Exception.prototype);
  function Lambda_0(ast, scope, evaluator) {
    this.ast_1 = ast;
    this.scope_1 = scope;
    this.evaluator_1 = evaluator;
  }
  Lambda_0.prototype.get_ast_18j9bb_k$ = function () {
    return this.ast_1;
  };
  Lambda_0.prototype.get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  Lambda_0.prototype.get_evaluator_kfg5fq_k$ = function () {
    return this.evaluator_1;
  };
  Lambda_0.prototype.invoke_n75jxz_k$ = function (arguments_0, returns) {
    var tmp = new Definition_0(this.scope_1);
    return scoped(this.evaluator_1, tmp, Evaluator$Lambda$invoke$lambda(this, arguments_0));
  };
  Lambda_0.prototype.component1_7eebsc_k$ = function () {
    return this.ast_1;
  };
  Lambda_0.prototype.component2_7eebsb_k$ = function () {
    return this.scope_1;
  };
  Lambda_0.prototype.component3_7eebsa_k$ = function () {
    return this.evaluator_1;
  };
  Lambda_0.prototype.copy_5t1gqm_k$ = function (ast, scope, evaluator) {
    return new Lambda_0(ast, scope, evaluator);
  };
  Lambda_0.prototype.copy$default_gzn05m_k$ = function (ast, scope, evaluator, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      ast = this.ast_1;
    if (!(($mask0 & 2) === 0))
      scope = this.scope_1;
    if (!(($mask0 & 4) === 0))
      evaluator = this.evaluator_1;
    return this.copy_5t1gqm_k$(ast, scope, evaluator);
  };
  Lambda_0.prototype.toString = function () {
    return 'Lambda(ast=' + this.ast_1 + ', scope=' + this.scope_1 + ', evaluator=' + this.evaluator_1 + ')';
  };
  Lambda_0.prototype.hashCode = function () {
    var result = this.ast_1.hashCode();
    result = imul(result, 31) + hashCode(this.scope_1) | 0;
    result = imul(result, 31) + hashCode(this.evaluator_1) | 0;
    return result;
  };
  Lambda_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Lambda_0))
      return false;
    var tmp0_other_with_cast = other instanceof Lambda_0 ? other : THROW_CCE();
    if (!this.ast_1.equals(tmp0_other_with_cast.ast_1))
      return false;
    if (!equals(this.scope_1, tmp0_other_with_cast.scope_1))
      return false;
    if (!equals(this.evaluator_1, tmp0_other_with_cast.evaluator_1))
      return false;
    return true;
  };
  Lambda_0.$metadata$ = classMeta('Lambda');
  function PatternState(scope, value) {
    this.scope_1 = scope;
    this.value_1 = value;
  }
  PatternState.prototype.get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  PatternState.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  PatternState.prototype.component1_7eebsc_k$ = function () {
    return this.scope_1;
  };
  PatternState.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  PatternState.prototype.copy_597ann_k$ = function (scope, value) {
    return new PatternState(scope, value);
  };
  PatternState.prototype.copy$default_cm6jl0_k$ = function (scope, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      scope = this.scope_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    return this.copy_597ann_k$(scope, value);
  };
  PatternState.prototype.toString = function () {
    return 'PatternState(scope=' + this.scope_1 + ', value=' + this.value_1 + ')';
  };
  PatternState.prototype.hashCode = function () {
    var result = hashCode(this.scope_1);
    result = imul(result, 31) + this.value_1.hashCode() | 0;
    return result;
  };
  PatternState.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PatternState))
      return false;
    var tmp0_other_with_cast = other instanceof PatternState ? other : THROW_CCE();
    if (!equals(this.scope_1, tmp0_other_with_cast.scope_1))
      return false;
    if (!this.value_1.equals(tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  PatternState.$metadata$ = classMeta('PatternState');
  function Evaluator$visit$lambda$lambda($ir, $arguments, this$0) {
    return function () {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.associate' call
      var tmp0_associate = $ir.fields_1;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associate, 10)), 16);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.associateTo' call
      var tmp1_associateTo = LinkedHashMap_init_$Create$(capacity);
      var tmp0_iterator = tmp0_associate.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$2;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = $arguments.get_fkrdnv_k$(0).value_1;
        var tmp1_elvis_lhs = ((!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE()).get_1mhr4y_k$(element.variable_1.get_name_woqyms_k$());
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          var tmp0_safe_receiver = element.value_1;
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = this$0.visit_iveuaz_k$(tmp0_safe_receiver);
            tmp$ret$1 = tmp$ret$0;
            tmp_1 = tmp$ret$1;
          }
          tmp_0 = tmp_1;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var tmp2_elvis_lhs = tmp_0;
        var value = tmp2_elvis_lhs == null ? new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Null')), null) : tmp2_elvis_lhs;
        tmp$ret$2 = new Pair(element.variable_1.get_name_woqyms_k$(), value);
        var tmp0_plusAssign = tmp$ret$2;
        tmp1_associateTo.put_3mhbri_k$(tmp0_plusAssign.first_1, tmp0_plusAssign.second_1);
      }
      tmp$ret$3 = tmp1_associateTo;
      tmp$ret$4 = tmp$ret$3;
      return new Object_1($ir.type_1, toMutableMap(tmp$ret$4));
    };
  }
  function Evaluator$visit$lambda(this$0, $current, $ir) {
    return function (arguments_0) {
      return scoped(this$0, $current, Evaluator$visit$lambda$lambda($ir, arguments_0, this$0));
    };
  }
  function Evaluator$visit$lambda_0($ir, this$0) {
    return function () {
      var tmp0_forEach = $ir.statements_1;
      var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
        this$0.visit_iveuaz_k$(element);
      }
      return Unit_getInstance();
    };
  }
  function Evaluator$visit$lambda$lambda$lambda(this$0, $ir, $e) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      var tmp = ensureNotNull($e.exception_1.methods_1.get_ffk12n_k$('toString', tmp$ret$0));
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$1 = emptyList();
      var tmp_0 = tmp.invoke_ed3umv_k$(tmp$ret$1).value_1;
      return this$0.error_st682z_k$($ir, 'Uncaught exception.', 'An exception of type ' + $e.exception_1.type_1 + ' was thrown but not declared: ' + ((!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE()));
    };
  }
  function Evaluator$visit$lambda$lambda_0($ir, $arguments, this$0) {
    return function () {
      var inductionVariable = 0;
      var last = $ir.function_1.get_parameters_cl4rkd_k$().get_size_woubt6_k$() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var parameter = new Definition_1($ir.function_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$(i));
          parameter.value_1 = $arguments.get_fkrdnv_k$(i);
          this$0.scope_1.variables_1.define_f87tdr_k$(parameter);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      try {
        this$0.visit_m5be4w_k$($ir.body_1);
        tmp_0 = new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Throw_0) {
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.any' call
            var tmp0_any = $ir.function_1.get_throws_jy60ra_k$();
            var tmp_2;
            if (isInterface(tmp0_any, Collection)) {
              tmp_2 = tmp0_any.isEmpty_y1axqb_k$();
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
            var tmp0_iterator = tmp0_any.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              var tmp$ret$1;
              // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$1 = $p.exception_1.type_1.isSubtypeOf_ngr8tl_k$(element);
              if (tmp$ret$1) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
            }
            tmp$ret$0 = false;
          }
          var tmp_3 = tmp$ret$0;
          this$0.require_k14o47_k$(tmp_3, Evaluator$visit$lambda$lambda$lambda(this$0, $ir, $p));
          throw $p;
        } else {
          if ($p instanceof Return_0) {
            var tmp1_elvis_lhs = $p.value_1;
            tmp_1 = tmp1_elvis_lhs == null ? new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance()) : tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
        tmp_0 = tmp_1;
      }
      return tmp_0;
    };
  }
  function Evaluator$visit$lambda_1(this$0, $current, $ir) {
    return function (arguments_0) {
      return scoped(this$0, $current, Evaluator$visit$lambda$lambda_0($ir, arguments_0, this$0));
    };
  }
  function Evaluator$visit$lambda_2(this$0, $ir, $variable) {
    return function () {
      return this$0.error_st682z_k$($ir, 'Unassignable variable.', 'The variable ' + $variable.get_name_woqyms_k$() + ' is immutable and does not support assignment.');
    };
  }
  function Evaluator$visit$lambda_3(this$0, $ir, $receiver, $method, $value) {
    return function () {
      return this$0.error_st682z_k$($ir.value_1, 'Invalid property value type.', 'The property ' + $receiver.type_1.get_base_wojaxm_k$().name_1 + '.' + $method.get_name_woqyms_k$() + ' requires the value to be type ' + $method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1 + ', but received ' + $value.type_1 + '.');
    };
  }
  function Evaluator$visit$lambda_4($method, $value) {
    return function () {
      return $method.invoke_ed3umv_k$(listOf($value));
    };
  }
  function Evaluator$visit$lambda_5(this$0, $ir, $i, $receiver, $method, $arguments) {
    return function () {
      var tmp0_elvis_lhs = getOrNull($ir.arguments_1, $i);
      var tmp = tmp0_elvis_lhs == null ? $ir.value_1 : tmp0_elvis_lhs;
      var tmp_0 = $receiver.type_1.get_base_wojaxm_k$().name_1;
      var tmp_1 = $method.get_name_woqyms_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = $method.get_parameters_cl4rkd_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.type_1;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      return this$0.error_st682z_k$(tmp, 'Invalid method argument type.', 'The method ' + tmp_0 + '.' + tmp_1 + '(' + joinToString$default(tmp_2, ', ', null, null, 0, null, null, 62, null) + ') requires argument ' + $i + ' to be type ' + $method.get_parameters_cl4rkd_k$().get_fkrdnv_k$($i).type_1 + ', but received ' + $arguments.get_fkrdnv_k$($i).type_1 + '.');
    };
  }
  function Evaluator$visit$lambda_6($method, $arguments) {
    return function () {
      return $method.invoke_ed3umv_k$($arguments);
    };
  }
  function Evaluator$visit$lambda_7(this$0, $ir) {
    return function () {
      return this$0.error_st682z_k$($ir.elseCase_1.first_1, 'Failed match else assertion.', 'A condition match statement requires the else condition to be true.');
    };
  }
  function Evaluator$visit$lambda$lambda_1(this$0, $it) {
    return function () {
      var tmp = this$0.visit_iveuaz_k$($it).value_1;
      return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    };
  }
  function Evaluator$visit$lambda_8(this$0, $argument) {
    return function (it) {
      this$0.patternState_1 = new PatternState(new Definition_0(this$0.scope_1), $argument);
      var tmp = _get_patternState__ud3w5m(this$0).scope_1;
      return scoped(this$0, tmp, Evaluator$visit$lambda$lambda_1(this$0, it));
    };
  }
  function Evaluator$visit$lambda_9(this$0, $ir) {
    return function () {
      return this$0.error_st682z_k$($ir.elseCase_1.first_1, 'Failed match else assertion.', 'A structural match statement requires the else pattern to match.');
    };
  }
  function Evaluator$visit$lambda_10(this$0, $case) {
    return function () {
      return this$0.visit_iveuaz_k$($case.second_1);
    };
  }
  function Evaluator$visit$lambda_11($ir, $element, this$0) {
    return function () {
      var variable = new Definition_1($ir.variable_1);
      variable.value_1 = $element;
      this$0.scope_1.variables_1.define_f87tdr_k$(variable);
      return this$0.visit_iveuaz_k$($ir.body_1);
    };
  }
  function Evaluator$visit$lambda_12(this$0, $ir) {
    return function () {
      return this$0.visit_iveuaz_k$($ir.body_1);
    };
  }
  function Evaluator$visit$lambda_13($catch, $e, this$0) {
    return function () {
      var variable = new Definition_1($catch.variable_1);
      variable.value_1 = $e.exception_1;
      this$0.scope_1.variables_1.define_f87tdr_k$(variable);
      return this$0.visit_iveuaz_k$($catch.body_1);
    };
  }
  function Evaluator$visit$lambda_14(this$0, $ir) {
    return function () {
      var tmp0_safe_receiver = $ir.message_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
        tmp$ret$0 = ' (' + toString_0(this$0.visit_iveuaz_k$(tmp0_safe_receiver).value_1) + ')';
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      return this$0.error_st682z_k$($ir, 'Failed assertion', 'The assertion failed' + tmp + '.');
    };
  }
  function Evaluator$visit$lambda_15(this$0, $ir) {
    return function () {
      var tmp0_safe_receiver = $ir.message_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
        tmp$ret$0 = ' (' + toString_0(this$0.visit_iveuaz_k$(tmp0_safe_receiver).value_1) + ')';
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      return this$0.error_st682z_k$($ir, 'Failed precondition assertion.', 'The precondition assertion failed' + tmp + '.');
    };
  }
  function Evaluator$visit$lambda_16(this$0, $ir) {
    return function () {
      var tmp0_safe_receiver = $ir.message_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
        tmp$ret$0 = ' (' + toString_0(this$0.visit_iveuaz_k$(tmp0_safe_receiver).value_1) + ')';
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      return this$0.error_st682z_k$($ir, 'Failed postcondition assertion.', 'The postcondition assertion failed' + tmp + '.');
    };
  }
  function Evaluator$visit$lambda_17($method) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      return $method.invoke_ed3umv_k$(tmp$ret$0);
    };
  }
  function Evaluator$visit$lambda_18($method, $right) {
    return function () {
      var tmp = $method.invoke_ed3umv_k$(listOf($right)).value_1;
      return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    };
  }
  function Evaluator$visit$lambda_19(this$0, $ir, $left, $method, $right) {
    return function () {
      var tmp = $left.type_1.get_base_wojaxm_k$().name_1;
      var tmp_0 = $method.get_name_woqyms_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = $method.get_parameters_cl4rkd_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.type_1;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      return this$0.error_st682z_k$($ir.right_1, 'Invalid method argument type.', 'The method ' + tmp + '.' + tmp_0 + '(' + joinToString$default(tmp_1, ', ', null, null, 0, null, null, 62, null) + ') requires argument 0 to be type ' + $method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1 + ', but received ' + $right.type_1 + '.');
    };
  }
  function Evaluator$visit$lambda_20($method, $right) {
    return function () {
      var tmp = $method.invoke_ed3umv_k$(listOf($right)).value_1;
      return tmp instanceof BigInteger ? tmp : THROW_CCE();
    };
  }
  function Evaluator$visit$lambda_21($method, $right) {
    return function () {
      return $method.invoke_ed3umv_k$(listOf($right));
    };
  }
  function Evaluator$visit$lambda_22($method) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      return $method.invoke_ed3umv_k$(tmp$ret$0);
    };
  }
  function Evaluator$visit$lambda_23(this$0, $ir, $i, $receiver, $method, $arguments) {
    return function () {
      var tmp = $ir.arguments_1.get_fkrdnv_k$($i);
      var tmp_0 = $receiver.type_1.get_base_wojaxm_k$().name_1;
      var tmp_1 = $method.get_name_woqyms_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = $method.get_parameters_cl4rkd_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.type_1;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      return this$0.error_st682z_k$(tmp, 'Invalid method argument type.', 'The method ' + tmp_0 + '.' + tmp_1 + '(' + joinToString$default(tmp_2, ', ', null, null, 0, null, null, 62, null) + ') requires argument ' + $i + ' to be type ' + $method.get_parameters_cl4rkd_k$().get_fkrdnv_k$($i).type_1 + ', but received ' + $arguments.get_fkrdnv_k$($i).type_1 + '.');
    };
  }
  function Evaluator$visit$lambda_24($method, $arguments) {
    return function () {
      return $method.invoke_ed3umv_k$($arguments);
    };
  }
  function Evaluator$visit$lambda_25(this$0, $ir, $i, $arguments) {
    return function () {
      var tmp = $ir.arguments_1.get_fkrdnv_k$($i);
      var tmp_0 = $ir.function_1.get_name_woqyms_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = $ir.function_1.get_parameters_cl4rkd_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.type_1;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      return this$0.error_st682z_k$(tmp, 'Invalid function argument type.', 'The function ' + tmp_0 + '(' + joinToString$default(tmp_1, ', ', null, null, 0, null, null, 62, null) + ') requires argument ' + $i + ' to be type ' + $ir.function_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$($i).type_1 + ', but received ' + $arguments.get_fkrdnv_k$($i).type_1 + '.');
    };
  }
  function Evaluator$visit$lambda_26($function, $arguments) {
    return function () {
      return $function.invoke_ed3umv_k$($arguments);
    };
  }
  function Evaluator$visit$lambda_27(this$0, $ir, $i, $receiver, $method, $arguments) {
    return function () {
      var tmp = $ir.arguments_1.get_fkrdnv_k$($i);
      var tmp_0 = $receiver.type_1.get_base_wojaxm_k$().name_1;
      var tmp_1 = $method.get_name_woqyms_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = $method.get_parameters_cl4rkd_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.type_1;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      return this$0.error_st682z_k$(tmp, 'Invalid method argument type.', 'The method ' + tmp_0 + '.' + tmp_1 + '(' + joinToString$default(tmp_2, ', ', null, null, 0, null, null, 62, null) + ') requires argument ' + $i + ' to be type ' + $method.get_parameters_cl4rkd_k$().get_fkrdnv_k$($i).type_1 + ', but received ' + $arguments.get_fkrdnv_k$($i).type_1 + '.');
    };
  }
  function Evaluator$visit$lambda_28($method, $arguments) {
    return function () {
      return $method.invoke_ed3umv_k$($arguments);
    };
  }
  function Evaluator$visit$lambda_29(this$0, $ir, $i, $arguments) {
    return function () {
      var tmp = $ir.arguments_1.get_fkrdnv_k$($i);
      var tmp_0 = $ir.function_1.get_name_woqyms_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = $ir.function_1.get_parameters_cl4rkd_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.type_1;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      return this$0.error_st682z_k$(tmp, 'Invalid function argument type.', 'The function ' + tmp_0 + '(' + joinToString$default(tmp_1, ', ', null, null, 0, null, null, 62, null) + ') requires argument ' + $i + ' to be type ' + $ir.function_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$($i).type_1 + ', but received ' + $arguments.get_fkrdnv_k$($i).type_1 + '.');
    };
  }
  function Evaluator$visit$lambda_30($function, $arguments) {
    return function () {
      return $function.invoke_ed3umv_k$($arguments);
    };
  }
  function Evaluator$visit$lambda_31($method, this$0) {
    return function () {
      var tmp = $method.invoke_ed3umv_k$(listOf(_get_patternState__ud3w5m(this$0).value_1)).value_1;
      return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    };
  }
  function Evaluator$require$lambda(this$0) {
    return function () {
      return this$0.error_st682z_k$(null, 'Broken evaluator invariant.', trimIndent('\n                This is an internal compiler error, please report this!\n\n                ' + stackTraceToString(Exception_init_$Create$()) + '\n            '));
    };
  }
  function Evaluator$error$lambda(it) {
    return ' - ' + it.source_1 + ', ' + it.range_1.line_1 + ':' + it.range_1.column_1 + '-' + (it.range_1.column_1 + it.range_1.length_1 | 0);
  }
  function Evaluator(scope) {
    this.scope_1 = scope;
    this.label_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ArrayDeque_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.stacktrace.<anonymous>' call
    tmp0_also.addLast_i401o4_k$(new StackFrame('Source', new Range(0, 1, 0, 0)));
    tmp$ret$0 = tmp0_also;
    tmp.stacktrace_1 = tmp$ret$0;
  }
  Evaluator.prototype.visit_vtugyg_k$ = function (ir) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = ir.statements_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      this.visit_iveuaz_k$(element);
    }
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_r27f1e_k$ = function (ir) {
    throw AssertionError_init_$Create$();
  };
  Evaluator.prototype.visit_vwjl76_k$ = function (ir) {
    this.scope_1.types_1.define_b5rmah_k$(ir.type_1, ir.type_1.get_base_wojaxm_k$().name_1);
    var current = this.scope_1;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp = ir.type_1.get_base_wojaxm_k$().scope_1.functions_1;
    var tmp_0 = ir.type_1.get_base_wojaxm_k$().name_1;
    var tmp0_let = single(tmp.get$default_vibwnr_k$(tmp_0, 1, false, 4, null));
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
    var tmp0_elvis_lhs = tmp0_let instanceof Definition ? tmp0_let : null;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp_2 = isObject(tmp0_let) ? tmp0_let : THROW_CCE();
      var tmp0_also = new Definition(tmp_2 instanceof Declaration_0 ? tmp_2 : THROW_CCE());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
      var tmp_3 = this.scope_1.functions_1;
      tmp_3.define$default_1vvya8_k$(tmp0_also, null, 2, null);
      tmp$ret$0 = tmp0_also;
      tmp_1 = tmp$ret$0;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp_1;
    tmp$ret$2 = tmp$ret$1;
    var constructor = tmp$ret$2;
    var tmp_4 = constructor;
    tmp_4.implementation_1 = Evaluator$visit$lambda(this, current, ir);
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_m5be4w_k$ = function (ir) {
    var tmp = new Definition_0(this.scope_1);
    scoped(this, tmp, Evaluator$visit$lambda_0(ir, this));
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_x3tr4w_k$ = function (ir) {
    this.visit_iveuaz_k$(ir.component_1);
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_9kh5jp_k$ = function (ir) {
    this.visit_iveuaz_k$(ir.expression_1);
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visitFunction_hxph3h_k$ = function (ir) {
    var current = this.scope_1;
    var tmp = ir.function_1;
    var tmp0_elvis_lhs = tmp instanceof Definition ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp_1 = ir.function_1;
      var tmp0_also = new Definition(tmp_1 instanceof Declaration_0 ? tmp_1 : THROW_CCE());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      var tmp_2 = this.scope_1.functions_1;
      tmp_2.define$default_1vvya8_k$(tmp0_also, null, 2, null);
      tmp$ret$0 = tmp0_also;
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var function_0 = tmp_0;
    var tmp_3 = function_0;
    tmp_3.implementation_1 = Evaluator$visit$lambda_1(this, current, ir);
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visitFunction = function (ir) {
    return this.visitFunction_hxph3h_k$(ir);
  };
  Evaluator.prototype.visit_nxx3tv_k$ = function (ir) {
    var tmp = ir.variable_1;
    var tmp0_elvis_lhs = tmp instanceof Definition_1 ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp_1 = ir.variable_1;
      var tmp0_also = new Definition_1(tmp_1 instanceof Declaration_4 ? tmp_1 : THROW_CCE());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      this.scope_1.variables_1.define_f87tdr_k$(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var variable = tmp_0;
    var tmp_2 = variable;
    var tmp1_safe_receiver = ir.value_1;
    var tmp_3;
    if (tmp1_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$1 = this.visit_iveuaz_k$(tmp1_safe_receiver);
      tmp$ret$2 = tmp$ret$1;
      tmp_3 = tmp$ret$2;
    }
    var tmp2_elvis_lhs = tmp_3;
    tmp_2.value_1 = tmp2_elvis_lhs == null ? new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Null')), null) : tmp2_elvis_lhs;
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visitAssignmentVariable_qc7rum_k$ = function (ir) {
    var tmp = this.scope_1.variables_1;
    var tmp_0 = ir.variable_1.get_name_woqyms_k$();
    var variable = ensureNotNull(tmp.get$default_ig9dkq_k$(tmp_0, false, 2, null));
    var tmp_1 = variable.get_mutable_on1kxp_k$();
    this.require_k14o47_k$(tmp_1, Evaluator$visit$lambda_2(this, ir, variable));
    variable.value_1 = this.visit_iveuaz_k$(ir.value_1);
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visitAssignmentVariable = function (ir) {
    return this.visitAssignmentVariable_qc7rum_k$(ir);
  };
  Evaluator.prototype.visitAssignmentProperty_tfrx84_k$ = function (ir) {
    var receiver = this.visit_iveuaz_k$(ir.receiver_1);
    var value = this.visit_iveuaz_k$(ir.value_1);
    var tmp0_elvis_lhs = receiver.get_4982fz_k$(ir.property_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw this.error_st682z_k$(ir, 'Undefined property.', 'The property ' + ir.property_1.get_name_woqyms_k$() + ' is not defined in ' + receiver.type_1.get_base_wojaxm_k$().name_1 + '.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var property = tmp;
    var tmp1_elvis_lhs = property.setter_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw this.error_st682z_k$(ir, 'Unassignable property.', 'The property ' + receiver.type_1.get_base_wojaxm_k$().name_1 + '.' + ir.property_1.get_name_woqyms_k$() + ' does not support assignment.');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var method = tmp_0;
    var tmp_1 = value.type_1.isSubtypeOf_ngr8tl_k$(method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1);
    this.require_k14o47_k$(tmp_1, Evaluator$visit$lambda_3(this, ir, receiver, method, value));
    var tmp_2 = receiver.type_1.get_base_wojaxm_k$().name_1;
    var tmp_3 = method.get_name_woqyms_k$();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = method.get_parameters_cl4rkd_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$0 = item.type_1;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp_4 = tmp$ret$2;
    var tmp_5 = tmp_2 + '.' + tmp_3 + '(' + joinToString$default(tmp_4, ', ', null, null, 0, null, null, 62, null) + ')';
    var tmp_6 = firstOrNull(ir.context_1);
    trace(this, tmp_5, tmp_6, Evaluator$visit$lambda_4(method, value));
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visitAssignmentProperty = function (ir) {
    return this.visitAssignmentProperty_tfrx84_k$(ir);
  };
  Evaluator.prototype.visitAssignmentIndex_rzi5ie_k$ = function (ir) {
    var receiver = this.visit_iveuaz_k$(ir.receiver_1);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ir.arguments_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$0 = this.visit_iveuaz_k$(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var arguments_0 = plus(tmp$ret$2, listOf(this.visit_iveuaz_k$(ir.value_1)));
    var tmp0_elvis_lhs = receiver.get_uggsz1_k$(ir.method_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = ir.method_1.get_name_woqyms_k$();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = ir.method_1.get_parameters_cl4rkd_k$();
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$3;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        tmp$ret$3 = item_0.type_1;
        tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
      }
      tmp$ret$4 = tmp0_mapTo_0;
      tmp$ret$5 = tmp$ret$4;
      var tmp_1 = tmp$ret$5;
      throw this.error_st682z_k$(ir, 'Undefined method.', 'The method ' + tmp_0 + '(' + joinToString$default(tmp_1, ', ', null, null, 0, null, null, 62, null) + ') is not defined in ' + receiver.type_1.get_base_wojaxm_k$().name_1 + '.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var method = tmp;
    var inductionVariable = 0;
    var last = arguments_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_2 = arguments_0.get_fkrdnv_k$(i).type_1.isSubtypeOf_ngr8tl_k$(method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(i).type_1);
        this.require_k14o47_k$(tmp_2, Evaluator$visit$lambda_5(this, ir, i, receiver, method, arguments_0));
      }
       while (inductionVariable <= last);
    var tmp_3 = receiver.type_1.get_base_wojaxm_k$().name_1;
    var tmp_4 = method.get_name_woqyms_k$();
    var tmp$ret$8;
    // Inline function 'kotlin.collections.map' call
    var tmp2_map = method.get_parameters_cl4rkd_k$();
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
    var tmp0_iterator_1 = tmp2_map.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_1 = tmp0_iterator_1.next_20eer_k$();
      var tmp$ret$6;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$6 = item_1.type_1;
      tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$6);
    }
    tmp$ret$7 = tmp0_mapTo_1;
    tmp$ret$8 = tmp$ret$7;
    var tmp_5 = tmp$ret$8;
    var tmp_6 = tmp_3 + '.' + tmp_4 + '(' + joinToString$default(tmp_5, ', ', null, null, 0, null, null, 62, null) + ')';
    var tmp_7 = firstOrNull(ir.context_1);
    trace(this, tmp_6, tmp_7, Evaluator$visit$lambda_6(method, arguments_0));
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visitAssignmentIndex = function (ir) {
    return this.visitAssignmentIndex_rzi5ie_k$(ir);
  };
  Evaluator.prototype.visit_aoop96_k$ = function (ir) {
    var condition = this.visit_iveuaz_k$(ir.condition_1);
    var tmp = condition.value_1;
    if ((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE()) {
      this.visit_iveuaz_k$(ir.thenStatement_1);
    } else {
      if (!(ir.elseStatement_1 == null)) {
        this.visit_iveuaz_k$(ir.elseStatement_1);
      }
    }
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_tl397t_k$ = function (ir) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = ir.cases_1;
      var tmp0_iterator = tmp0_firstOrNull.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        var tmp = this.visit_iveuaz_k$(element.first_1).value_1;
        tmp$ret$0 = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = ir.elseCase_1;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        var tmp_2;
        if (tmp0_safe_receiver.first_1 == null) {
          tmp_2 = true;
        } else {
          var tmp_3 = this.visit_iveuaz_k$(ensureNotNull(tmp0_safe_receiver.first_1)).value_1;
          tmp_2 = (!(tmp_3 == null) ? typeof tmp_3 === 'boolean' : false) ? tmp_3 : THROW_CCE();
        }
        var tmp_4 = tmp_2;
        this.require_k14o47_k$(tmp_4, Evaluator$visit$lambda_7(this, ir));
        tmp$ret$2 = tmp0_safe_receiver;
        tmp_1 = tmp$ret$2;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var case_0 = tmp_0;
    var tmp2_safe_receiver = case_0;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$3 = this.visit_iveuaz_k$(tmp2_safe_receiver.second_1);
      tmp$ret$4 = tmp$ret$3;
    }
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_spgndy_k$ = function (ir) {
    var argument = this.visit_iveuaz_k$(ir.argument_1);
    var predicate = Evaluator$visit$lambda_8(this, argument);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = ir.cases_1;
      var tmp0_iterator = tmp0_firstOrNull.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        tmp$ret$0 = predicate(element.first_1);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = ir.elseCase_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        var tmp0_elvis_lhs = tmp0_safe_receiver.first_1;
        var tmp_1 = predicate(tmp0_elvis_lhs == null ? new Variable_1(new Declaration_4('_', argument.type_1, false)) : tmp0_elvis_lhs);
        this.require_k14o47_k$(tmp_1, Evaluator$visit$lambda_9(this, ir));
        tmp$ret$2 = tmp0_safe_receiver;
        tmp_0 = tmp$ret$2;
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_2;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$3 = emptyList();
      var tmp_3 = ensureNotNull(argument.methods_1.get_ffk12n_k$('toString', tmp$ret$3));
      var tmp$ret$4;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$4 = emptyList();
      var tmp_4 = tmp_3.invoke_ed3umv_k$(tmp$ret$4).value_1;
      throw this.error_st682z_k$(ir, 'Non-exhaustive structural match patterns.', 'A structural match statements requires the patterns to be exhaustive, but no pattern matched argument ' + ((!(tmp_4 == null) ? typeof tmp_4 === 'string' : false) ? tmp_4 : THROW_CCE()) + '.');
    } else {
      tmp_2 = tmp2_elvis_lhs;
    }
    var case_0 = tmp_2;
    var tmp_5 = _get_patternState__ud3w5m(this).scope_1;
    scoped(this, tmp_5, Evaluator$visit$lambda_10(this, case_0));
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_nwakwk_k$ = function (ir) {
    var iterable = this.visit_iveuaz_k$(ir.argument_1);
    var label = this.label_1;
    this.label_1 = null;
    var tmp = iterable.value_1;
    var tmp0_iterator = ((!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE()).iterator_jk1svi_k$();
    $l$loop_0: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      try {
        var tmp_0 = new Definition_0(this.scope_1);
        scoped(this, tmp_0, Evaluator$visit$lambda_11(ir, element, this));
      } catch ($p) {
        if ($p instanceof Break_0) {
          if (!($p.label_1 == null) ? !($p.label_1 == label) : false) {
            throw $p;
          }
          break $l$loop_0;
        } else {
          if ($p instanceof Continue_0) {
            if (!($p.label_1 == null) ? !($p.label_1 == label) : false) {
              throw $p;
            }
            continue $l$loop_0;
          } else {
            throw $p;
          }
        }
      }
    }
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_ltudv0_k$ = function (ir) {
    var label = this.label_1;
    this.label_1 = null;
    $l$loop_1: while (true) {
      var condition = this.visit_iveuaz_k$(ir.condition_1);
      var tmp = condition.value_1;
      if ((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE()) {
        try {
          var tmp_0 = new Definition_0(this.scope_1);
          scoped(this, tmp_0, Evaluator$visit$lambda_12(this, ir));
        } catch ($p) {
          if ($p instanceof Break_0) {
            if (!($p.label_1 == null) ? !($p.label_1 == label) : false) {
              throw $p;
            }
            break $l$loop_1;
          } else {
            if ($p instanceof Continue_0) {
              if (!($p.label_1 == null) ? !($p.label_1 == label) : false) {
                throw $p;
              }
              continue $l$loop_1;
            } else {
              throw $p;
            }
          }
        }
      } else {
        break $l$loop_1;
      }
    }
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_nwaag2_k$ = function (ir) {
    try {
      this.visit_iveuaz_k$(ir.body_1);
    } catch ($p) {
      if ($p instanceof Throw_0) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var tmp0_firstOrNull = ir.catches_1;
          var tmp0_iterator = tmp0_firstOrNull.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            var tmp$ret$0;
            // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
            tmp$ret$0 = $p.exception_1.type_1.isSubtypeOf_ngr8tl_k$(element.variable_1.type_1);
            if (tmp$ret$0) {
              tmp$ret$1 = element;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        var catch_0 = tmp$ret$1;
        if (!(catch_0 == null)) {
          var tmp = new Definition_0(this.scope_1);
          scoped(this, tmp, Evaluator$visit$lambda_13(catch_0, $p, this));
        } else {
          var tmp0_safe_receiver = ir.finallyStatement_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            var tmp$ret$3;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$2;
            // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
            tmp$ret$2 = this.visit_iveuaz_k$(tmp0_safe_receiver);
            tmp$ret$3 = tmp$ret$2;
          }
          throw $p;
        }
      } else {
        throw $p;
      }
    }
    var tmp1_safe_receiver = ir.finallyStatement_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$4 = this.visit_iveuaz_k$(tmp1_safe_receiver);
      tmp$ret$5 = tmp$ret$4;
    }
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_m4yioy_k$ = function (ir) {
    throw AssertionError_init_$Create$();
  };
  Evaluator.prototype.visit_uhoptp_k$ = function (ir) {
    // Inline function 'kotlin.TODO' call
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  Evaluator.prototype.visit_m00qnd_k$ = function (ir) {
    var label = this.label_1;
    this.label_1 = ir.label_1;
    try {
      this.visit_iveuaz_k$(ir.statement_1);
    }finally {
      this.label_1 = label;
    }
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_m57roe_k$ = function (ir) {
    throw new Break_0(ir.label_1);
  };
  Evaluator.prototype.visit_66k4v8_k$ = function (ir) {
    throw new Continue_0(ir.label_1);
  };
  Evaluator.prototype.visit_v7ac8d_k$ = function (ir) {
    var tmp0_safe_receiver = ir.value_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$0 = this.visit_iveuaz_k$(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    throw new Return_0(ir, tmp);
  };
  Evaluator.prototype.visit_lvhkvr_k$ = function (ir) {
    throw new Throw_0(this.visit_iveuaz_k$(ir.exception_1));
  };
  Evaluator.prototype.visit_nd6wzn_k$ = function (ir) {
    var condition = this.visit_iveuaz_k$(ir.condition_1);
    var tmp = condition.value_1;
    var tmp_0 = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    this.require_k14o47_k$(tmp_0, Evaluator$visit$lambda_14(this, ir));
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_r7bsqg_k$ = function (ir) {
    var condition = this.visit_iveuaz_k$(ir.condition_1);
    var tmp = condition.value_1;
    var tmp_0 = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    this.require_k14o47_k$(tmp_0, Evaluator$visit$lambda_15(this, ir));
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_p6mrgb_k$ = function (ir) {
    var condition = this.visit_iveuaz_k$(ir.condition_1);
    var tmp = condition.value_1;
    var tmp_0 = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    this.require_k14o47_k$(tmp_0, Evaluator$visit$lambda_16(this, ir));
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), Unit_getInstance());
  };
  Evaluator.prototype.visit_vmw1m1_k$ = function (ir) {
    return new Object_1(ir.type_3, ir.value_1);
  };
  Evaluator.prototype.visit_vwjcjy_k$ = function (ir) {
    var builder = StringBuilder_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = get_indices(ir.arguments_1);
    var inductionVariable = tmp0_forEach.first_1;
    var last_0 = tmp0_forEach.last_1;
    if (inductionVariable <= last_0)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        builder.append_ssq29y_k$(ir.literals_1.get_fkrdnv_k$(element));
        var tmp = this.visit_iveuaz_k$(ir.arguments_1.get_fkrdnv_k$(element)).methods_1;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.listOf' call
        tmp$ret$0 = emptyList();
        var tmp_0 = ensureNotNull(tmp.get_ffk12n_k$('toString', tmp$ret$0));
        var tmp$ret$1;
        // Inline function 'kotlin.collections.listOf' call
        tmp$ret$1 = emptyList();
        var tmp_1 = tmp_0.invoke_ed3umv_k$(tmp$ret$1).value_1;
        builder.append_ssq29y_k$((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      }
       while (!(element === last_0));
    builder.append_ssq29y_k$(last(ir.literals_1));
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('String')), builder.toString());
  };
  Evaluator.prototype.visit_uhvqp1_k$ = function (ir) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ir.elements_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$0 = this.visit_iveuaz_k$(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var value = tmp$ret$2;
    return new Object_1(ir.type_3, value);
  };
  Evaluator.prototype.visit_tqbd6k_k$ = function (ir) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp0_mapValues = ir.properties_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp1_mapValuesTo = LinkedHashMap_init_$Create$(mapCapacity(tmp0_mapValues.get_size_woubt6_k$()));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = tmp0_mapValues.get_entries_p20ztl_k$();
    var tmp0_iterator = tmp0_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$0 = element.get_key_18j28a_k$();
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$1 = this.visit_iveuaz_k$(element.get_value_j01efc_k$());
      tmp1_mapValuesTo.put_3mhbri_k$(tmp, tmp$ret$1);
    }
    tmp$ret$2 = tmp1_mapValuesTo;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var value = tmp$ret$4;
    return new Object_1(ir.type_3, value);
  };
  Evaluator.prototype.visit_m2gkta_k$ = function (ir) {
    return this.visit_iveuaz_k$(ir.expression_1);
  };
  Evaluator.prototype.visit_luuawe_k$ = function (ir) {
    var expression = this.visit_iveuaz_k$(ir.expression_1);
    var tmp0_elvis_lhs = expression.get_uggsz1_k$(ir.method_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw this.error_st682z_k$(ir, 'Undefined method.', 'The method op' + ir.operator_1 + '() is not defined in ' + expression.type_1.get_base_wojaxm_k$().name_1 + '.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var method = tmp;
    var tmp_0 = expression.type_1.get_base_wojaxm_k$().name_1 + '.' + ir.operator_1 + '()';
    var tmp_1 = firstOrNull(ir.context_1);
    return trace(this, tmp_0, tmp_1, Evaluator$visit$lambda_17(method));
  };
  Evaluator.prototype.visit_nonbjy_k$ = function (ir) {
    var left = this.visit_iveuaz_k$(ir.left_1);
    var tmp0_subject = ir.operator_1;
    var tmp;
    switch (tmp0_subject) {
      case '||':
        var tmp_0 = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean'));
        var tmp_1;
        var tmp_2 = left.value_1;
        if ((!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE()) {
          tmp_1 = true;
        } else {
          var tmp_3 = this.visit_iveuaz_k$(ir.right_1).value_1;
          tmp_1 = (!(tmp_3 == null) ? typeof tmp_3 === 'boolean' : false) ? tmp_3 : THROW_CCE();
        }

        tmp = new Object_1(tmp_0, tmp_1);
        break;
      case '&&':
        var tmp_4 = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean'));
        var tmp_5;
        var tmp_6 = left.value_1;
        if ((!(tmp_6 == null) ? typeof tmp_6 === 'boolean' : false) ? tmp_6 : THROW_CCE()) {
          var tmp_7 = this.visit_iveuaz_k$(ir.right_1).value_1;
          tmp_5 = (!(tmp_7 == null) ? typeof tmp_7 === 'boolean' : false) ? tmp_7 : THROW_CCE();
        } else {
          tmp_5 = false;
        }

        tmp = new Object_1(tmp_4, tmp_5);
        break;
      case '==':
      case '!=':
        var tmp1_elvis_lhs = left.get_uggsz1_k$(ensureNotNull(ir.method_1));
        var tmp_8;
        if (tmp1_elvis_lhs == null) {
          var tmp$ret$2;
          // Inline function 'kotlin.collections.map' call
          var tmp0_map = ir.method_1.get_parameters_cl4rkd_k$();
          var tmp$ret$1;
          // Inline function 'kotlin.collections.mapTo' call
          var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            var tmp$ret$0;
            // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
            tmp$ret$0 = item.type_1;
            tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
          tmp$ret$2 = tmp$ret$1;
          throw this.error_st682z_k$(ir, 'Undefined method.', 'The method op==(' + tmp$ret$2 + ') is not defined in ' + left.type_1.get_base_wojaxm_k$().name_1 + '.');
        } else {
          tmp_8 = tmp1_elvis_lhs;
        }

        var method = tmp_8;
        var right = this.visit_iveuaz_k$(ir.right_1);
        var tmp_9;
        if (right.type_1.isSubtypeOf_ngr8tl_k$(method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1)) {
          var tmp_10 = left.type_1.get_base_wojaxm_k$().name_1;
          var tmp_11 = method.get_name_woqyms_k$();
          var tmp$ret$5;
          // Inline function 'kotlin.collections.map' call
          var tmp1_map = method.get_parameters_cl4rkd_k$();
          var tmp$ret$4;
          // Inline function 'kotlin.collections.mapTo' call
          var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
          var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var item_0 = tmp0_iterator_0.next_20eer_k$();
            var tmp$ret$3;
            // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
            tmp$ret$3 = item_0.type_1;
            tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
          }
          tmp$ret$4 = tmp0_mapTo_0;
          tmp$ret$5 = tmp$ret$4;
          var tmp_12 = tmp$ret$5;
          var tmp_13 = tmp_10 + '.' + tmp_11 + '(' + joinToString$default(tmp_12, ', ', null, null, 0, null, null, 62, null) + ')';
          var tmp_14 = firstOrNull(ir.context_1);
          tmp_9 = trace(this, tmp_13, tmp_14, Evaluator$visit$lambda_18(method, right));
        } else {
          tmp_9 = false;
        }

        var result = tmp_9;
        var value = ir.operator_1 === '==' ? result : !result;
        tmp = new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), value);
        break;
      case '===':
      case '!==':
        var right_0 = this.visit_iveuaz_k$(ir.right_1);
        var result_0 = equals(left.type_1, right_0.type_1) ? left.value_1 === right_0.value_1 : false;
        var value_0 = ir.operator_1 === '===' ? result_0 : !result_0;
        tmp = new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), value_0);
        break;
      case '<':
      case '>':
      case '<=':
      case '>=':
        var tmp2_elvis_lhs = left.get_uggsz1_k$(ensureNotNull(ir.method_1));
        var tmp_15;
        if (tmp2_elvis_lhs == null) {
          var tmp_16 = ir.method_1.get_name_woqyms_k$();
          var tmp$ret$8;
          // Inline function 'kotlin.collections.map' call
          var tmp2_map = ir.method_1.get_parameters_cl4rkd_k$();
          var tmp$ret$7;
          // Inline function 'kotlin.collections.mapTo' call
          var tmp0_mapTo_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
          var tmp0_iterator_1 = tmp2_map.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var item_1 = tmp0_iterator_1.next_20eer_k$();
            var tmp$ret$6;
            // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
            tmp$ret$6 = item_1.type_1;
            tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$6);
          }
          tmp$ret$7 = tmp0_mapTo_1;
          tmp$ret$8 = tmp$ret$7;
          var tmp_17 = tmp$ret$8;
          throw this.error_st682z_k$(ir, 'Undefined method.', 'The method ' + tmp_16 + '(' + joinToString$default(tmp_17, ', ', null, null, 0, null, null, 62, null) + ') is not defined in ' + left.type_1.get_base_wojaxm_k$().name_1 + '.');
        } else {
          tmp_15 = tmp2_elvis_lhs;
        }

        var method_0 = tmp_15;
        var right_1 = this.visit_iveuaz_k$(ir.right_1);
        var tmp_18 = right_1.type_1.isSubtypeOf_ngr8tl_k$(method_0.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1);
        this.require_k14o47_k$(tmp_18, Evaluator$visit$lambda_19(this, ir, left, method_0, right_1));
        var tmp_19 = left.type_1.get_base_wojaxm_k$().name_1;
        var tmp_20 = method_0.get_name_woqyms_k$();
        var tmp$ret$11;
        // Inline function 'kotlin.collections.map' call
        var tmp3_map = method_0.get_parameters_cl4rkd_k$();
        var tmp$ret$10;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp3_map, 10));
        var tmp0_iterator_2 = tmp3_map.iterator_jk1svi_k$();
        while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
          var item_2 = tmp0_iterator_2.next_20eer_k$();
          var tmp$ret$9;
          // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
          tmp$ret$9 = item_2.type_1;
          tmp0_mapTo_2.add_1j60pz_k$(tmp$ret$9);
        }
        tmp$ret$10 = tmp0_mapTo_2;
        tmp$ret$11 = tmp$ret$10;

        var tmp_21 = tmp$ret$11;
        var tmp_22 = tmp_19 + '.' + tmp_20 + '(' + joinToString$default(tmp_21, ', ', null, null, 0, null, null, 62, null) + ')';
        var tmp_23 = firstOrNull(ir.context_1);
        var result_1 = trace(this, tmp_22, tmp_23, Evaluator$visit$lambda_20(method_0, right_1));
        var tmp3_subject = ir.operator_1;
        var tmp_24;
        switch (tmp3_subject) {
          case '<':
            tmp_24 = result_1.compareTo_m610zm_k$(Companion_getInstance().ZERO_1) < 0;
            break;
          case '>':
            tmp_24 = result_1.compareTo_m610zm_k$(Companion_getInstance().ZERO_1) > 0;
            break;
          case '<=':
            tmp_24 = result_1.compareTo_m610zm_k$(Companion_getInstance().ZERO_1) <= 0;
            break;
          case '>=':
            tmp_24 = result_1.compareTo_m610zm_k$(Companion_getInstance().ZERO_1) >= 0;
            break;
          default:
            throw AssertionError_init_$Create$();
        }

        var value_1 = tmp_24;
        tmp = new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), value_1);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        var tmp4_elvis_lhs = left.get_uggsz1_k$(ensureNotNull(ir.method_1));
        var tmp_25;
        if (tmp4_elvis_lhs == null) {
          var tmp_26 = ir.method_1.get_name_woqyms_k$();
          var tmp$ret$14;
          // Inline function 'kotlin.collections.map' call
          var tmp4_map = ir.method_1.get_parameters_cl4rkd_k$();
          var tmp$ret$13;
          // Inline function 'kotlin.collections.mapTo' call
          var tmp0_mapTo_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp4_map, 10));
          var tmp0_iterator_3 = tmp4_map.iterator_jk1svi_k$();
          while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
            var item_3 = tmp0_iterator_3.next_20eer_k$();
            var tmp$ret$12;
            // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
            tmp$ret$12 = item_3.type_1;
            tmp0_mapTo_3.add_1j60pz_k$(tmp$ret$12);
          }
          tmp$ret$13 = tmp0_mapTo_3;
          tmp$ret$14 = tmp$ret$13;
          var tmp_27 = tmp$ret$14;
          throw this.error_st682z_k$(ir, 'Undefined method.', 'The method ' + tmp_26 + '(' + joinToString$default(tmp_27, ', ', null, null, 0, null, null, 62, null) + ') is not defined in ' + left.type_1.get_base_wojaxm_k$().name_1 + '.');
        } else {
          tmp_25 = tmp4_elvis_lhs;
        }

        var method_1 = tmp_25;
        var right_2 = this.visit_iveuaz_k$(ir.right_1);
        var tmp_28 = left.type_1.get_base_wojaxm_k$().name_1;
        var tmp_29 = method_1.get_name_woqyms_k$();
        var tmp$ret$17;
        // Inline function 'kotlin.collections.map' call
        var tmp5_map = method_1.get_parameters_cl4rkd_k$();
        var tmp$ret$16;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo_4 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp5_map, 10));
        var tmp0_iterator_4 = tmp5_map.iterator_jk1svi_k$();
        while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
          var item_4 = tmp0_iterator_4.next_20eer_k$();
          var tmp$ret$15;
          // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
          tmp$ret$15 = item_4.type_1;
          tmp0_mapTo_4.add_1j60pz_k$(tmp$ret$15);
        }
        tmp$ret$16 = tmp0_mapTo_4;
        tmp$ret$17 = tmp$ret$16;

        var tmp_30 = tmp$ret$17;
        var tmp_31 = tmp_28 + '.' + tmp_29 + '(' + joinToString$default(tmp_30, ', ', null, null, 0, null, null, 62, null) + ')';
        var tmp_32 = firstOrNull(ir.context_1);
        tmp = trace(this, tmp_31, tmp_32, Evaluator$visit$lambda_21(method_1, right_2));
        break;
      default:
        throw AssertionError_init_$Create$();
    }
    return tmp;
  };
  Evaluator.prototype.visitAccessVariable_f9u921_k$ = function (ir) {
    var tmp = this.scope_1.variables_1;
    var tmp_0 = ir.variable_1.get_name_woqyms_k$();
    var variable = ensureNotNull(tmp.get$default_ig9dkq_k$(tmp_0, false, 2, null));
    return variable.get_value_j01efc_k$();
  };
  Evaluator.prototype.visitAccessVariable = function (ir) {
    return this.visitAccessVariable_f9u921_k$(ir);
  };
  Evaluator.prototype.visitAccessProperty_pw5n_k$ = function (ir) {
    var receiver = this.visit_iveuaz_k$(ir.receiver_1);
    var tmp;
    if (ir.coalesce_1 ? receiver.type_1.isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Null'))) : false) {
      tmp = receiver;
    } else {
      var tmp0_safe_receiver = receiver.get_4982fz_k$(ir.property_1);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getter_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw this.error_st682z_k$(ir, 'Undefined property.', 'The property ' + ir.property_1.get_name_woqyms_k$() + ' is not defined in ' + receiver.type_1.get_base_wojaxm_k$().name_1 + '.');
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var method = tmp_0;
      var tmp_1 = receiver.type_1.get_base_wojaxm_k$().name_1;
      var tmp_2 = method.get_name_woqyms_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = method.get_parameters_cl4rkd_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        tmp$ret$0 = item.type_1;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      var tmp_4 = tmp_1 + '.' + tmp_2 + '(' + joinToString$default(tmp_3, ', ', null, null, 0, null, null, 62, null) + ')';
      var tmp_5 = firstOrNull(ir.context_1);
      tmp = trace(this, tmp_4, tmp_5, Evaluator$visit$lambda_22(method));
    }
    return tmp;
  };
  Evaluator.prototype.visitAccessProperty = function (ir) {
    return this.visitAccessProperty_pw5n_k$(ir);
  };
  Evaluator.prototype.visitAccessIndex_nia9fn_k$ = function (ir) {
    var receiver = this.visit_iveuaz_k$(ir.receiver_1);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ir.arguments_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$0 = this.visit_iveuaz_k$(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var arguments_0 = tmp$ret$2;
    var tmp0_elvis_lhs = receiver.get_uggsz1_k$(ir.method_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = ir.method_1.get_name_woqyms_k$();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = ir.method_1.get_parameters_cl4rkd_k$();
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$3;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        tmp$ret$3 = item_0.type_1;
        tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
      }
      tmp$ret$4 = tmp0_mapTo_0;
      tmp$ret$5 = tmp$ret$4;
      var tmp_1 = tmp$ret$5;
      throw this.error_st682z_k$(ir, 'Undefined method.', 'The method ' + tmp_0 + '(' + joinToString$default(tmp_1, ', ', null, null, 0, null, null, 62, null) + ') is not defined in ' + receiver.type_1.get_base_wojaxm_k$().name_1 + '.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var method = tmp;
    var inductionVariable = 0;
    var last = arguments_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_2 = arguments_0.get_fkrdnv_k$(i).type_1.isSubtypeOf_ngr8tl_k$(method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(i).type_1);
        this.require_k14o47_k$(tmp_2, Evaluator$visit$lambda_23(this, ir, i, receiver, method, arguments_0));
      }
       while (inductionVariable <= last);
    var tmp_3 = receiver.type_1.get_base_wojaxm_k$().name_1;
    var tmp_4 = method.get_name_woqyms_k$();
    var tmp$ret$8;
    // Inline function 'kotlin.collections.map' call
    var tmp2_map = method.get_parameters_cl4rkd_k$();
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
    var tmp0_iterator_1 = tmp2_map.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_1 = tmp0_iterator_1.next_20eer_k$();
      var tmp$ret$6;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$6 = item_1.type_1;
      tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$6);
    }
    tmp$ret$7 = tmp0_mapTo_1;
    tmp$ret$8 = tmp$ret$7;
    var tmp_5 = tmp$ret$8;
    var tmp_6 = tmp_3 + '.' + tmp_4 + '(' + joinToString$default(tmp_5, ', ', null, null, 0, null, null, 62, null) + ')';
    var tmp_7 = firstOrNull(ir.context_1);
    return trace(this, tmp_6, tmp_7, Evaluator$visit$lambda_24(method, arguments_0));
  };
  Evaluator.prototype.visitAccessIndex = function (ir) {
    return this.visitAccessIndex_nia9fn_k$(ir);
  };
  Evaluator.prototype.visitInvokeFunction_riqa57_k$ = function (ir) {
    var tmp = this.scope_1.functions_1;
    var tmp_0 = ir.function_1.get_name_woqyms_k$();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ir.function_1.get_parameters_cl4rkd_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$0 = item.type_1;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp_1 = tmp$ret$2;
    var function_0 = ensureNotNull(tmp.get$default_q9ul3w_k$(tmp_0, tmp_1, false, 4, null));
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = ir.arguments_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$3 = this.visit_iveuaz_k$(item_0);
      tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo_0;
    tmp$ret$5 = tmp$ret$4;
    var arguments_0 = tmp$ret$5;
    var inductionVariable = 0;
    var last = arguments_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_2 = arguments_0.get_fkrdnv_k$(i).type_1.isSubtypeOf_ngr8tl_k$(ir.function_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$(i).type_1);
        this.require_k14o47_k$(tmp_2, Evaluator$visit$lambda_25(this, ir, i, arguments_0));
      }
       while (inductionVariable <= last);
    var tmp_3 = ir.function_1.get_name_woqyms_k$();
    var tmp$ret$8;
    // Inline function 'kotlin.collections.map' call
    var tmp2_map = ir.function_1.get_parameters_cl4rkd_k$();
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
    var tmp0_iterator_1 = tmp2_map.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_1 = tmp0_iterator_1.next_20eer_k$();
      var tmp$ret$6;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$6 = item_1.type_1;
      tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$6);
    }
    tmp$ret$7 = tmp0_mapTo_1;
    tmp$ret$8 = tmp$ret$7;
    var tmp_4 = tmp$ret$8;
    var tmp_5 = 'Source.' + tmp_3 + '(' + joinToString$default(tmp_4, ', ', null, null, 0, null, null, 62, null) + ')';
    var tmp_6 = firstOrNull(ir.context_1);
    return trace(this, tmp_5, tmp_6, Evaluator$visit$lambda_26(function_0, arguments_0));
  };
  Evaluator.prototype.visitInvokeFunction = function (ir) {
    return this.visitInvokeFunction_riqa57_k$(ir);
  };
  Evaluator.prototype.visit_su1yji_k$ = function (ir) {
    var receiver = this.visit_iveuaz_k$(ir.receiver_1);
    var tmp;
    if (ir.coalesce_1 ? receiver.type_1.isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Null'))) : false) {
      tmp = new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Null')), null);
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = ir.arguments_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        tmp$ret$0 = this.visit_iveuaz_k$(item);
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var arguments_0 = tmp$ret$2;
      var tmp0_elvis_lhs = receiver.get_uggsz1_k$(ir.method_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp_1 = ir.method_1.get_name_woqyms_k$();
        var tmp$ret$5;
        // Inline function 'kotlin.collections.map' call
        var tmp1_map = ir.method_1.get_parameters_cl4rkd_k$();
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
        var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_0.next_20eer_k$();
          var tmp$ret$3;
          // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
          tmp$ret$3 = item_0.type_1;
          tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
        }
        tmp$ret$4 = tmp0_mapTo_0;
        tmp$ret$5 = tmp$ret$4;
        var tmp_2 = tmp$ret$5;
        throw this.error_st682z_k$(ir, 'Undefined method.', 'The method ' + tmp_1 + '(' + joinToString$default(tmp_2, ', ', null, null, 0, null, null, 62, null) + ') is not defined in ' + receiver.type_1.get_base_wojaxm_k$().name_1 + '.');
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var method = tmp_0;
      var inductionVariable = 0;
      var last = arguments_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp_3 = arguments_0.get_fkrdnv_k$(i).type_1.isSubtypeOf_ngr8tl_k$(method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(i).type_1);
          this.require_k14o47_k$(tmp_3, Evaluator$visit$lambda_27(this, ir, i, receiver, method, arguments_0));
        }
         while (inductionVariable <= last);
      var tmp_4 = receiver.type_1.get_base_wojaxm_k$().name_1;
      var tmp_5 = method.get_name_woqyms_k$();
      var tmp$ret$8;
      // Inline function 'kotlin.collections.map' call
      var tmp2_map = method.get_parameters_cl4rkd_k$();
      var tmp$ret$7;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
      var tmp0_iterator_1 = tmp2_map.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item_1 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$6;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        tmp$ret$6 = item_1.type_1;
        tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$6);
      }
      tmp$ret$7 = tmp0_mapTo_1;
      tmp$ret$8 = tmp$ret$7;
      var tmp_6 = tmp$ret$8;
      var tmp_7 = tmp_4 + '.' + tmp_5 + '(' + joinToString$default(tmp_6, ', ', null, null, 0, null, null, 62, null) + ')';
      var tmp_8 = firstOrNull(ir.context_1);
      var result = trace(this, tmp_7, tmp_8, Evaluator$visit$lambda_28(method, arguments_0));
      return ir.cascade_1 ? receiver : result;
    }
    return tmp;
  };
  Evaluator.prototype.visit_9eqie7_k$ = function (ir) {
    var tmp0_subject = ir.function_1;
    var tmp;
    if (tmp0_subject instanceof Definition) {
      tmp = ir.function_1;
    } else {
      if (tmp0_subject instanceof Declaration_0) {
        var tmp_0 = this.scope_1.functions_1;
        var tmp_1 = ir.function_1.get_name_woqyms_k$();
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp0_map = ir.function_1.get_parameters_cl4rkd_k$();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          var tmp$ret$0;
          // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
          tmp$ret$0 = item.type_1;
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp = ensureNotNull(tmp_0.get$default_q9ul3w_k$(tmp_1, tmp_2, false, 4, null));
      } else {
        noWhenBranchMatchedException();
      }
    }
    var function_0 = tmp;
    var receiver = this.visit_iveuaz_k$(ir.receiver_1);
    var tmp_3;
    if (ir.coalesce_1 ? receiver.type_1.isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Null'))) : false) {
      tmp_3 = new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Null')), null);
    } else {
      var tmp_4 = listOf(receiver);
      var tmp$ret$5;
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = ir.arguments_1;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator_0 = tmp1_map.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$3;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        tmp$ret$3 = this.visit_iveuaz_k$(item_0);
        tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$3);
      }
      tmp$ret$4 = tmp0_mapTo_0;
      tmp$ret$5 = tmp$ret$4;
      var arguments_0 = plus(tmp_4, tmp$ret$5);
      var inductionVariable = 0;
      var last = arguments_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp_5 = arguments_0.get_fkrdnv_k$(i).type_1.isSubtypeOf_ngr8tl_k$(ir.function_1.get_parameters_cl4rkd_k$().get_fkrdnv_k$(i).type_1);
          this.require_k14o47_k$(tmp_5, Evaluator$visit$lambda_29(this, ir, i, arguments_0));
        }
         while (inductionVariable <= last);
      var tmp_6 = ir.function_1.get_name_woqyms_k$();
      var tmp$ret$8;
      // Inline function 'kotlin.collections.map' call
      var tmp2_map = ir.function_1.get_parameters_cl4rkd_k$();
      var tmp$ret$7;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
      var tmp0_iterator_1 = tmp2_map.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item_1 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$6;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        tmp$ret$6 = item_1.type_1;
        tmp0_mapTo_1.add_1j60pz_k$(tmp$ret$6);
      }
      tmp$ret$7 = tmp0_mapTo_1;
      tmp$ret$8 = tmp$ret$7;
      var tmp_7 = tmp$ret$8;
      var tmp_8 = 'Source.' + tmp_6 + '(' + joinToString$default(tmp_7, ', ', null, null, 0, null, null, 62, null) + ')';
      var tmp_9 = firstOrNull(ir.context_1);
      var result = trace(this, tmp_8, tmp_9, Evaluator$visit$lambda_30(function_0, arguments_0));
      return ir.cascade_1 ? receiver : result;
    }
    return tmp_3;
  };
  Evaluator.prototype.visit_saok5g_k$ = function (ir) {
    return new Object_1(new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Lambda')).get_base_wojaxm_k$(), listOf_0([ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic')), ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic'))])), new Lambda_0(ir, this.scope_1, this));
  };
  Evaluator.prototype.visitPatternVariable_xxxpqn_k$ = function (ir) {
    var tmp0_safe_receiver = ir.variable_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var variable = new Definition_1(tmp0_safe_receiver);
      variable.value_1 = _get_patternState__ud3w5m(this).value_1;
      _get_patternState__ud3w5m(this).scope_1.variables_1.define_f87tdr_k$(variable);
      tmp$ret$0 = Unit_getInstance();
    }
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), true);
  };
  Evaluator.prototype.visitPatternVariable = function (ir) {
    return this.visitPatternVariable_xxxpqn_k$(ir);
  };
  Evaluator.prototype.visit_luikx8_k$ = function (ir) {
    var value = this.visit_iveuaz_k$(ir.value_1);
    var tmp0_elvis_lhs = value.methods_1.get_ffk12n_k$('==', listOf(value.type_1));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw this.error_st682z_k$(ir, 'Undefined method.', 'The method op==(' + value.type_1 + ') is not defined in ' + value.type_1.get_base_wojaxm_k$().name_1 + '.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var method = tmp;
    var tmp_0;
    if (_get_patternState__ud3w5m(this).value_1.type_1.isSubtypeOf_ngr8tl_k$(method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1)) {
      var tmp_1 = value.type_1.get_base_wojaxm_k$().name_1;
      var tmp_2 = method.get_name_woqyms_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = method.get_parameters_cl4rkd_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
        tmp$ret$0 = item.type_1;
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      var tmp_4 = tmp_1 + '.' + tmp_2 + '(' + joinToString$default(tmp_3, ', ', null, null, 0, null, null, 62, null) + ')';
      var tmp_5 = firstOrNull(ir.context_1);
      tmp_0 = trace(this, tmp_4, tmp_5, Evaluator$visit$lambda_31(method, this));
    } else {
      tmp_0 = false;
    }
    var result = tmp_0;
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), result);
  };
  Evaluator.prototype.visit_xypm56_k$ = function (ir) {
    var result = this.visit_iveuaz_k$(ir.pattern_1);
    var tmp = result.value_1;
    if ((!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE()) {
      result = this.visit_iveuaz_k$(ir.predicate_1);
    }
    return result;
  };
  Evaluator.prototype.visit_1j11pa_k$ = function (ir) {
    if (!_get_patternState__ud3w5m(this).value_1.type_1.isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')))) {
      return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), false);
    }
    var type = ensureNotNull(_get_patternState__ud3w5m(this).value_1.type_1.methods_1.get_ffk12n_k$('get', listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Integer'))))).get_returns_jfk3fe_k$();
    var tmp = _get_patternState__ud3w5m(this).value_1.value_1;
    var list = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var i = 0;
    var tmp0_iterator = ir.patterns_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var pattern = tmp0_iterator.next_20eer_k$();
      var tmp_0;
      if (pattern instanceof VarargDestructure) {
        var value = list.subList_d153ha_k$(i, ((list.get_size_woubt6_k$() - ir.patterns_1.get_size_woubt6_k$() | 0) + i | 0) + 1 | 0);
        i = i + value.get_size_woubt6_k$() | 0;
        tmp_0 = new Object_1(new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(type)), value);
      } else {
        var tmp1 = i;
        i = tmp1 + 1 | 0;
        var tmp2_elvis_lhs = getOrNull(list, tmp1);
        var tmp_1;
        if (tmp2_elvis_lhs == null) {
          return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), false);
        } else {
          tmp_1 = tmp2_elvis_lhs;
        }
        tmp_0 = tmp_1;
      }
      var value_0 = tmp_0;
      var tmp_2 = this;
      var tmp_3 = _get_patternState__ud3w5m(this);
      tmp_2.patternState_1 = tmp_3.copy$default_cm6jl0_k$(null, value_0, 1, null);
      var result = this.visit_iveuaz_k$(pattern);
      var tmp_4 = result.value_1;
      if (!((!(tmp_4 == null) ? typeof tmp_4 === 'boolean' : false) ? tmp_4 : THROW_CCE())) {
        return result;
      }
    }
    if (!(i === list.get_size_woubt6_k$())) {
      return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), false);
    }
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), true);
  };
  Evaluator.prototype.visit_ub7cpi_k$ = function (ir) {
    if (!equals(_get_patternState__ud3w5m(this).value_1.type_1, Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object'))) {
      return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), false);
    }
    var tmp = _get_patternState__ud3w5m(this).value_1.value_1;
    var map = (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = ir.patterns_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$0 = item.first_1;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var named = toSet(tmp$ret$2);
    var vararg = false;
    var tmp0_iterator_0 = ir.patterns_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator_0.next_20eer_k$();
      var key = tmp1_loop_parameter.component1_7eebsc_k$();
      var pattern = tmp1_loop_parameter.component2_7eebsb_k$();
      var tmp_0;
      if (pattern instanceof VarargDestructure) {
        vararg = true;
        var tmp_1 = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object'));
        var tmp$ret$5;
        // Inline function 'kotlin.collections.filterKeys' call
        var result = LinkedHashMap_init_$Create$_0();
        var tmp$ret$3;
        // Inline function 'kotlin.collections.iterator' call
        tmp$ret$3 = map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        var tmp0_iterator_1 = tmp$ret$3;
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var entry = tmp0_iterator_1.next_20eer_k$();
          var tmp$ret$4;
          // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
          var tmp1__anonymous__uwfjfc = entry.get_key_18j28a_k$();
          tmp$ret$4 = !named.contains_2ehdt1_k$(tmp1__anonymous__uwfjfc);
          if (tmp$ret$4) {
            result.put_3mhbri_k$(entry.get_key_18j28a_k$(), entry.get_value_j01efc_k$());
          }
        }
        tmp$ret$5 = result;
        tmp_0 = new Object_1(tmp_1, tmp$ret$5);
      } else {
        var tmp$ret$6;
        // Inline function 'kotlin.collections.get' call
        tmp$ret$6 = (isInterface(map, Map) ? map : THROW_CCE()).get_1mhr4y_k$(key);
        var tmp2_elvis_lhs = tmp$ret$6;
        var tmp_2;
        if (tmp2_elvis_lhs == null) {
          return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), false);
        } else {
          tmp_2 = tmp2_elvis_lhs;
        }
        tmp_0 = tmp_2;
      }
      var value = tmp_0;
      if (!(key == null)) {
        var variable = new Definition_1(new Declaration_4(key, value.type_1, false));
        variable.value_1 = value;
        _get_patternState__ud3w5m(this).scope_1.variables_1.define_f87tdr_k$(variable);
      }
      var tmp_3 = this;
      var tmp_4 = _get_patternState__ud3w5m(this);
      tmp_3.patternState_1 = tmp_4.copy$default_cm6jl0_k$(null, value, 1, null);
      var tmp_5 = this.visit_iveuaz_k$(pattern).value_1;
      if (!((!(tmp_5 == null) ? typeof tmp_5 === 'boolean' : false) ? tmp_5 : THROW_CCE())) {
        return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), false);
      }
    }
    if (!vararg ? !(map.get_size_woubt6_k$() === named.get_size_woubt6_k$()) : false) {
      return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), false);
    }
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), true);
  };
  Evaluator.prototype.visit_fb27qz_k$ = function (ir) {
    if (!_get_patternState__ud3w5m(this).value_1.type_1.isSubtypeOf_ngr8tl_k$(ir.type_2)) {
      return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), false);
    }
    var tmp0_safe_receiver = ir.pattern_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
      tmp$ret$0 = this.visit_iveuaz_k$(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), true) : tmp1_elvis_lhs;
  };
  Evaluator.prototype.visit_hjdppi_k$ = function (ir) {
    if (_get_patternState__ud3w5m(this).value_1.type_1.isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')))) {
      var tmp = _get_patternState__ud3w5m(this).value_1.value_1;
      var list = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
      if (ir.operator_1 === '+' ? list.isEmpty_y1axqb_k$() : false) {
        return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), false);
      }
      var tmp_0;
      var tmp_1 = ir.pattern_1;
      if (tmp_1 instanceof Variable_1) {
        var tmp0_safe_receiver = ir.pattern_1.variable_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var variable = new Definition_1(tmp0_safe_receiver);
          variable.value_1 = _get_patternState__ud3w5m(this).value_1;
          this.scope_1.variables_1.define_f87tdr_k$(variable);
          tmp$ret$0 = Unit_getInstance();
        }
        tmp_0 = new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), true);
      } else {
        var tmp_2 = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean'));
        var tmp$ret$1;
        $l$block_0: {
          // Inline function 'kotlin.collections.all' call
          var tmp_3;
          if (isInterface(list, Collection)) {
            tmp_3 = list.isEmpty_y1axqb_k$();
          } else {
            tmp_3 = false;
          }
          if (tmp_3) {
            tmp$ret$1 = true;
            break $l$block_0;
          }
          var tmp0_iterator = list.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            var tmp$ret$4;
            // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
            var tmp_4 = this;
            var tmp_5 = _get_patternState__ud3w5m(this);
            tmp_4.patternState_1 = tmp_5.copy$default_cm6jl0_k$(null, element, 1, null);
            var tmp0_safe_receiver_0 = ir.pattern_1;
            var tmp_6;
            if (tmp0_safe_receiver_0 == null) {
              tmp_6 = null;
            } else {
              var tmp$ret$3;
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$2;
              // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
              var tmp_7 = this.visit_iveuaz_k$(tmp0_safe_receiver_0).value_1;
              tmp$ret$2 = (!(tmp_7 == null) ? typeof tmp_7 === 'boolean' : false) ? tmp_7 : THROW_CCE();
              tmp$ret$3 = tmp$ret$2;
              tmp_6 = tmp$ret$3;
            }
            var tmp1_elvis_lhs = tmp_6;
            tmp$ret$4 = tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
            if (!tmp$ret$4) {
              tmp$ret$1 = false;
              break $l$block_0;
            }
          }
          tmp$ret$1 = true;
        }
        tmp_0 = new Object_1(tmp_2, tmp$ret$1);
      }
      return tmp_0;
    } else if (_get_patternState__ud3w5m(this).value_1.type_1.isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object')))) {
      var tmp_8 = _get_patternState__ud3w5m(this).value_1.value_1;
      var map = (!(tmp_8 == null) ? isInterface(tmp_8, Map) : false) ? tmp_8 : THROW_CCE();
      if (ir.operator_1 === '+' ? map.isEmpty_y1axqb_k$() : false) {
        return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), false);
      }
      var tmp_9;
      var tmp_10 = ir.pattern_1;
      if (tmp_10 instanceof Variable_1) {
        var tmp1_safe_receiver = ir.pattern_1.variable_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$5;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var variable_0 = new Definition_1(tmp1_safe_receiver);
          variable_0.value_1 = new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Object')), map);
          this.scope_1.variables_1.define_f87tdr_k$(variable_0);
          tmp$ret$5 = Unit_getInstance();
        }
        tmp_9 = new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), true);
      } else {
        var tmp_11 = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean'));
        var tmp$ret$6;
        $l$block_2: {
          // Inline function 'kotlin.collections.all' call
          if (map.isEmpty_y1axqb_k$()) {
            tmp$ret$6 = true;
            break $l$block_2;
          }
          var tmp$ret$7;
          // Inline function 'kotlin.collections.iterator' call
          tmp$ret$7 = map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
          var tmp0_iterator_0 = tmp$ret$7;
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            var tmp$ret$10;
            // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>' call
            var tmp_12 = this;
            var tmp_13 = _get_patternState__ud3w5m(this);
            tmp_12.patternState_1 = tmp_13.copy$default_cm6jl0_k$(null, element_0.get_value_j01efc_k$(), 1, null);
            var tmp0_safe_receiver_1 = ir.pattern_1;
            var tmp_14;
            if (tmp0_safe_receiver_1 == null) {
              tmp_14 = null;
            } else {
              var tmp$ret$9;
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$8;
              // Inline function 'dev.rhovas.interpreter.evaluator.Evaluator.visit.<anonymous>.<anonymous>' call
              var tmp_15 = this.visit_iveuaz_k$(tmp0_safe_receiver_1).value_1;
              tmp$ret$8 = (!(tmp_15 == null) ? typeof tmp_15 === 'boolean' : false) ? tmp_15 : THROW_CCE();
              tmp$ret$9 = tmp$ret$8;
              tmp_14 = tmp$ret$9;
            }
            var tmp1_elvis_lhs_0 = tmp_14;
            tmp$ret$10 = tmp1_elvis_lhs_0 == null ? true : tmp1_elvis_lhs_0;
            if (!tmp$ret$10) {
              tmp$ret$6 = false;
              break $l$block_2;
            }
          }
          tmp$ret$6 = true;
        }
        tmp_9 = new Object_1(tmp_11, tmp$ret$6);
      }
      return tmp_9;
    } else {
      return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')), false);
    }
  };
  Evaluator.prototype.visit_uhqb0p_k$ = function (ir) {
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Type')), ir.type_1);
  };
  Evaluator.prototype.require_9xm5ng_k$ = function (condition) {
    this.require_k14o47_k$(condition, Evaluator$require$lambda(this));
  };
  Evaluator.prototype.require_k14o47_k$ = function (condition, error) {
    if (!condition) {
      throw error();
    }
  };
  Evaluator.prototype.error_st682z_k$ = function (ast, summary, details) {
    var tmp0_safe_receiver = ast;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.context_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : first(tmp1_safe_receiver);
    var range = tmp2_elvis_lhs == null ? new Range(0, 1, 0, 0) : tmp2_elvis_lhs;
    var tmp = this.stacktrace_1;
    var tmp_0 = this.stacktrace_1.removeLast_i5wx8a_k$();
    tmp.addLast_i401o4_k$(tmp_0.copy$default_1no1cq_k$(null, range, 1, null));
    var tmp_1 = details + '\n\n';
    var tmp_2 = reversed(this.stacktrace_1);
    var tmp_3 = tmp_1 + joinToString$default(tmp_2, '\n', null, null, 0, null, Evaluator$error$lambda, 30, null);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$0 = emptyList();
    return new EvaluateException(summary, tmp_3, range, tmp$ret$0);
  };
  Evaluator.$metadata$ = classMeta('Evaluator', [Visitor]);
  function StackFrame(source, range) {
    this.source_1 = source;
    this.range_1 = range;
  }
  StackFrame.prototype.get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  StackFrame.prototype.get_range_ixu978_k$ = function () {
    return this.range_1;
  };
  StackFrame.prototype.component1_7eebsc_k$ = function () {
    return this.source_1;
  };
  StackFrame.prototype.component2_7eebsb_k$ = function () {
    return this.range_1;
  };
  StackFrame.prototype.copy_keoonx_k$ = function (source, range) {
    return new StackFrame(source, range);
  };
  StackFrame.prototype.copy$default_1no1cq_k$ = function (source, range, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      source = this.source_1;
    if (!(($mask0 & 2) === 0))
      range = this.range_1;
    return this.copy_keoonx_k$(source, range);
  };
  StackFrame.prototype.toString = function () {
    return 'StackFrame(source=' + this.source_1 + ', range=' + this.range_1 + ')';
  };
  StackFrame.prototype.hashCode = function () {
    var result = getStringHashCode(this.source_1);
    result = imul(result, 31) + this.range_1.hashCode() | 0;
    return result;
  };
  StackFrame.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StackFrame))
      return false;
    var tmp0_other_with_cast = other instanceof StackFrame ? other : THROW_CCE();
    if (!(this.source_1 === tmp0_other_with_cast.source_1))
      return false;
    if (!this.range_1.equals(tmp0_other_with_cast.range_1))
      return false;
    return true;
  };
  StackFrame.$metadata$ = classMeta('StackFrame');
  function AnyInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    return new Object_1(AnyInitializer_getInstance().type_gwc96h_k$('String'), toString_0(instance.value_1));
  }
  function AnyInitializer() {
    AnyInitializer_instance = this;
    TypeInitializer.call(this, 'Any');
  }
  AnyInitializer.prototype.initialize_oabr29_k$ = function () {
    var tmp = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp, null, AnyInitializer$initialize$lambda, 46, null);
  };
  AnyInitializer.$metadata$ = objectMeta('AnyInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var AnyInitializer_instance;
  function AnyInitializer_getInstance() {
    if (AnyInitializer_instance == null)
      new AnyInitializer();
    return AnyInitializer_instance;
  }
  function AtomInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof Atom ? tmp : THROW_CCE();
    return new Object_1(AtomInitializer_getInstance().type_gwc96h_k$('String'), instance_0.name_1);
  }
  function AtomInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    return new Object_1(AtomInitializer_getInstance().type_gwc96h_k$('Boolean'), equals(instance.value_1, other.value_1));
  }
  function AtomInitializer$initialize$lambda_1(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof Atom ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof Atom ? tmp_0 : THROW_CCE();
    return new Object_1(AtomInitializer_getInstance().type_gwc96h_k$('Integer'), Companion_getInstance().fromInt_venwfw_k$(compareTo(instance_0.name_1, other_0.name_1)));
  }
  function AtomInitializer$initialize$lambda_2(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    return new Object_1(AtomInitializer_getInstance().type_gwc96h_k$('String'), ':' + toString_0(instance.value_1));
  }
  function AtomInitializer() {
    AtomInitializer_instance = this;
    TypeInitializer.call(this, 'Atom');
  }
  AtomInitializer.prototype.initialize_oabr29_k$ = function () {
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('name', null, null, null, tmp, null, AtomInitializer$initialize$lambda, 46, null);
    var tmp_0 = listOf(to('other', this.type_gwc96h_k$('Atom')));
    var tmp_1 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('equals', '==', null, tmp_0, tmp_1, null, AtomInitializer$initialize$lambda_0, 36, null);
    var tmp_2 = listOf(to('other', this.type_gwc96h_k$('Atom')));
    var tmp_3 = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('compare', '<=>', null, tmp_2, tmp_3, null, AtomInitializer$initialize$lambda_1, 36, null);
    var tmp_4 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_4, null, AtomInitializer$initialize$lambda_2, 46, null);
  };
  AtomInitializer.$metadata$ = objectMeta('AtomInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var AtomInitializer_instance;
  function AtomInitializer_getInstance() {
    if (AtomInitializer_instance == null)
      new AtomInitializer();
    return AtomInitializer_instance;
  }
  function BooleanInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    return new Object_1(BooleanInitializer_getInstance().type_gwc96h_k$('Boolean'), !instance_0);
  }
  function BooleanInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    return new Object_1(BooleanInitializer_getInstance().type_gwc96h_k$('Boolean'), equals(instance.value_1, other.value_1));
  }
  function BooleanInitializer$initialize$lambda_1(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    return new Object_1(BooleanInitializer_getInstance().type_gwc96h_k$('String'), toString_0(instance.value_1));
  }
  function BooleanInitializer() {
    BooleanInitializer_instance = this;
    TypeInitializer.call(this, 'Boolean');
  }
  BooleanInitializer.prototype.initialize_oabr29_k$ = function () {
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('negate', '!', null, null, tmp, null, BooleanInitializer$initialize$lambda, 44, null);
    var tmp_0 = listOf(to('other', this.type_gwc96h_k$('Boolean')));
    var tmp_1 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('equals', '==', null, tmp_0, tmp_1, null, BooleanInitializer$initialize$lambda_0, 36, null);
    var tmp_2 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_2, null, BooleanInitializer$initialize$lambda_1, 46, null);
  };
  BooleanInitializer.$metadata$ = objectMeta('BooleanInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var BooleanInitializer_instance;
  function BooleanInitializer_getInstance() {
    if (BooleanInitializer_instance == null)
      new BooleanInitializer();
    return BooleanInitializer_instance;
  }
  function DecimalInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigDecimal ? tmp : THROW_CCE();
    return new Object_1(DecimalInitializer_getInstance().type_gwc96h_k$('Decimal'), instance_0.negate_hcqk8u_k$());
  }
  function DecimalInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigDecimal ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof BigDecimal ? tmp_0 : THROW_CCE();
    return new Object_1(DecimalInitializer_getInstance().type_gwc96h_k$('Decimal'), instance_0.add_ib6t94_k$(other_0));
  }
  function DecimalInitializer$initialize$lambda_1(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigDecimal ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof BigDecimal ? tmp_0 : THROW_CCE();
    return new Object_1(DecimalInitializer_getInstance().type_gwc96h_k$('Decimal'), instance_0.subtract_48b20r_k$(other_0));
  }
  function DecimalInitializer$initialize$lambda_2(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigDecimal ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof BigDecimal ? tmp_0 : THROW_CCE();
    return new Object_1(DecimalInitializer_getInstance().type_gwc96h_k$('Decimal'), instance_0.multiply_u3j4dx_k$(other_0));
  }
  function DecimalInitializer$initialize$lambda_3(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigDecimal ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof BigDecimal ? tmp_0 : THROW_CCE();
    return new Object_1(DecimalInitializer_getInstance().type_gwc96h_k$('Decimal'), instance_0.divide_mvowml_k$(other_0, new DecimalMode(other_0.precision_1, RoundingMode_TOWARDS_ZERO_getInstance(), other_0.scale_1)));
  }
  function DecimalInitializer$initialize$lambda_4(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    return new Object_1(DecimalInitializer_getInstance().type_gwc96h_k$('Boolean'), equals(instance.value_1, other.value_1));
  }
  function DecimalInitializer$initialize$lambda_5(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigDecimal ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof BigDecimal ? tmp_0 : THROW_CCE();
    return new Object_1(DecimalInitializer_getInstance().type_gwc96h_k$('Integer'), Companion_getInstance().fromInt_venwfw_k$(instance_0.compareTo_m610zm_k$(other_0)));
  }
  function DecimalInitializer$initialize$lambda_6(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigDecimal ? tmp : THROW_CCE();
    return new Object_1(DecimalInitializer_getInstance().type_gwc96h_k$('Integer'), instance_0.toBigInteger_xwiad5_k$());
  }
  function DecimalInitializer$initialize$lambda_7(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    return new Object_1(DecimalInitializer_getInstance().type_gwc96h_k$('String'), toString_0(instance.value_1));
  }
  function DecimalInitializer() {
    DecimalInitializer_instance = this;
    TypeInitializer.call(this, 'Decimal');
  }
  DecimalInitializer.prototype.initialize_oabr29_k$ = function () {
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = this.type_gwc96h_k$('Decimal');
    this.method$default_6fwgyj_k$('negate', '-', null, null, tmp, null, DecimalInitializer$initialize$lambda, 44, null);
    var tmp_0 = listOf(to('other', this.type_gwc96h_k$('Decimal')));
    var tmp_1 = this.type_gwc96h_k$('Decimal');
    this.method$default_6fwgyj_k$('add', '+', null, tmp_0, tmp_1, null, DecimalInitializer$initialize$lambda_0, 36, null);
    var tmp_2 = listOf(to('instance', this.type_gwc96h_k$('Decimal')));
    var tmp_3 = this.type_gwc96h_k$('Decimal');
    this.method$default_6fwgyj_k$('subtract', '-', null, tmp_2, tmp_3, null, DecimalInitializer$initialize$lambda_1, 36, null);
    var tmp_4 = listOf(to('other', this.type_gwc96h_k$('Decimal')));
    var tmp_5 = this.type_gwc96h_k$('Decimal');
    this.method$default_6fwgyj_k$('multiply', '*', null, tmp_4, tmp_5, null, DecimalInitializer$initialize$lambda_2, 36, null);
    var tmp_6 = listOf(to('other', this.type_gwc96h_k$('Decimal')));
    var tmp_7 = this.type_gwc96h_k$('Decimal');
    this.method$default_6fwgyj_k$('divide', '/', null, tmp_6, tmp_7, null, DecimalInitializer$initialize$lambda_3, 36, null);
    var tmp_8 = listOf(to('other', this.type_gwc96h_k$('Decimal')));
    var tmp_9 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('equals', '==', null, tmp_8, tmp_9, null, DecimalInitializer$initialize$lambda_4, 36, null);
    var tmp_10 = listOf(to('other', this.type_gwc96h_k$('Decimal')));
    var tmp_11 = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('compare', '<=>', null, tmp_10, tmp_11, null, DecimalInitializer$initialize$lambda_5, 36, null);
    var tmp_12 = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('toInteger', null, null, null, tmp_12, null, DecimalInitializer$initialize$lambda_6, 46, null);
    var tmp_13 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_13, null, DecimalInitializer$initialize$lambda_7, 46, null);
  };
  DecimalInitializer.$metadata$ = objectMeta('DecimalInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var DecimalInitializer_instance;
  function DecimalInitializer_getInstance() {
    if (DecimalInitializer_instance == null)
      new DecimalInitializer();
    return DecimalInitializer_instance;
  }
  function ExceptionInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    return new Object_1(ExceptionInitializer_getInstance().type_gwc96h_k$('String'), toString_0(instance.value_1));
  }
  function ExceptionInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    return new Object_1(ExceptionInitializer_getInstance().type_gwc96h_k$('String'), toString_0(instance.value_1));
  }
  function ExceptionInitializer() {
    ExceptionInitializer_instance = this;
    TypeInitializer.call(this, 'Exception');
  }
  ExceptionInitializer.prototype.initialize_oabr29_k$ = function () {
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('message', null, null, null, tmp, null, ExceptionInitializer$initialize$lambda, 46, null);
    var tmp_0 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_0, null, ExceptionInitializer$initialize$lambda_0, 46, null);
  };
  ExceptionInitializer.$metadata$ = objectMeta('ExceptionInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var ExceptionInitializer_instance;
  function ExceptionInitializer_getInstance() {
    if (ExceptionInitializer_instance == null)
      new ExceptionInitializer();
    return ExceptionInitializer_instance;
  }
  function IntegerInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigInteger ? tmp : THROW_CCE();
    return new Object_1(IntegerInitializer_getInstance().type_gwc96h_k$('Integer'), instance_0.negate_hcqk8u_k$());
  }
  function IntegerInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigInteger ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    return new Object_1(IntegerInitializer_getInstance().type_gwc96h_k$('Integer'), instance_0.add_fi1w1k_k$(other_0));
  }
  function IntegerInitializer$initialize$lambda_1(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigInteger ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    return new Object_1(IntegerInitializer_getInstance().type_gwc96h_k$('Integer'), instance_0.subtract_71fz8b_k$(other_0));
  }
  function IntegerInitializer$initialize$lambda_2(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigInteger ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    return new Object_1(IntegerInitializer_getInstance().type_gwc96h_k$('Integer'), instance_0.multiply_rae76d_k$(other_0));
  }
  function IntegerInitializer$initialize$lambda_3(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigInteger ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    return new Object_1(IntegerInitializer_getInstance().type_gwc96h_k$('Integer'), instance_0.divide_2s2g0w_k$(other_0));
  }
  function IntegerInitializer$initialize$lambda_4(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigInteger ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    return new Object_1(IntegerInitializer_getInstance().type_gwc96h_k$('Integer'), instance_0.mod_1rrww9_k$(other_0));
  }
  function IntegerInitializer$initialize$lambda_5(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    return new Object_1(IntegerInitializer_getInstance().type_gwc96h_k$('Boolean'), equals(instance.value_1, other.value_1));
  }
  function IntegerInitializer$initialize$lambda_6(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigInteger ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    return new Object_1(IntegerInitializer_getInstance().type_gwc96h_k$('Integer'), Companion_getInstance().fromInt_venwfw_k$(instance_0.compareTo_m610zm_k$(other_0)));
  }
  function IntegerInitializer$initialize$lambda_7(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof BigInteger ? tmp : THROW_CCE();
    return new Object_1(IntegerInitializer_getInstance().type_gwc96h_k$('Decimal'), Companion_getInstance_0().fromBigInteger_30ftd_k$(instance_0));
  }
  function IntegerInitializer$initialize$lambda_8(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    return new Object_1(IntegerInitializer_getInstance().type_gwc96h_k$('String'), toString_0(instance.value_1));
  }
  function IntegerInitializer() {
    IntegerInitializer_instance = this;
    TypeInitializer.call(this, 'Integer');
  }
  IntegerInitializer.prototype.initialize_oabr29_k$ = function () {
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('negate', '-', null, null, tmp, null, IntegerInitializer$initialize$lambda, 44, null);
    var tmp_0 = listOf(to('other', this.type_gwc96h_k$('Integer')));
    var tmp_1 = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('add', '+', null, tmp_0, tmp_1, null, IntegerInitializer$initialize$lambda_0, 36, null);
    var tmp_2 = listOf(to('other', this.type_gwc96h_k$('Integer')));
    var tmp_3 = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('subtract', '-', null, tmp_2, tmp_3, null, IntegerInitializer$initialize$lambda_1, 36, null);
    var tmp_4 = listOf(to('other', this.type_gwc96h_k$('Integer')));
    var tmp_5 = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('multiply', '*', null, tmp_4, tmp_5, null, IntegerInitializer$initialize$lambda_2, 36, null);
    var tmp_6 = listOf(to('other', this.type_gwc96h_k$('Integer')));
    var tmp_7 = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('divide', '/', null, tmp_6, tmp_7, null, IntegerInitializer$initialize$lambda_3, 36, null);
    var tmp_8 = listOf(to('other', this.type_gwc96h_k$('Integer')));
    var tmp_9 = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('mod', null, null, tmp_8, tmp_9, null, IntegerInitializer$initialize$lambda_4, 38, null);
    var tmp_10 = listOf(to('other', this.type_gwc96h_k$('Integer')));
    var tmp_11 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('equals', '==', null, tmp_10, tmp_11, null, IntegerInitializer$initialize$lambda_5, 36, null);
    var tmp_12 = listOf(to('other', this.type_gwc96h_k$('Integer')));
    var tmp_13 = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('compare', '<=>', null, tmp_12, tmp_13, null, IntegerInitializer$initialize$lambda_6, 36, null);
    var tmp_14 = this.type_gwc96h_k$('Decimal');
    this.method$default_6fwgyj_k$('toDecimal', null, null, null, tmp_14, null, IntegerInitializer$initialize$lambda_7, 46, null);
    var tmp_15 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_15, null, IntegerInitializer$initialize$lambda_8, 46, null);
  };
  IntegerInitializer.$metadata$ = objectMeta('IntegerInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var IntegerInitializer_instance;
  function IntegerInitializer_getInstance() {
    if (IntegerInitializer_instance == null)
      new IntegerInitializer();
    return IntegerInitializer_instance;
  }
  function KernelInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var obj = tmp$ret$0;
    var tmp = get_INTERPRETER().stdout_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$1 = emptyList();
    var tmp_0 = ensureNotNull(obj.methods_1.get_ffk12n_k$('toString', tmp$ret$1));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$2 = emptyList();
    var tmp_1 = tmp_0.invoke_ed3umv_k$(tmp$ret$2).value_1;
    tmp((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
    return new Object_1(KernelInitializer_getInstance().type_gwc96h_k$('Void'), null);
  }
  function KernelInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var lower = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var upper = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.component3' call
    tmp$ret$2 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(2);
    var bound = tmp$ret$2;
    var tmp = lower.value_1;
    var lower_0 = tmp instanceof BigInteger ? tmp : THROW_CCE();
    var tmp_0 = upper.value_1;
    var upper_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    var tmp_1 = bound.value_1;
    var bound_0 = tmp_1 instanceof Atom ? tmp_1 : THROW_CCE();
    var start = listOf_0(['incl', 'incl_excl']).contains_2ehdt1_k$(bound_0.name_1) ? lower_0 : lower_0.add_fi1w1k_k$(Companion_getInstance().ONE_1);
    var end = listOf_0(['incl', 'excl_incl']).contains_2ehdt1_k$(bound_0.name_1) ? upper_0.add_fi1w1k_k$(Companion_getInstance().ONE_1) : upper_0;
    var tmp_2 = KernelInitializer_getInstance().type_4c71dw_k$('List', ['Integer']);
    var tmp$ret$7;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$4;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_3;
    var tmp$ret$3;
    // Inline function 'dev.rhovas.interpreter.library.KernelInitializer.initialize.<anonymous>.<anonymous>' call
    tmp$ret$3 = start.compareTo_m610zm_k$(end) < 0;
    if (tmp$ret$3) {
      tmp_3 = start;
    } else {
      tmp_3 = null;
    }
    tmp$ret$4 = tmp_3;
    var tmp_4 = tmp$ret$4;
    var tmp0_map = toList(generateSequence(tmp_4, KernelInitializer$initialize$lambda$lambda(end)));
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$5;
      // Inline function 'dev.rhovas.interpreter.library.KernelInitializer.initialize.<anonymous>.<anonymous>' call
      tmp$ret$5 = new Object_1(KernelInitializer_getInstance().type_gwc96h_k$('Integer'), item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$5);
    }
    tmp$ret$6 = tmp0_mapTo;
    tmp$ret$7 = tmp$ret$6;
    return new Object_1(tmp_2, tmp$ret$7);
  }
  function KernelInitializer$initialize$lambda$lambda($end) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      var tmp0_takeIf = it.add_fi1w1k_k$(Companion_getInstance().ONE_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.library.KernelInitializer.initialize.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = tmp0_takeIf.compareTo_m610zm_k$($end) < 0;
      if (tmp$ret$0) {
        tmp = tmp0_takeIf;
      } else {
        tmp = null;
      }
      tmp$ret$1 = tmp;
      return tmp$ret$1;
    };
  }
  function KernelInitializer$initialize$lambda_1(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var lambda = tmp$ret$0;
    return lambda;
  }
  function KernelInitializer() {
    KernelInitializer_instance = this;
    TypeInitializer.call(this, 'Kernel');
  }
  KernelInitializer.prototype.initialize_oabr29_k$ = function () {
    var tmp = listOf(to('object', this.type_gwc96h_k$('Any')));
    this.function$default_ebxkuq_k$('print', null, null, tmp, null, null, KernelInitializer$initialize$lambda, 54, null);
    var tmp_0 = listOf_0([to('lower', this.type_gwc96h_k$('Integer')), to('upper', this.type_gwc96h_k$('Integer')), to('bound', this.type_gwc96h_k$('Atom'))]);
    var tmp_1 = this.type_4c71dw_k$('List', ['Integer']);
    this.function$default_ebxkuq_k$('range', null, null, tmp_0, tmp_1, null, KernelInitializer$initialize$lambda_0, 38, null);
    var tmp_2 = listOf(this.generic_67n30m_k$('R', this.type_gwc96h_k$('Dynamic')));
    var tmp_3 = listOf(to('lambda', this.type_gc2zvv_k$('Lambda', [this.generic_67n30m_k$('R', this.type_gwc96h_k$('Dynamic'))])));
    var tmp_4 = this.type_gc2zvv_k$('Lambda', [this.generic_67n30m_k$('R', this.type_gwc96h_k$('Dynamic'))]);
    this.function$default_ebxkuq_k$('lambda', null, tmp_2, tmp_3, tmp_4, null, KernelInitializer$initialize$lambda_1, 34, null);
  };
  KernelInitializer.$metadata$ = objectMeta('KernelInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var KernelInitializer_instance;
  function KernelInitializer_getInstance() {
    if (KernelInitializer_instance == null)
      new KernelInitializer();
    return KernelInitializer_instance;
  }
  function LambdaInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var arguments_0 = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof Lambda_0 ? tmp : THROW_CCE();
    var tmp_0 = arguments_0.value_1;
    var arguments_1 = (!(tmp_0 == null) ? isInterface(tmp_0, List) : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = get_EVALUATOR();
    var tmp_2 = arguments_1.get_size_woubt6_k$() === instance_0.ast_1.parameters_1.get_size_woubt6_k$();
    tmp_1.require_k14o47_k$(tmp_2, LambdaInitializer$initialize$lambda$lambda(instance_0, arguments_1));
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = get_indices(arguments_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var inductionVariable = tmp0_map.first_1;
    var last = tmp0_map.last_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$2;
        // Inline function 'dev.rhovas.interpreter.library.LambdaInitializer.initialize.<anonymous>.<anonymous>' call
        var parameter = getOrNull(instance_0.ast_1.parameters_1, item);
        var tmp0_safe_receiver = parameter;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.name_1;
        var tmp_3 = tmp1_elvis_lhs == null ? 'val_' + item : tmp1_elvis_lhs;
        var tmp2_safe_receiver = parameter;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.type_1;
        tmp$ret$2 = new Triple(tmp_3, tmp3_elvis_lhs == null ? ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Any')) : tmp3_elvis_lhs, arguments_1.get_fkrdnv_k$(item));
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
      }
       while (!(item === last));
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    return instance_0.invoke_n75jxz_k$(tmp$ret$4, ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Any')));
  }
  function LambdaInitializer$initialize$lambda$lambda($instance, $arguments) {
    return function () {
      return get_EVALUATOR().error_st682z_k$($instance.ast_1, 'Invalid lambda argument count.', 'Lambda requires arguments of size ' + $instance.ast_1.parameters_1.get_size_woubt6_k$() + ', but received ' + $arguments.get_size_woubt6_k$() + '.');
    };
  }
  function LambdaInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = tmp instanceof Lambda_0 ? tmp : THROW_CCE();
    return new Object_1(LambdaInitializer_getInstance().type_gwc96h_k$('String'), 'Lambda/' + instance_0.ast_1.parameters_1.get_size_woubt6_k$() + '#' + instance_0.hashCode());
  }
  function LambdaInitializer() {
    LambdaInitializer_instance = this;
    TypeInitializer.call(this, 'Lambda');
  }
  LambdaInitializer.prototype.initialize_oabr29_k$ = function () {
    this.generics_1.add_1j60pz_k$(this.generic$default_lptava_k$('R', null, 2, null));
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = listOf(this.generic$default_lptava_k$('R', null, 2, null));
    var tmp_0 = listOf(to('arguments', this.type_4c71dw_k$('List', ['Dynamic'])));
    var tmp_1 = this.generic$default_lptava_k$('R', null, 2, null);
    this.method$default_6fwgyj_k$('invoke', null, tmp, tmp_0, tmp_1, null, LambdaInitializer$initialize$lambda, 34, null);
    var tmp_2 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_2, null, LambdaInitializer$initialize$lambda_0, 46, null);
  };
  LambdaInitializer.$metadata$ = objectMeta('LambdaInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var LambdaInitializer_instance;
  function LambdaInitializer_getInstance() {
    if (LambdaInitializer_instance == null)
      new LambdaInitializer();
    return LambdaInitializer_instance;
  }
  function Library$TypeInitializer$function$lambda($implementation) {
    return function (arguments_0) {
      return $implementation(arguments_0);
    };
  }
  function TypeInitializer(name) {
    this.name_1 = name;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.generics_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.inherits_1 = tmp$ret$1;
    this.scope_1 = new Definition_0(null);
    this.type_1 = new Base(this.name_1, this.generics_1, this.inherits_1, this.scope_1);
  }
  TypeInitializer.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  TypeInitializer.prototype.get_generics_1v316j_k$ = function () {
    return this.generics_1;
  };
  TypeInitializer.prototype.get_inherits_s1vexr_k$ = function () {
    return this.inherits_1;
  };
  TypeInitializer.prototype.get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  TypeInitializer.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  TypeInitializer.prototype.function_cpgcfz_k$ = function (name, operator, generics, parameters, returns, throws, implementation) {
    var tmp$ret$6;
    // Inline function 'kotlin.also' call
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(parameters, 10));
    var tmp0_iterator = parameters.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.library.TypeInitializer.function.<anonymous>' call
      tmp$ret$3 = new Declaration_4(item.first_1, item.second_1, false);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo;
    tmp$ret$5 = tmp$ret$4;
    var tmp0_also = new Definition(new Declaration_0(name, generics, tmp$ret$5, returns, throws));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.library.TypeInitializer.function.<anonymous>' call
    var tmp = tmp0_also;
    tmp.implementation_1 = Library$TypeInitializer$function$lambda(implementation);
    tmp$ret$6 = tmp0_also;
    var function_0 = tmp$ret$6;
    this.scope_1.functions_1.define$default_1vvya8_k$(function_0, null, 2, null);
    var tmp0_safe_receiver = operator;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.scope_1.functions_1.define_l7919s_k$(function_0, tmp0_safe_receiver);
      tmp$ret$7 = Unit_getInstance();
    }
  };
  TypeInitializer.prototype.function$default_ebxkuq_k$ = function (name, operator, generics, parameters, returns, throws, implementation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      operator = null;
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      generics = tmp$ret$0;
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0_1 = emptyList();
      tmp$ret$1 = Unit_getInstance();
      parameters = tmp$ret$0_1;
    }
    if (!(($mask0 & 16) === 0))
      returns = this.type_gwc96h_k$('Void');
    if (!(($mask0 & 32) === 0)) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0_2 = emptyList();
      tmp$ret$2 = Unit_getInstance();
      throws = tmp$ret$0_2;
    }
    return this.function_cpgcfz_k$(name, operator, generics, parameters, returns, throws, implementation);
  };
  TypeInitializer.prototype.method_d9fe6u_k$ = function (name, operator, generics, parameters, returns, throws, implementation) {
    this.function_cpgcfz_k$(name, operator, plus(this.generics_1, generics), plus(listOf(to('instance', this.type_1.reference_1)), parameters), returns, throws, implementation);
  };
  TypeInitializer.prototype.method$default_6fwgyj_k$ = function (name, operator, generics, parameters, returns, throws, implementation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      operator = null;
    if (!(($mask0 & 4) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0 = emptyList();
      tmp$ret$0_0 = Unit_getInstance();
      generics = tmp$ret$0;
    }
    if (!(($mask0 & 8) === 0)) {
      var tmp$ret$0_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0_1 = emptyList();
      tmp$ret$1 = Unit_getInstance();
      parameters = tmp$ret$0_1;
    }
    if (!(($mask0 & 16) === 0))
      returns = this.type_gwc96h_k$('Void');
    if (!(($mask0 & 32) === 0)) {
      var tmp$ret$0_2;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$0_2 = emptyList();
      tmp$ret$2 = Unit_getInstance();
      throws = tmp$ret$0_2;
    }
    return this.method_d9fe6u_k$(name, operator, generics, parameters, returns, throws, implementation);
  };
  TypeInitializer.prototype.type_gwc96h_k$ = function (name) {
    return ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$(name));
  };
  TypeInitializer.prototype.type_4c71dw_k$ = function (name, generics) {
    var tmp = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$(name)).get_base_wojaxm_k$();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(generics.length);
    var indexedObject = generics;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.library.TypeInitializer.type.<anonymous>' call
      tmp$ret$0 = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$(item));
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return new Reference(tmp, tmp$ret$2);
  };
  TypeInitializer.prototype.type_gc2zvv_k$ = function (name, generics) {
    return new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$(name)).get_base_wojaxm_k$(), toList_0(generics));
  };
  TypeInitializer.prototype.generic_67n30m_k$ = function (name, bound) {
    return new Generic(name, bound);
  };
  TypeInitializer.prototype.generic$default_lptava_k$ = function (name, bound, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      bound = this.type_gwc96h_k$('Any');
    return this.generic_67n30m_k$(name, bound);
  };
  TypeInitializer.$metadata$ = classMeta('TypeInitializer');
  function Library() {
    Library_instance = this;
    this.SCOPE_1 = new Definition_0(null);
    var tmp = this.get_TYPES_ih6ofk_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$0 = emptyList();
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$1 = emptyList();
    var tmp_1 = (new Base('Type', tmp_0, tmp$ret$1, new Definition_0(null))).reference_1;
    tmp.define$default_53rrc7_k$(tmp_1, null, 2, null);
    var tmp_2 = this.get_TYPES_ih6ofk_k$();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$2 = emptyList();
    var tmp_3 = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$3 = emptyList();
    var tmp_4 = (new Base('Dynamic', tmp_3, tmp$ret$3, new Definition_0(null))).reference_1;
    tmp_2.define$default_53rrc7_k$(tmp_4, null, 2, null);
    var initializers = listOf_0([AnyInitializer_getInstance(), KernelInitializer_getInstance(), VoidInitializer_getInstance(), NullInitializer_getInstance(), BooleanInitializer_getInstance(), IntegerInitializer_getInstance(), DecimalInitializer_getInstance(), StringInitializer_getInstance(), AtomInitializer_getInstance(), ListInitializer_getInstance(), ObjectInitializer_getInstance(), LambdaInitializer_getInstance(), ExceptionInitializer_getInstance(), NullableInitializer_getInstance()]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = initializers.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.library.Library.<anonymous>' call
      var tmp_5 = Library_getInstance().get_TYPES_ih6ofk_k$();
      tmp_5.define$default_53rrc7_k$(element.type_1.reference_1, null, 2, null);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = initializers.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.library.Library.<anonymous>' call
      element_0.initialize_oabr29_k$();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = flatten(KernelInitializer_getInstance().scope_1.functions_1.collect_fp9wdm_k$().get_values_ksazhn_k$());
    var tmp0_iterator_1 = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.library.Library.<anonymous>' call
      var tmp_6 = Library_getInstance().SCOPE_1.functions_1;
      tmp_6.define$default_1vvya8_k$(element_1, null, 2, null);
    }
  }
  Library.prototype.get_SCOPE_ig8tmz_k$ = function () {
    return this.SCOPE_1;
  };
  Library.prototype.get_TYPES_ih6ofk_k$ = function () {
    return this.SCOPE_1.types_1;
  };
  Library.$metadata$ = objectMeta('Library');
  var Library_instance;
  function Library_getInstance() {
    if (Library_instance == null)
      new Library();
    return Library_instance;
  }
  function ListInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    return new Object_1(ListInitializer_getInstance().type_gwc96h_k$('Integer'), Companion_getInstance().fromInt_venwfw_k$(instance_0.get_size_woubt6_k$()));
  }
  function ListInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = firstOrNull(instance_0);
    return tmp0_elvis_lhs == null ? new Object_1(ListInitializer_getInstance().type_gwc96h_k$('Null'), null) : tmp0_elvis_lhs;
  }
  function ListInitializer$initialize$lambda_1(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = lastOrNull(instance_0);
    return tmp0_elvis_lhs == null ? new Object_1(ListInitializer_getInstance().type_gwc96h_k$('Null'), null) : tmp0_elvis_lhs;
  }
  function ListInitializer$initialize$lambda_2(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var index = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp_0 = index.value_1;
    var index_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    var tmp_1 = get_EVALUATOR();
    var tmp_2 = index_0.compareTo_m610zm_k$(Companion_getInstance().ZERO_1) >= 0 ? index_0.compareTo_m610zm_k$(Companion_getInstance().fromInt_venwfw_k$(instance_0.get_size_woubt6_k$())) < 0 : false;
    tmp_1.require_k14o47_k$(tmp_2, ListInitializer$initialize$lambda$lambda(instance_0, index_0));
    return instance_0.get_fkrdnv_k$(index_0.intValue$default_s02x47_k$(false, 1, null));
  }
  function ListInitializer$initialize$lambda$lambda($instance, $index) {
    return function () {
      return get_EVALUATOR().error_st682z_k$(null, 'Invalid list index.', 'Expected an index in range [0, ' + $instance.get_size_woubt6_k$() + '), but received ' + $index + '.');
    };
  }
  function ListInitializer$initialize$lambda_3(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var index = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.component3' call
    tmp$ret$2 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(2);
    var value = tmp$ret$2;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, MutableList) : false) ? tmp : THROW_CCE();
    var tmp_0 = index.value_1;
    var index_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    var tmp_1 = get_EVALUATOR();
    var tmp_2 = index_0.compareTo_m610zm_k$(Companion_getInstance().ZERO_1) >= 0 ? index_0.compareTo_m610zm_k$(Companion_getInstance().fromInt_venwfw_k$(instance_0.get_size_woubt6_k$())) < 0 : false;
    tmp_1.require_k14o47_k$(tmp_2, ListInitializer$initialize$lambda$lambda_0(instance_0, index_0));
    instance_0.set_meu351_k$(index_0.intValue$default_s02x47_k$(false, 1, null), value);
    return new Object_1(ListInitializer_getInstance().type_gwc96h_k$('Void'), null);
  }
  function ListInitializer$initialize$lambda$lambda_0($instance, $index) {
    return function () {
      return get_EVALUATOR().error_st682z_k$(null, 'Invalid list index.', 'Expected an index in range [0, ' + $instance.get_size_woubt6_k$() + '), but received ' + $index + '.');
    };
  }
  function ListInitializer$initialize$lambda_4(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var start = tmp$ret$1;
    var elementType = ensureNotNull(instance.type_1.methods_1.get_ffk12n_k$('get', listOf(ListInitializer_getInstance().type_gwc96h_k$('Integer')))).get_returns_jfk3fe_k$();
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp_0 = start.value_1;
    var start_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    var tmp_1 = get_EVALUATOR();
    var tmp_2 = start_0.compareTo_m610zm_k$(Companion_getInstance().ZERO_1) >= 0 ? start_0.compareTo_m610zm_k$(Companion_getInstance().fromInt_venwfw_k$(instance_0.get_size_woubt6_k$())) <= 0 : false;
    tmp_1.require_k14o47_k$(tmp_2, ListInitializer$initialize$lambda$lambda_1(instance_0, start_0));
    var tmp_3 = ListInitializer_getInstance().type_gc2zvv_k$('List', [elementType]);
    return new Object_1(tmp_3, instance_0.subList_d153ha_k$(start_0.intValue$default_s02x47_k$(false, 1, null), instance_0.get_size_woubt6_k$()));
  }
  function ListInitializer$initialize$lambda$lambda_1($instance, $start) {
    return function () {
      return get_EVALUATOR().error_st682z_k$(null, 'Invalid index.', 'Expected a start index in range [0, ' + $instance.get_size_woubt6_k$() + '), but received ' + $start + '.');
    };
  }
  function ListInitializer$initialize$lambda_5(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var start = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.component3' call
    tmp$ret$2 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(2);
    var end = tmp$ret$2;
    var elementType = ensureNotNull(instance.type_1.methods_1.get_ffk12n_k$('get', listOf(ListInitializer_getInstance().type_gwc96h_k$('Integer')))).get_returns_jfk3fe_k$();
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp_0 = start.value_1;
    var start_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    var tmp_1 = end.value_1;
    var end_0 = tmp_1 instanceof BigInteger ? tmp_1 : THROW_CCE();
    var tmp_2 = get_EVALUATOR();
    var tmp_3 = start_0.compareTo_m610zm_k$(Companion_getInstance().ZERO_1) >= 0 ? start_0.compareTo_m610zm_k$(Companion_getInstance().fromInt_venwfw_k$(instance_0.get_size_woubt6_k$())) <= 0 : false;
    tmp_2.require_k14o47_k$(tmp_3, ListInitializer$initialize$lambda$lambda_2(instance_0, start_0));
    var tmp_4 = get_EVALUATOR();
    var tmp_5 = end_0.compareTo_m610zm_k$(start_0) >= 0 ? end_0.compareTo_m610zm_k$(Companion_getInstance().fromInt_venwfw_k$(instance_0.get_size_woubt6_k$())) <= 0 : false;
    tmp_4.require_k14o47_k$(tmp_5, ListInitializer$initialize$lambda$lambda_3(start_0, instance_0, end_0));
    var tmp_6 = ListInitializer_getInstance().type_gc2zvv_k$('List', [elementType]);
    var tmp_7 = start_0.intValue$default_s02x47_k$(false, 1, null);
    return new Object_1(tmp_6, instance_0.subList_d153ha_k$(tmp_7, end_0.intValue$default_s02x47_k$(false, 1, null)));
  }
  function ListInitializer$initialize$lambda$lambda_2($instance, $start) {
    return function () {
      return get_EVALUATOR().error_st682z_k$(null, 'Invalid index.', 'Expected a start index in range [0, ' + $instance.get_size_woubt6_k$() + '), but received ' + $start + '.');
    };
  }
  function ListInitializer$initialize$lambda$lambda_3($start, $instance, $end) {
    return function () {
      return get_EVALUATOR().error_st682z_k$(null, 'Invalid index.', 'Expected an end index in range [start = ' + $start + ', ' + $instance.get_size_woubt6_k$() + '), but received ' + $end + '.');
    };
  }
  function ListInitializer$initialize$lambda_6(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var value = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = value.methods_1.get_ffk12n_k$('==', listOf(value.type_1));
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw get_EVALUATOR().error_st682z_k$(null, 'Undefined method.', 'The method ' + value.type_1.get_base_wojaxm_k$().name_1 + '.==(' + value.type_1 + ') is undefined.');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var method = tmp_0;
    var tmp_1 = ListInitializer_getInstance().type_gwc96h_k$('Boolean');
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(instance_0, Collection)) {
        tmp_2 = instance_0.isEmpty_y1axqb_k$();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$2 = false;
        break $l$block_0;
      }
      var tmp0_iterator = instance_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$3;
        // Inline function 'dev.rhovas.interpreter.library.ListInitializer.initialize.<anonymous>.<anonymous>' call
        var tmp_3;
        if (element.type_1.isSubtypeOf_ngr8tl_k$(method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1)) {
          var tmp_4 = method.invoke_ed3umv_k$(listOf(element)).value_1;
          tmp_3 = (!(tmp_4 == null) ? typeof tmp_4 === 'boolean' : false) ? tmp_4 : THROW_CCE();
        } else {
          tmp_3 = false;
        }
        tmp$ret$3 = tmp_3;
        if (tmp$ret$3) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    return new Object_1(tmp_1, tmp$ret$2);
  }
  function ListInitializer$initialize$lambda_7(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var type = instance.type_1;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = (!(tmp_0 == null) ? isInterface(tmp_0, List) : false) ? tmp_0 : THROW_CCE();
    return new Object_1(type, plus(instance_0, other_0));
  }
  function ListInitializer$initialize$lambda_8(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var lambda = tmp$ret$1;
    var elementType = ensureNotNull(instance.type_1.methods_1.get_ffk12n_k$('get', listOf(ListInitializer_getInstance().type_gwc96h_k$('Integer')))).get_returns_jfk3fe_k$();
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp_0 = lambda.value_1;
    var lambda_0 = tmp_0 instanceof Lambda_0 ? tmp_0 : THROW_CCE();
    var tmp_1 = get_EVALUATOR();
    var tmp_2 = lambda_0.ast_1.parameters_1.isEmpty_y1axqb_k$() ? true : lambda_0.ast_1.parameters_1.get_size_woubt6_k$() === 1;
    tmp_1.require_k14o47_k$(tmp_2, ListInitializer$initialize$lambda$lambda_4(lambda_0));
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = instance_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.library.ListInitializer.initialize.<anonymous>.<anonymous>' call
      lambda_0.invoke_n75jxz_k$(listOf(new Triple('val', elementType, element)), ListInitializer_getInstance().type_gwc96h_k$('Void'));
    }
    return new Object_1(ListInitializer_getInstance().type_gwc96h_k$('Void'), null);
  }
  function ListInitializer$initialize$lambda$lambda_4($lambda) {
    return function () {
      return get_EVALUATOR().error_st682z_k$($lambda.ast_1, 'Invalid lambda parameter count.', 'Function List.for requires a lambda with 1 parameter, but received ' + $lambda.ast_1.parameters_1.get_size_woubt6_k$() + '.');
    };
  }
  function ListInitializer$initialize$lambda_9(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var lambda = tmp$ret$1;
    var elementType = ensureNotNull(instance.type_1.methods_1.get_ffk12n_k$('get', listOf(ListInitializer_getInstance().type_gwc96h_k$('Integer')))).get_returns_jfk3fe_k$();
    var resultType = ensureNotNull(lambda.type_1.methods_1.get_ffk12n_k$('invoke', listOf(ListInitializer_getInstance().type_4c71dw_k$('List', ['Dynamic'])))).get_returns_jfk3fe_k$();
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp_0 = lambda.value_1;
    var lambda_0 = tmp_0 instanceof Lambda_0 ? tmp_0 : THROW_CCE();
    var tmp_1 = get_EVALUATOR();
    var tmp_2 = lambda_0.ast_1.parameters_1.isEmpty_y1axqb_k$() ? true : lambda_0.ast_1.parameters_1.get_size_woubt6_k$() === 1;
    tmp_1.require_k14o47_k$(tmp_2, ListInitializer$initialize$lambda$lambda_5(lambda_0));
    var tmp_3 = ListInitializer_getInstance().type_gc2zvv_k$('List', [elementType]);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(instance_0, 10));
    var tmp0_iterator = instance_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$2;
      // Inline function 'dev.rhovas.interpreter.library.ListInitializer.initialize.<anonymous>.<anonymous>' call
      tmp$ret$2 = lambda_0.invoke_n75jxz_k$(listOf(new Triple('val', elementType, item)), resultType);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    return new Object_1(tmp_3, tmp$ret$4);
  }
  function ListInitializer$initialize$lambda$lambda_5($lambda) {
    return function () {
      return get_EVALUATOR().error_st682z_k$($lambda.ast_1, 'Invalid lambda parameter count.', 'Function List.map requires a lambda with 1 parameter, but received ' + $lambda.ast_1.parameters_1.get_size_woubt6_k$() + '.');
    };
  }
  function ListInitializer$initialize$lambda_10(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var lambda = tmp$ret$1;
    var elementType = ensureNotNull(instance.type_1.methods_1.get_ffk12n_k$('get', listOf(ListInitializer_getInstance().type_gwc96h_k$('Integer')))).get_returns_jfk3fe_k$();
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp_0 = lambda.value_1;
    var lambda_0 = tmp_0 instanceof Lambda_0 ? tmp_0 : THROW_CCE();
    var tmp_1 = get_EVALUATOR();
    var tmp_2 = lambda_0.ast_1.parameters_1.isEmpty_y1axqb_k$() ? true : lambda_0.ast_1.parameters_1.get_size_woubt6_k$() === 1;
    tmp_1.require_k14o47_k$(tmp_2, ListInitializer$initialize$lambda$lambda_6(lambda_0));
    var tmp_3 = ListInitializer_getInstance().type_gc2zvv_k$('List', [elementType]);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = instance_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$2;
      // Inline function 'dev.rhovas.interpreter.library.ListInitializer.initialize.<anonymous>.<anonymous>' call
      var result = lambda_0.invoke_n75jxz_k$(listOf(new Triple('val', elementType, element)), elementType);
      var tmp_4 = get_EVALUATOR();
      var tmp_5 = result.type_1.isSubtypeOf_ngr8tl_k$(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Boolean')));
      tmp_4.require_k14o47_k$(tmp_5, ListInitializer$initialize$lambda$lambda_7(lambda_0, result));
      var tmp_6 = result.value_1;
      tmp$ret$2 = (!(tmp_6 == null) ? typeof tmp_6 === 'boolean' : false) ? tmp_6 : THROW_CCE();
      if (tmp$ret$2) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    tmp$ret$3 = tmp0_filterTo;
    tmp$ret$4 = tmp$ret$3;
    return new Object_1(tmp_3, tmp$ret$4);
  }
  function ListInitializer$initialize$lambda$lambda_6($lambda) {
    return function () {
      return get_EVALUATOR().error_st682z_k$($lambda.ast_1, 'Invalid lambda parameter count.', 'Function List.map requires a lambda with 1 parameter, but received ' + $lambda.ast_1.parameters_1.get_size_woubt6_k$() + '.');
    };
  }
  function ListInitializer$initialize$lambda$lambda_7($lambda, $result) {
    return function () {
      return get_EVALUATOR().error_st682z_k$($lambda.ast_1, 'Invalid lambda result.', 'Function List.filter requires the lambda result to be type Boolean, but received ' + $result.type_1 + '.');
    };
  }
  function ListInitializer$initialize$lambda_11(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var lambda = tmp$ret$1;
    var elementType = ensureNotNull(instance.type_1.methods_1.get_ffk12n_k$('get', listOf(ListInitializer_getInstance().type_gwc96h_k$('Integer')))).get_returns_jfk3fe_k$();
    var resultType = ensureNotNull(lambda.type_1.methods_1.get_ffk12n_k$('invoke', listOf(ListInitializer_getInstance().type_4c71dw_k$('List', ['Dynamic'])))).get_returns_jfk3fe_k$();
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp_0 = lambda.value_1;
    var lambda_0 = tmp_0 instanceof Lambda_0 ? tmp_0 : THROW_CCE();
    var tmp_1 = get_EVALUATOR();
    var tmp_2 = lambda_0.ast_1.parameters_1.isEmpty_y1axqb_k$() ? true : lambda_0.ast_1.parameters_1.get_size_woubt6_k$() === 2;
    tmp_1.require_k14o47_k$(tmp_2, ListInitializer$initialize$lambda$lambda_8(lambda_0));
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = instance_0.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$2 = null;
        break $l$block;
      }
      var accumulator = iterator.next_20eer_k$();
      while (iterator.hasNext_bitz1p_k$()) {
        var tmp$ret$3;
        // Inline function 'dev.rhovas.interpreter.library.ListInitializer.initialize.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = accumulator;
        var tmp1__anonymous__uwfjfc = iterator.next_20eer_k$();
        tmp$ret$3 = lambda_0.invoke_n75jxz_k$(listOf_0([new Triple('result', resultType, tmp0__anonymous__q1qw7t), new Triple('element', elementType, tmp1__anonymous__uwfjfc)]), resultType);
        accumulator = tmp$ret$3;
      }
      tmp$ret$2 = accumulator;
    }
    var tmp0_elvis_lhs = tmp$ret$2;
    return tmp0_elvis_lhs == null ? new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Null')), null) : tmp0_elvis_lhs;
  }
  function ListInitializer$initialize$lambda$lambda_8($lambda) {
    return function () {
      return get_EVALUATOR().error_st682z_k$($lambda.ast_1, 'Invalid lambda parameter count.', 'Function List.reduce requires a lambda with 2 parameters, but received ' + $lambda.ast_1.parameters_1.get_size_woubt6_k$() + '.');
    };
  }
  function ListInitializer$initialize$lambda_12(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var initial = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.component3' call
    tmp$ret$2 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(2);
    var lambda = tmp$ret$2;
    var elementType = ensureNotNull(instance.type_1.methods_1.get_ffk12n_k$('get', listOf(ListInitializer_getInstance().type_gwc96h_k$('Integer')))).get_returns_jfk3fe_k$();
    var resultType = ensureNotNull(lambda.type_1.methods_1.get_ffk12n_k$('invoke', listOf(ListInitializer_getInstance().type_4c71dw_k$('List', ['Dynamic'])))).get_returns_jfk3fe_k$();
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp_0 = lambda.value_1;
    var lambda_0 = tmp_0 instanceof Lambda_0 ? tmp_0 : THROW_CCE();
    var tmp_1 = get_EVALUATOR();
    var tmp_2 = lambda_0.ast_1.parameters_1.isEmpty_y1axqb_k$() ? true : lambda_0.ast_1.parameters_1.get_size_woubt6_k$() === 2;
    tmp_1.require_k14o47_k$(tmp_2, ListInitializer$initialize$lambda$lambda_9(lambda_0));
    var tmp$ret$4;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = initial;
    var tmp0_iterator = instance_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.library.ListInitializer.initialize.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      tmp$ret$3 = lambda_0.invoke_n75jxz_k$(listOf_0([new Triple('result', resultType, tmp0__anonymous__q1qw7t), new Triple('element', elementType, element)]), resultType);
      accumulator = tmp$ret$3;
    }
    tmp$ret$4 = accumulator;
    return tmp$ret$4;
  }
  function ListInitializer$initialize$lambda$lambda_9($lambda) {
    return function () {
      return get_EVALUATOR().error_st682z_k$($lambda.ast_1, 'Invalid lambda parameter count.', 'Function List.reduce requires a lambda with 2 parameters, but received ' + $lambda.ast_1.parameters_1.get_size_woubt6_k$() + '.');
    };
  }
  function ListInitializer$initialize$lambda_13(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = (!(tmp_0 == null) ? isInterface(tmp_0, List) : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = ListInitializer_getInstance().type_gwc96h_k$('Boolean');
    var tmp_2;
    if (instance_0.get_size_woubt6_k$() === other_0.get_size_woubt6_k$()) {
      var tmp$ret$2;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp0_all = zip(instance_0, other_0);
        var tmp_3;
        if (isInterface(tmp0_all, Collection)) {
          tmp_3 = tmp0_all.isEmpty_y1axqb_k$();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
        var tmp0_iterator = tmp0_all.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$3;
          // Inline function 'dev.rhovas.interpreter.library.ListInitializer.initialize.<anonymous>.<anonymous>' call
          var tmp0_elvis_lhs = element.first_1.methods_1.get_ffk12n_k$('==', listOf(element.first_1.type_1));
          var tmp_4;
          if (tmp0_elvis_lhs == null) {
            throw get_EVALUATOR().error_st682z_k$(null, 'Undefined method.', 'The method ' + element.first_1.type_1.get_base_wojaxm_k$().name_1 + '.==(' + element.first_1.type_1 + ') is undefined.');
          } else {
            tmp_4 = tmp0_elvis_lhs;
          }
          var method = tmp_4;
          var tmp_5;
          if (element.second_1.type_1.isSubtypeOf_ngr8tl_k$(method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1)) {
            var tmp_6 = method.invoke_ed3umv_k$(listOf(element.second_1)).value_1;
            tmp_5 = (!(tmp_6 == null) ? typeof tmp_6 === 'boolean' : false) ? tmp_6 : THROW_CCE();
          } else {
            tmp_5 = false;
          }
          tmp$ret$3 = tmp_5;
          if (!tmp$ret$3) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
        }
        tmp$ret$2 = true;
      }
      tmp_2 = tmp$ret$2;
    } else {
      tmp_2 = false;
    }
    return new Object_1(tmp_1, tmp_2);
  }
  function ListInitializer$initialize$lambda_14(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp_0 = ListInitializer_getInstance().type_gwc96h_k$('String');
    var tmp$ret$5;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(instance_0, 10));
    var tmp0_iterator = instance_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.library.ListInitializer.initialize.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$1 = emptyList();
      var tmp_1 = ensureNotNull(item.methods_1.get_ffk12n_k$('toString', tmp$ret$1));
      var tmp$ret$2;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$2 = emptyList();
      var tmp_2 = tmp_1.invoke_ed3umv_k$(tmp$ret$2).value_1;
      tmp$ret$3 = (!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : THROW_CCE();
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$3);
    }
    tmp$ret$4 = tmp0_mapTo;
    tmp$ret$5 = tmp$ret$4;
    return new Object_1(tmp_0, toString(tmp$ret$5));
  }
  function ListInitializer() {
    ListInitializer_instance = this;
    TypeInitializer.call(this, 'List');
  }
  ListInitializer.prototype.initialize_oabr29_k$ = function () {
    this.generics_1.add_1j60pz_k$(this.generic$default_lptava_k$('T', null, 2, null));
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('size', null, null, null, tmp, null, ListInitializer$initialize$lambda, 46, null);
    var tmp_0 = this.type_gc2zvv_k$('Nullable', [this.generic$default_lptava_k$('T', null, 2, null)]);
    this.method$default_6fwgyj_k$('first', null, null, null, tmp_0, null, ListInitializer$initialize$lambda_0, 46, null);
    var tmp_1 = this.type_gc2zvv_k$('Nullable', [this.generic$default_lptava_k$('T', null, 2, null)]);
    this.method$default_6fwgyj_k$('last', null, null, null, tmp_1, null, ListInitializer$initialize$lambda_1, 46, null);
    var tmp_2 = listOf(to('index', this.type_gwc96h_k$('Integer')));
    var tmp_3 = this.generic$default_lptava_k$('T', null, 2, null);
    this.method$default_6fwgyj_k$('get', '[]', null, tmp_2, tmp_3, null, ListInitializer$initialize$lambda_2, 36, null);
    var tmp_4 = to('index', this.type_gwc96h_k$('Integer'));
    var tmp_5 = listOf_0([tmp_4, to('value', this.generic$default_lptava_k$('T', null, 2, null))]);
    this.method$default_6fwgyj_k$('set', '[]=', null, tmp_5, null, null, ListInitializer$initialize$lambda_3, 52, null);
    var tmp_6 = listOf(to('start', this.type_gwc96h_k$('Integer')));
    var tmp_7 = this.type_gc2zvv_k$('List', [this.generic$default_lptava_k$('T', null, 2, null)]);
    this.method$default_6fwgyj_k$('slice', null, null, tmp_6, tmp_7, null, ListInitializer$initialize$lambda_4, 38, null);
    var tmp_8 = listOf_0([to('start', this.type_gwc96h_k$('Integer')), to('end', this.type_gwc96h_k$('Integer'))]);
    var tmp_9 = this.type_gc2zvv_k$('List', [this.generic$default_lptava_k$('T', null, 2, null)]);
    this.method$default_6fwgyj_k$('slice', null, null, tmp_8, tmp_9, null, ListInitializer$initialize$lambda_5, 38, null);
    var tmp_10 = listOf(to('value', this.generic$default_lptava_k$('T', null, 2, null)));
    var tmp_11 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('contains', null, null, tmp_10, tmp_11, null, ListInitializer$initialize$lambda_6, 38, null);
    var tmp_12 = listOf(to('other', this.type_gc2zvv_k$('List', [this.generic$default_lptava_k$('T', null, 2, null)])));
    var tmp_13 = this.type_gc2zvv_k$('List', [this.generic$default_lptava_k$('T', null, 2, null)]);
    this.method$default_6fwgyj_k$('concat', '+', null, tmp_12, tmp_13, null, ListInitializer$initialize$lambda_7, 36, null);
    var tmp_14 = listOf(to('lambda', this.type_4c71dw_k$('Lambda', ['Void'])));
    this.method$default_6fwgyj_k$('for', null, null, tmp_14, null, null, ListInitializer$initialize$lambda_8, 54, null);
    var tmp_15 = listOf(to('lambda', this.type_gc2zvv_k$('Lambda', [this.generic$default_lptava_k$('R', null, 2, null)])));
    var tmp_16 = this.type_gc2zvv_k$('List', [this.generic$default_lptava_k$('R', null, 2, null)]);
    this.method$default_6fwgyj_k$('map', null, null, tmp_15, tmp_16, null, ListInitializer$initialize$lambda_9, 38, null);
    var tmp_17 = listOf(to('lambda', this.type_4c71dw_k$('Lambda', ['Boolean'])));
    var tmp_18 = this.type_gc2zvv_k$('List', [this.generic$default_lptava_k$('T', null, 2, null)]);
    this.method$default_6fwgyj_k$('filter', null, null, tmp_17, tmp_18, null, ListInitializer$initialize$lambda_10, 38, null);
    var tmp_19 = listOf(to('lambda', this.type_gc2zvv_k$('Lambda', [this.generic$default_lptava_k$('T', null, 2, null)])));
    var tmp_20 = this.type_gc2zvv_k$('Nullable', [this.generic$default_lptava_k$('T', null, 2, null)]);
    this.method$default_6fwgyj_k$('reduce', null, null, tmp_19, tmp_20, null, ListInitializer$initialize$lambda_11, 38, null);
    var tmp_21 = listOf(this.generic$default_lptava_k$('R', null, 2, null));
    var tmp_22 = to('initial', this.generic$default_lptava_k$('R', null, 2, null));
    var tmp_23 = listOf_0([tmp_22, to('lambda', this.type_gc2zvv_k$('Lambda', [this.generic$default_lptava_k$('R', null, 2, null)]))]);
    var tmp_24 = this.generic$default_lptava_k$('R', null, 2, null);
    this.method$default_6fwgyj_k$('reduce', null, tmp_21, tmp_23, tmp_24, null, ListInitializer$initialize$lambda_12, 34, null);
    var tmp_25 = listOf(to('other', this.type_gc2zvv_k$('List', [this.generic$default_lptava_k$('T', null, 2, null)])));
    var tmp_26 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('equals', '==', null, tmp_25, tmp_26, null, ListInitializer$initialize$lambda_13, 36, null);
    var tmp_27 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_27, null, ListInitializer$initialize$lambda_14, 46, null);
  };
  ListInitializer.$metadata$ = objectMeta('ListInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var ListInitializer_instance;
  function ListInitializer_getInstance() {
    if (ListInitializer_instance == null)
      new ListInitializer();
    return ListInitializer_instance;
  }
  function NullInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    return new Object_1(NullInitializer_getInstance().type_gwc96h_k$('Boolean'), true);
  }
  function NullInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    return new Object_1(NullInitializer_getInstance().type_gwc96h_k$('String'), 'null');
  }
  function NullInitializer() {
    NullInitializer_instance = this;
    TypeInitializer.call(this, 'Null');
  }
  NullInitializer.prototype.initialize_oabr29_k$ = function () {
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = listOf(to('other', this.type_gwc96h_k$('Null')));
    var tmp_0 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('equals', '==', null, tmp, tmp_0, null, NullInitializer$initialize$lambda, 36, null);
    var tmp_1 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_1, null, NullInitializer$initialize$lambda_0, 46, null);
  };
  NullInitializer.$metadata$ = objectMeta('NullInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var NullInitializer_instance;
  function NullInitializer_getInstance() {
    if (NullInitializer_instance == null)
      new NullInitializer();
    return NullInitializer_instance;
  }
  function NullableInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var tmp0_elvis_lhs = (tmp == null ? true : tmp instanceof Object_1) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw get_EVALUATOR().error_st682z_k$(null, 'Invalid Nullable access', 'The value was not defined.');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function NullableInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = (tmp == null ? true : tmp instanceof Object_1) ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = (tmp_0 == null ? true : tmp_0 instanceof Object_1) ? tmp_0 : THROW_CCE();
    var tmp_1;
    if (instance_0 == null ? true : other_0 == null) {
      tmp_1 = new Object_1(NullableInitializer_getInstance().type_gwc96h_k$('Boolean'), equals(instance_0, other_0));
    } else {
      var tmp0_elvis_lhs = instance_0.methods_1.get_ffk12n_k$('==', listOf(instance_0.type_1));
      var tmp_2;
      if (tmp0_elvis_lhs == null) {
        throw get_EVALUATOR().error_st682z_k$(null, 'Undefined method.', 'The method ' + instance_0.type_1.get_base_wojaxm_k$().name_1 + '.==(' + instance_0.type_1 + ') is undefined.');
      } else {
        tmp_2 = tmp0_elvis_lhs;
      }
      var method = tmp_2;
      tmp_1 = other_0.type_1.isSubtypeOf_ngr8tl_k$(method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1) ? method.invoke_ed3umv_k$(listOf(other_0)) : new Object_1(NullableInitializer_getInstance().type_gwc96h_k$('Boolean'), false);
    }
    return tmp_1;
  }
  function NullableInitializer$initialize$lambda_1(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = (tmp == null ? true : tmp instanceof Object_1) ? tmp : THROW_CCE();
    var tmp0_subject = instance_0;
    var tmp_0;
    if (tmp0_subject == null) {
      tmp_0 = new Object_1(NullableInitializer_getInstance().type_gwc96h_k$('String'), 'null');
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$1 = emptyList();
      var tmp_1 = ensureNotNull(instance_0.methods_1.get_ffk12n_k$('toString', tmp$ret$1));
      var tmp$ret$2;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$2 = emptyList();
      tmp_0 = tmp_1.invoke_ed3umv_k$(tmp$ret$2);
    }
    return tmp_0;
  }
  function NullableInitializer() {
    NullableInitializer_instance = this;
    TypeInitializer.call(this, 'Nullable');
  }
  NullableInitializer.prototype.initialize_oabr29_k$ = function () {
    this.generics_1.add_1j60pz_k$(this.generic$default_lptava_k$('T', null, 2, null));
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = this.generic$default_lptava_k$('T', null, 2, null);
    this.method$default_6fwgyj_k$('get', null, null, null, tmp, null, NullableInitializer$initialize$lambda, 46, null);
    var tmp_0 = listOf(to('other', this.type_gc2zvv_k$('Nullable', [this.generic$default_lptava_k$('T', null, 2, null)])));
    var tmp_1 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('equals', '==', null, tmp_0, tmp_1, null, NullableInitializer$initialize$lambda_0, 36, null);
    var tmp_2 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_2, null, NullableInitializer$initialize$lambda_1, 46, null);
  };
  NullableInitializer.$metadata$ = objectMeta('NullableInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var NullableInitializer_instance;
  function NullableInitializer_getInstance() {
    if (NullableInitializer_instance == null)
      new NullableInitializer();
    return NullableInitializer_instance;
  }
  function ObjectInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var key = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE();
    var tmp_0 = key.value_1;
    var key_0 = tmp_0 instanceof Atom ? tmp_0 : THROW_CCE();
    var tmp0_elvis_lhs = instance_0.get_1mhr4y_k$(key_0.name_1);
    return tmp0_elvis_lhs == null ? new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Null')), null) : tmp0_elvis_lhs;
  }
  function ObjectInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var key = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.component3' call
    tmp$ret$2 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(2);
    var value = tmp$ret$2;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, MutableMap) : false) ? tmp : THROW_CCE();
    var tmp_0 = key.value_1;
    var key_0 = tmp_0 instanceof Atom ? tmp_0 : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = key_0.name_1;
    instance_0.put_3mhbri_k$(tmp0_set, value);
    return new Object_1(ObjectInitializer_getInstance().type_gwc96h_k$('Void'), null);
  }
  function ObjectInitializer$initialize$lambda_1(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = (!(tmp_0 == null) ? isInterface(tmp_0, Map) : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = ObjectInitializer_getInstance().type_gwc96h_k$('Boolean');
    var tmp_2;
    if (equals(instance_0.get_keys_wop4xp_k$(), other_0.get_keys_wop4xp_k$())) {
      var tmp$ret$2;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp0_all = instance_0.get_keys_wop4xp_k$();
        var tmp_3;
        if (isInterface(tmp0_all, Collection)) {
          tmp_3 = tmp0_all.isEmpty_y1axqb_k$();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
        var tmp0_iterator = tmp0_all.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$3;
          // Inline function 'dev.rhovas.interpreter.library.ObjectInitializer.initialize.<anonymous>.<anonymous>' call
          var tmp0_elvis_lhs = ensureNotNull(instance_0.get_1mhr4y_k$(element)).methods_1.get_ffk12n_k$('==', listOf(ensureNotNull(instance_0.get_1mhr4y_k$(element)).type_1));
          var tmp_4;
          if (tmp0_elvis_lhs == null) {
            throw get_EVALUATOR().error_st682z_k$(null, 'Undefined method.', 'The method ' + ensureNotNull(instance_0.get_1mhr4y_k$(element)).type_1.get_base_wojaxm_k$().name_1 + '.==(' + ensureNotNull(instance_0.get_1mhr4y_k$(element)).type_1 + ') is undefined.');
          } else {
            tmp_4 = tmp0_elvis_lhs;
          }
          var method = tmp_4;
          var tmp_5;
          if (ensureNotNull(other_0.get_1mhr4y_k$(element)).type_1.isSubtypeOf_ngr8tl_k$(method.get_parameters_cl4rkd_k$().get_fkrdnv_k$(0).type_1)) {
            var tmp_6 = method.invoke_ed3umv_k$(listOf(ensureNotNull(other_0.get_1mhr4y_k$(element)))).value_1;
            tmp_5 = (!(tmp_6 == null) ? typeof tmp_6 === 'boolean' : false) ? tmp_6 : THROW_CCE();
          } else {
            tmp_5 = false;
          }
          tmp$ret$3 = tmp_5;
          if (!tmp$ret$3) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
        }
        tmp$ret$2 = true;
      }
      tmp_2 = tmp$ret$2;
    } else {
      tmp_2 = false;
    }
    return new Object_1(tmp_1, tmp_2);
  }
  function ObjectInitializer$initialize$lambda_2(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : THROW_CCE();
    var tmp_0 = ObjectInitializer_getInstance().type_gwc96h_k$('String');
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp1_mapValuesTo = LinkedHashMap_init_$Create$(mapCapacity(instance_0.get_size_woubt6_k$()));
    var tmp$ret$5;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = instance_0.get_entries_p20ztl_k$();
    var tmp0_iterator = tmp0_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var tmp_1 = tmp$ret$1;
      var tmp$ret$4;
      // Inline function 'dev.rhovas.interpreter.library.ObjectInitializer.initialize.<anonymous>.<anonymous>' call
      var tmp_2 = element.get_value_j01efc_k$().methods_1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$2 = emptyList();
      var tmp_3 = ensureNotNull(tmp_2.get_ffk12n_k$('toString', tmp$ret$2));
      var tmp$ret$3;
      // Inline function 'kotlin.collections.listOf' call
      tmp$ret$3 = emptyList();
      var tmp_4 = tmp_3.invoke_ed3umv_k$(tmp$ret$3).value_1;
      tmp$ret$4 = (!(tmp_4 == null) ? typeof tmp_4 === 'string' : false) ? tmp_4 : THROW_CCE();
      tmp1_mapValuesTo.put_3mhbri_k$(tmp_1, tmp$ret$4);
    }
    tmp$ret$5 = tmp1_mapValuesTo;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    return new Object_1(tmp_0, toString(tmp$ret$7));
  }
  function ObjectInitializer() {
    ObjectInitializer_instance = this;
    TypeInitializer.call(this, 'Object');
  }
  ObjectInitializer.prototype.initialize_oabr29_k$ = function () {
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = listOf(to('key', this.type_gwc96h_k$('Atom')));
    var tmp_0 = this.type_gwc96h_k$('Dynamic');
    this.method$default_6fwgyj_k$('get', '[]', null, tmp, tmp_0, null, ObjectInitializer$initialize$lambda, 36, null);
    var tmp_1 = listOf_0([to('key', this.type_gwc96h_k$('Atom')), to('value', this.type_gwc96h_k$('Dynamic'))]);
    var tmp_2 = this.type_gwc96h_k$('Dynamic');
    this.method$default_6fwgyj_k$('set', '[]=', null, tmp_1, tmp_2, null, ObjectInitializer$initialize$lambda_0, 36, null);
    var tmp_3 = listOf(to('other', this.type_gwc96h_k$('Object')));
    var tmp_4 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('equals', '==', null, tmp_3, tmp_4, null, ObjectInitializer$initialize$lambda_1, 36, null);
    var tmp_5 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_5, null, ObjectInitializer$initialize$lambda_2, 46, null);
  };
  ObjectInitializer.$metadata$ = objectMeta('ObjectInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var ObjectInitializer_instance;
  function ObjectInitializer_getInstance() {
    if (ObjectInitializer_instance == null)
      new ObjectInitializer();
    return ObjectInitializer_instance;
  }
  function StringInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return new Object_1(StringInitializer_getInstance().type_gwc96h_k$('Integer'), Companion_getInstance().fromInt_venwfw_k$(instance_0.length));
  }
  function StringInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var start = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    var tmp_0 = start.value_1;
    var start_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    var tmp_1 = get_EVALUATOR();
    var tmp_2 = start_0.compareTo_m610zm_k$(Companion_getInstance().ZERO_1) >= 0 ? start_0.compareTo_m610zm_k$(Companion_getInstance().fromInt_venwfw_k$(instance_0.length)) <= 0 : false;
    tmp_1.require_k14o47_k$(tmp_2, StringInitializer$initialize$lambda$lambda(instance_0, start_0));
    var tmp_3 = StringInitializer_getInstance().type_gwc96h_k$('String');
    var tmp$ret$3;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = start_0.intValue$default_s02x47_k$(false, 1, null);
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = instance_0;
    tmp$ret$3 = tmp$ret$2.substring(tmp0_substring);
    return new Object_1(tmp_3, tmp$ret$3);
  }
  function StringInitializer$initialize$lambda$lambda($instance, $start) {
    return function () {
      return get_EVALUATOR().error_st682z_k$(null, 'Invalid index.', 'Expected a start index in range [0, ' + $instance.length + '), but received ' + $start + '.');
    };
  }
  function StringInitializer$initialize$lambda_1(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var start = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.component3' call
    tmp$ret$2 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(2);
    var end = tmp$ret$2;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    var tmp_0 = start.value_1;
    var start_0 = tmp_0 instanceof BigInteger ? tmp_0 : THROW_CCE();
    var tmp_1 = end.value_1;
    var end_0 = tmp_1 instanceof BigInteger ? tmp_1 : THROW_CCE();
    var tmp_2 = get_EVALUATOR();
    var tmp_3 = start_0.compareTo_m610zm_k$(Companion_getInstance().ZERO_1) >= 0 ? start_0.compareTo_m610zm_k$(Companion_getInstance().fromInt_venwfw_k$(instance_0.length)) <= 0 : false;
    tmp_2.require_k14o47_k$(tmp_3, StringInitializer$initialize$lambda$lambda_0(instance_0, start_0));
    var tmp_4 = get_EVALUATOR();
    var tmp_5 = end_0.compareTo_m610zm_k$(start_0) >= 0 ? end_0.compareTo_m610zm_k$(Companion_getInstance().fromInt_venwfw_k$(instance_0.length)) <= 0 : false;
    tmp_4.require_k14o47_k$(tmp_5, StringInitializer$initialize$lambda$lambda_1(start_0, instance_0, end_0));
    var tmp_6 = StringInitializer_getInstance().type_gwc96h_k$('String');
    var tmp$ret$4;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = start_0.intValue$default_s02x47_k$(false, 1, null);
    var tmp1_substring = end_0.intValue$default_s02x47_k$(false, 1, null);
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = instance_0;
    tmp$ret$4 = tmp$ret$3.substring(tmp0_substring, tmp1_substring);
    return new Object_1(tmp_6, tmp$ret$4);
  }
  function StringInitializer$initialize$lambda$lambda_0($instance, $start) {
    return function () {
      return get_EVALUATOR().error_st682z_k$(null, 'Invalid index.', 'Expected a start index in range [0, ' + $instance.length + '), but received ' + $start + '.');
    };
  }
  function StringInitializer$initialize$lambda$lambda_1($start, $instance, $end) {
    return function () {
      return get_EVALUATOR().error_st682z_k$(null, 'Invalid index.', 'Expected an end index in range [start = ' + $start + ', ' + $instance.length + '), but received ' + $end + '.');
    };
  }
  function StringInitializer$initialize$lambda_2(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = StringInitializer_getInstance().type_gwc96h_k$('Boolean');
    return new Object_1(tmp_1, contains$default(instance_0, other_0, false, 2, null));
  }
  function StringInitializer$initialize$lambda_3(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var original = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.component3' call
    tmp$ret$2 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(2);
    var value = tmp$ret$2;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    var tmp_0 = original.value_1;
    var original_0 = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = value.value_1;
    var value_0 = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = StringInitializer_getInstance().type_gwc96h_k$('String');
    return new Object_1(tmp_2, replace$default(instance_0, original_0, value_0, false, 4, null));
  }
  function StringInitializer$initialize$lambda_4(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
    return new Object_1(StringInitializer_getInstance().type_gwc96h_k$('String'), instance_0 + other_0);
  }
  function StringInitializer$initialize$lambda_5(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    return new Object_1(StringInitializer_getInstance().type_gwc96h_k$('Boolean'), equals(instance.value_1, other.value_1));
  }
  function StringInitializer$initialize$lambda_6(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    var tmp_0 = other.value_1;
    var other_0 = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
    return new Object_1(StringInitializer_getInstance().type_gwc96h_k$('Integer'), Companion_getInstance().fromInt_venwfw_k$(compareTo(instance_0, other_0)));
  }
  function StringInitializer$initialize$lambda_7(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    return new Object_1(StringInitializer_getInstance().type_gwc96h_k$('String'), toString_0(instance.value_1));
  }
  function StringInitializer$initialize$lambda_8(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp = instance.value_1;
    var instance_0 = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    return new Object_1(StringInitializer_getInstance().type_gwc96h_k$('Atom'), instance_0);
  }
  function StringInitializer() {
    StringInitializer_instance = this;
    TypeInitializer.call(this, 'String');
  }
  StringInitializer.prototype.initialize_oabr29_k$ = function () {
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('size', null, null, null, tmp, null, StringInitializer$initialize$lambda, 46, null);
    var tmp_0 = listOf(to('start', this.type_gwc96h_k$('Integer')));
    var tmp_1 = this.type_gc2zvv_k$('List', [this.generic$default_lptava_k$('T', null, 2, null)]);
    this.method$default_6fwgyj_k$('slice', null, null, tmp_0, tmp_1, null, StringInitializer$initialize$lambda_0, 38, null);
    var tmp_2 = listOf_0([to('start', this.type_gwc96h_k$('Integer')), to('end', this.type_gwc96h_k$('Integer'))]);
    var tmp_3 = this.type_gc2zvv_k$('List', [this.generic$default_lptava_k$('T', null, 2, null)]);
    this.method$default_6fwgyj_k$('slice', null, null, tmp_2, tmp_3, null, StringInitializer$initialize$lambda_1, 38, null);
    var tmp_4 = listOf(to('other', this.type_gwc96h_k$('String')));
    var tmp_5 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('contains', null, null, tmp_4, tmp_5, null, StringInitializer$initialize$lambda_2, 38, null);
    var tmp_6 = listOf_0([to('original', this.type_gwc96h_k$('String')), to('value', this.type_gwc96h_k$('String'))]);
    var tmp_7 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('replace', null, null, tmp_6, tmp_7, null, StringInitializer$initialize$lambda_3, 38, null);
    var tmp_8 = listOf(to('other', this.type_gwc96h_k$('String')));
    var tmp_9 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('concat', '+', null, tmp_8, tmp_9, null, StringInitializer$initialize$lambda_4, 36, null);
    var tmp_10 = listOf(to('other', this.type_gwc96h_k$('String')));
    var tmp_11 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('equals', '==', null, tmp_10, tmp_11, null, StringInitializer$initialize$lambda_5, 36, null);
    var tmp_12 = listOf(to('other', this.type_gwc96h_k$('String')));
    var tmp_13 = this.type_gwc96h_k$('Integer');
    this.method$default_6fwgyj_k$('compare', '<=>', null, tmp_12, tmp_13, null, StringInitializer$initialize$lambda_6, 36, null);
    var tmp_14 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_14, null, StringInitializer$initialize$lambda_7, 46, null);
    var tmp_15 = this.type_gwc96h_k$('Atom');
    this.method$default_6fwgyj_k$('toAtom', null, null, null, tmp_15, null, StringInitializer$initialize$lambda_8, 46, null);
  };
  StringInitializer.$metadata$ = objectMeta('StringInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var StringInitializer_instance;
  function StringInitializer_getInstance() {
    if (StringInitializer_instance == null)
      new StringInitializer();
    return StringInitializer_instance;
  }
  function VoidInitializer$initialize$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(1);
    var other = tmp$ret$1;
    return new Object_1(VoidInitializer_getInstance().type_gwc96h_k$('Boolean'), true);
  }
  function VoidInitializer$initialize$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_fkrdnv_k$(0);
    var instance = tmp$ret$0;
    return new Object_1(VoidInitializer_getInstance().type_gwc96h_k$('String'), 'void');
  }
  function VoidInitializer() {
    VoidInitializer_instance = this;
    TypeInitializer.call(this, 'Void');
  }
  VoidInitializer.prototype.initialize_oabr29_k$ = function () {
    this.inherits_1.add_1j60pz_k$(this.type_gwc96h_k$('Any'));
    var tmp = listOf(to('other', this.type_gwc96h_k$('Void')));
    var tmp_0 = this.type_gwc96h_k$('Boolean');
    this.method$default_6fwgyj_k$('equals', '==', null, tmp, tmp_0, null, VoidInitializer$initialize$lambda, 36, null);
    var tmp_1 = this.type_gwc96h_k$('String');
    this.method$default_6fwgyj_k$('toString', null, null, null, tmp_1, null, VoidInitializer$initialize$lambda_0, 46, null);
  };
  VoidInitializer.$metadata$ = objectMeta('VoidInitializer', undefined, undefined, undefined, undefined, TypeInitializer.prototype);
  var VoidInitializer_instance;
  function VoidInitializer_getInstance() {
    if (VoidInitializer_instance == null)
      new VoidInitializer();
    return VoidInitializer_instance;
  }
  function Range(index, line, column, length) {
    this.index_1 = index;
    this.line_1 = line;
    this.column_1 = column;
    this.length_1 = length;
  }
  Range.prototype.get_index_it478p_k$ = function () {
    return this.index_1;
  };
  Range.prototype.get_line_wopum5_k$ = function () {
    return this.line_1;
  };
  Range.prototype.get_column_c05ahr_k$ = function () {
    return this.column_1;
  };
  Range.prototype.get_length_g42xv3_k$ = function () {
    return this.length_1;
  };
  Range.prototype.component1_7eebsc_k$ = function () {
    return this.index_1;
  };
  Range.prototype.component2_7eebsb_k$ = function () {
    return this.line_1;
  };
  Range.prototype.component3_7eebsa_k$ = function () {
    return this.column_1;
  };
  Range.prototype.component4_7eebs9_k$ = function () {
    return this.length_1;
  };
  Range.prototype.copy_2hj87f_k$ = function (index, line, column, length) {
    return new Range(index, line, column, length);
  };
  Range.prototype.copy$default_ccxy8g_k$ = function (index, line, column, length, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      index = this.index_1;
    if (!(($mask0 & 2) === 0))
      line = this.line_1;
    if (!(($mask0 & 4) === 0))
      column = this.column_1;
    if (!(($mask0 & 8) === 0))
      length = this.length_1;
    return this.copy_2hj87f_k$(index, line, column, length);
  };
  Range.prototype.toString = function () {
    return 'Range(index=' + this.index_1 + ', line=' + this.line_1 + ', column=' + this.column_1 + ', length=' + this.length_1 + ')';
  };
  Range.prototype.hashCode = function () {
    var result = this.index_1;
    result = imul(result, 31) + this.line_1 | 0;
    result = imul(result, 31) + this.column_1 | 0;
    result = imul(result, 31) + this.length_1 | 0;
    return result;
  };
  Range.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!(this.index_1 === tmp0_other_with_cast.index_1))
      return false;
    if (!(this.line_1 === tmp0_other_with_cast.line_1))
      return false;
    if (!(this.column_1 === tmp0_other_with_cast.column_1))
      return false;
    if (!(this.length_1 === tmp0_other_with_cast.length_1))
      return false;
    return true;
  };
  Range.$metadata$ = classMeta('Range');
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function Input$diagnostic$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'dev.rhovas.interpreter.parser.Input.diagnostic.<anonymous>' call
    tmp$ret$0 = a.first_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'dev.rhovas.interpreter.parser.Input.diagnostic.<anonymous>' call
    tmp$ret$1 = b.first_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function Input(source, content) {
    this.source_1 = source;
    this.content_1 = content;
  }
  Input.prototype.get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  Input.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  Input.prototype.diagnostic_7jnof3_k$ = function (summary, details, range, context) {
    var builder = StringBuilder_init_$Create$().append_ssq29y_k$(this.source_1 + ':' + range.line_1 + ':' + range.column_1 + '-' + (range.column_1 + range.length_1 | 0)).append_ssq29y_k$('\nError: ' + summary);
    var tmp$ret$7;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$4;
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = mutableMapOf([to(range.line_1, range)]);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.Input.diagnostic.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = context.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.parser.Input.diagnostic.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.getOrPut' call
      var tmp0_getOrPut = element.line_1;
      var value = tmp0_also.get_1mhr4y_k$(tmp0_getOrPut);
      var tmp;
      if (value == null) {
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.parser.Input.diagnostic.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = element;
        var answer = tmp$ret$0;
        tmp0_also.put_3mhbri_k$(tmp0_getOrPut, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      tmp$ret$1 = tmp;
    }
    tmp$ret$2 = tmp0_also;
    var tmp1_sortedBy = toList_1(tmp$ret$2);
    var tmp$ret$3;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = Input$diagnostic$lambda;
    tmp$ret$3 = new sam$kotlin_Comparator$0(tmp_0);
    tmp$ret$4 = sortedWith(tmp1_sortedBy, tmp$ret$3);
    var tmp2_map = tmp$ret$4;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map, 10));
    var tmp0_iterator_0 = tmp2_map.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$5;
      // Inline function 'dev.rhovas.interpreter.parser.Input.diagnostic.<anonymous>' call
      tmp$ret$5 = item.second_1;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$5);
    }
    tmp$ret$6 = tmp0_mapTo;
    tmp$ret$7 = tmp$ret$6;
    var ranges = tmp$ret$7;
    var digits = last(ranges).line_1.toString().length;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = ranges.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'dev.rhovas.interpreter.parser.Input.diagnostic.<anonymous>' call
      var start = element_0.index_1 - element_0.column_1 | 0;
      var tmp$ret$10;
      // Inline function 'kotlin.takeIf' call
      var tmp$ret$8;
      // Inline function 'kotlin.charArrayOf' call
      tmp$ret$8 = charArrayOf([_Char___init__impl__6a9atx(10), _Char___init__impl__6a9atx(13)]);
      var tmp_1 = tmp$ret$8;
      var tmp0_takeIf = indexOfAny$default(this.content_1, tmp_1, element_0.index_1, false, 4, null);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_2;
      var tmp$ret$9;
      // Inline function 'dev.rhovas.interpreter.parser.Input.diagnostic.<anonymous>.<anonymous>' call
      tmp$ret$9 = !(tmp0_takeIf === -1);
      if (tmp$ret$9) {
        tmp_2 = tmp0_takeIf;
      } else {
        tmp_2 = null;
      }
      tmp$ret$10 = tmp_2;
      var tmp0_elvis_lhs = tmp$ret$10;
      var end = tmp0_elvis_lhs == null ? this.content_1.length : tmp0_elvis_lhs;
      var tmp_3 = element_0.line_1.toString();
      var tmp_4 = padStart$default(tmp_3, digits, _Char___init__impl__6a9atx(0), 2, null);
      var tmp$ret$12;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this.content_1;
      var tmp$ret$11;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$11 = tmp1_substring;
      tmp$ret$12 = tmp$ret$11.substring(start, end);
      builder.append_ssq29y_k$('\n ' + tmp_4 + ' | ' + tmp$ret$12);
      if (element_0.line_1 === range.line_1) {
        builder.append_ssq29y_k$('\n ' + repeat(' ', digits) + ' | ' + repeat(' ', range.column_1) + repeat('^', range.length_1));
      }
    }
    var tmp$ret$13;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$13 = charSequenceLength(details) > 0;
    if (tmp$ret$13) {
      builder.append_ssq29y_k$('\n' + details);
    }
    return builder.toString();
  };
  Input.prototype.component1_7eebsc_k$ = function () {
    return this.source_1;
  };
  Input.prototype.component2_7eebsb_k$ = function () {
    return this.content_1;
  };
  Input.prototype.copy_jxa1ir_k$ = function (source, content) {
    return new Input(source, content);
  };
  Input.prototype.copy$default_jej4nk_k$ = function (source, content, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      source = this.source_1;
    if (!(($mask0 & 2) === 0))
      content = this.content_1;
    return this.copy_jxa1ir_k$(source, content);
  };
  Input.prototype.toString = function () {
    return 'Input(source=' + this.source_1 + ', content=' + this.content_1 + ')';
  };
  Input.prototype.hashCode = function () {
    var result = getStringHashCode(this.source_1);
    result = imul(result, 31) + getStringHashCode(this.content_1) | 0;
    return result;
  };
  Input.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Input))
      return false;
    var tmp0_other_with_cast = other instanceof Input ? other : THROW_CCE();
    if (!(this.source_1 === tmp0_other_with_cast.source_1))
      return false;
    if (!(this.content_1 === tmp0_other_with_cast.content_1))
      return false;
    return true;
  };
  Input.$metadata$ = classMeta('Input');
  function _set_index__fyfqnn($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function _set_line__9q1omb($this, _set____db54di) {
    $this.line_1 = _set____db54di;
  }
  function _get_line__d9to7r($this) {
    return $this.line_1;
  }
  function _set_column__izs2v3($this, _set____db54di) {
    $this.column_1 = _set____db54di;
  }
  function _get_column__hj1i8b($this) {
    return $this.column_1;
  }
  function _set_length__xo12bz($this, _set____db54di) {
    $this.length_1 = _set____db54di;
  }
  function _get_length__w7ahp7($this) {
    return $this.length_1;
  }
  function _get_context__ps0bpe($this) {
    return $this.context_1;
  }
  function test($this, obj, char) {
    var tmp0_subject = obj;
    var tmp;
    if (tmp0_subject instanceof Char) {
      tmp = equals(obj, new Char(char));
    } else {
      if (typeof tmp0_subject === 'string') {
        var tmp$ret$1;
        // Inline function 'kotlin.text.matches' call
        var tmp1_matches = toString_2(char);
        var tmp$ret$0;
        // Inline function 'kotlin.text.toRegex' call
        var tmp0_toRegex = obj;
        tmp$ret$0 = Regex_init_$Create$(tmp0_toRegex);
        var tmp2_matches = tmp$ret$0;
        tmp$ret$1 = tmp2_matches.matches_qvb2fs_k$(tmp1_matches);
        tmp = tmp$ret$1;
      } else {
        throw AssertionError_init_$Create$();
      }
    }
    return tmp;
  }
  function CharStream($outer) {
    this.$this_1 = $outer;
    this.index_1 = 0;
    this.line_1 = 1;
    this.column_1 = 0;
    this.length_1 = 0;
  }
  CharStream.prototype.set_range_2im18o_k$ = function (value) {
    this.index_1 = value.index_1;
    this.line_1 = value.line_1;
    this.column_1 = value.column_1;
    this.length_1 = value.length_1;
  };
  CharStream.prototype.get_range_ixu978_k$ = function () {
    return new Range(this.index_1, this.line_1, this.column_1, this.length_1);
  };
  CharStream.prototype.get_8san2r_k$ = function (offset) {
    return getOrNull_0(this.$this_1.input_1.content_1, (this.index_1 + this.length_1 | 0) + offset | 0);
  };
  CharStream.prototype.advance_2wh99t_k$ = function () {
    var tmp = this.get_8san2r_k$(0);
    this.$this_1.require_9xm5ng_k$(!((tmp == null ? null : new Char(tmp)) == null));
    var tmp0_this = this;
    var tmp1 = tmp0_this.length_1;
    tmp0_this.length_1 = tmp1 + 1 | 0;
  };
  CharStream.prototype.consume_spbz2t_k$ = function () {
    var tmp0_this = this;
    tmp0_this.index_1 = tmp0_this.index_1 + this.length_1 | 0;
    var tmp1_this = this;
    tmp1_this.column_1 = tmp1_this.column_1 + this.length_1 | 0;
    this.length_1 = 0;
  };
  CharStream.prototype.newline_gne6yl_k$ = function () {
    var tmp;
    var tmp_0 = this.get_8san2r_k$(-1);
    if (equals(tmp_0 == null ? null : new Char(tmp_0), new Char(_Char___init__impl__6a9atx(10)))) {
      tmp = true;
    } else {
      var tmp_1 = this.get_8san2r_k$(-1);
      tmp = equals(tmp_1 == null ? null : new Char(tmp_1), new Char(_Char___init__impl__6a9atx(13)));
    }
    this.$this_1.require_9xm5ng_k$(tmp);
    this.consume_spbz2t_k$();
    var tmp0_this = this;
    var tmp1 = tmp0_this.line_1;
    tmp0_this.line_1 = tmp1 + 1 | 0;
    this.column_1 = 0;
  };
  CharStream.prototype.literal_30mrhr_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.$this_1.input_1.content_1;
    var tmp1_substring = this.index_1;
    var tmp2_substring = this.index_1 + this.length_1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(tmp1_substring, tmp2_substring);
    return tmp$ret$1;
  };
  CharStream.prototype.emit_nf85qv_k$ = function (type, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Token(type, this.literal_30mrhr_k$(), value, this.get_range_ixu978_k$());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.CharStream.emit.<anonymous>' call
    this.consume_spbz2t_k$();
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  CharStream.prototype.emit$default_kfkhdo_k$ = function (type, value, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      value = null;
    return this.emit_nf85qv_k$(type, value);
  };
  CharStream.$metadata$ = classMeta('CharStream');
  function Lexer$require$lambda(this$0) {
    return function () {
      printStackTrace(Exception_init_$Create$());
      var tmp = trimIndent('\n            This is an internal compiler error, please report this!\n            \n            ' + Unit_getInstance() + '\n        ');
      return this$0.error$default_8prrdd_k$('Broken lexer invariant.', tmp, null, 4, null);
    };
  }
  function Lexer(input) {
    this.input_1 = input;
    this.chars_1 = new CharStream(this);
    this.context_1 = ArrayDeque_init_$Create$();
    this.mode_1 = '';
  }
  Lexer.prototype.get_input_it4gip_k$ = function () {
    return this.input_1;
  };
  Lexer.prototype.get_chars_ippjuc_k$ = function () {
    return this.chars_1;
  };
  Lexer.prototype.set_mode_ew5o7i_k$ = function (_set____db54di) {
    this.mode_1 = _set____db54di;
  };
  Lexer.prototype.get_mode_woqlt8_k$ = function () {
    return this.mode_1;
  };
  Lexer.prototype.set_state_r90g5g_k$ = function (value) {
    this.chars_1.set_range_2im18o_k$(value.first_1);
    this.context_1.clear_j9y8zo_k$();
    this.context_1.addAll_oxxjjk_k$(value.second_1);
  };
  Lexer.prototype.get_state_iypx7s_k$ = function () {
    return new Pair(this.chars_1.get_range_ixu978_k$(), this.context_1);
  };
  Lexer.prototype.peek_t7gyox_k$ = function (objects) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp0_all = withIndex_0(objects);
      var tmp;
      if (isInterface(tmp0_all, Collection)) {
        tmp = tmp0_all.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = tmp0_all.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$3;
        // Inline function 'dev.rhovas.interpreter.parser.Lexer.peek.<anonymous>' call
        var tmp0_safe_receiver = this.chars_1.get_8san2r_k$(element.index_1);
        var tmp_0;
        var tmp_1 = tmp0_safe_receiver;
        if ((tmp_1 == null ? null : new Char(tmp_1)) == null) {
          tmp_0 = null;
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'dev.rhovas.interpreter.parser.Lexer.peek.<anonymous>.<anonymous>' call
          tmp$ret$1 = test(this, element.value_1, tmp0_safe_receiver);
          tmp$ret$2 = tmp$ret$1;
          tmp_0 = tmp$ret$2;
        }
        tmp$ret$3 = tmp_0 === true;
        if (!tmp$ret$3) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  Lexer.prototype.match_949ua1_k$ = function (objects) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.peek_t7gyox_k$(objects.slice());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.Lexer.match.<anonymous>' call
    if (tmp0_also) {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = objects.length;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'dev.rhovas.interpreter.parser.Lexer.match.<anonymous>.<anonymous>' call
          this.chars_1.advance_2wh99t_k$();
        }
         while (inductionVariable < tmp0_repeat);
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Lexer.prototype.require_9xm5ng_k$ = function (condition) {
    this.require_3pbn9x_k$(condition, Lexer$require$lambda(this));
  };
  Lexer.prototype.require_3pbn9x_k$ = function (condition, error) {
    if (!condition) {
      throw error();
    }
  };
  Lexer.prototype.error_5d2tv3_k$ = function (summary, details, range) {
    return new ParseException(summary, details, range, this.context_1);
  };
  Lexer.prototype.error$default_8prrdd_k$ = function (summary, details, range, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      range = this.chars_1.get_range_ixu978_k$();
    return this.error_5d2tv3_k$(summary, details, range);
  };
  Lexer.$metadata$ = classMeta('Lexer');
  function ParseException(summary, details, range, context) {
    Exception_init_$Init$('' + range.line_1 + ':' + range.column_1 + '-' + (range.column_1 + range.length_1 | 0) + ': ' + summary, this);
    this.summary_1 = summary;
    this.details_1 = details;
    this.range_1 = range;
    this.context_1 = context;
    captureStack(this, ParseException);
  }
  ParseException.prototype.get_summary_tgfqkj_k$ = function () {
    return this.summary_1;
  };
  ParseException.prototype.get_details_r0zbrt_k$ = function () {
    return this.details_1;
  };
  ParseException.prototype.get_range_ixu978_k$ = function () {
    return this.range_1;
  };
  ParseException.prototype.get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  ParseException.prototype.component1_7eebsc_k$ = function () {
    return this.summary_1;
  };
  ParseException.prototype.component2_7eebsb_k$ = function () {
    return this.details_1;
  };
  ParseException.prototype.component3_7eebsa_k$ = function () {
    return this.range_1;
  };
  ParseException.prototype.component4_7eebs9_k$ = function () {
    return this.context_1;
  };
  ParseException.prototype.copy_ufkztd_k$ = function (summary, details, range, context) {
    return new ParseException(summary, details, range, context);
  };
  ParseException.prototype.copy$default_hm2lgm_k$ = function (summary, details, range, context, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      summary = this.summary_1;
    if (!(($mask0 & 2) === 0))
      details = this.details_1;
    if (!(($mask0 & 4) === 0))
      range = this.range_1;
    if (!(($mask0 & 8) === 0))
      context = this.context_1;
    return this.copy_ufkztd_k$(summary, details, range, context);
  };
  ParseException.prototype.toString = function () {
    return 'ParseException(summary=' + this.summary_1 + ', details=' + this.details_1 + ', range=' + this.range_1 + ', context=' + this.context_1 + ')';
  };
  ParseException.prototype.hashCode = function () {
    var result = getStringHashCode(this.summary_1);
    result = imul(result, 31) + getStringHashCode(this.details_1) | 0;
    result = imul(result, 31) + this.range_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.context_1) | 0;
    return result;
  };
  ParseException.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParseException))
      return false;
    var tmp0_other_with_cast = other instanceof ParseException ? other : THROW_CCE();
    if (!(this.summary_1 === tmp0_other_with_cast.summary_1))
      return false;
    if (!(this.details_1 === tmp0_other_with_cast.details_1))
      return false;
    if (!this.range_1.equals(tmp0_other_with_cast.range_1))
      return false;
    if (!equals(this.context_1, tmp0_other_with_cast.context_1))
      return false;
    return true;
  };
  ParseException.$metadata$ = classMeta('ParseException', undefined, undefined, undefined, undefined, Exception.prototype);
  function _get_tokens__ivj641($this) {
    return $this.tokens_1;
  }
  function _set_index__fyfqnn_0($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt_0($this) {
    return $this.index_1;
  }
  function test_0($this, obj, token) {
    var tmp0_subject = obj;
    var tmp;
    if (isInterface(tmp0_subject, Type_1)) {
      tmp = equals(obj, token.type_1);
    } else {
      if (typeof tmp0_subject === 'string') {
        tmp = equals(obj, token.literal_1);
      } else {
        if (isInterface(tmp0_subject, List)) {
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.any' call
            var tmp0_any = obj;
            var tmp_0;
            if (isInterface(tmp0_any, Collection)) {
              tmp_0 = tmp0_any.isEmpty_y1axqb_k$();
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
            var tmp0_iterator = tmp0_any.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              var tmp$ret$1;
              // Inline function 'dev.rhovas.interpreter.parser.Parser.test.<anonymous>' call
              tmp$ret$1 = test_0($this, ensureNotNull(element), token);
              if (tmp$ret$1) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
            }
            tmp$ret$0 = false;
          }
          tmp = tmp$ret$0;
        } else {
          throw AssertionError_init_$Create$();
        }
      }
    }
    return tmp;
  }
  function TokenStream($outer) {
    this.$this_1 = $outer;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.tokens_1 = tmp$ret$0;
    this.index_1 = 0;
  }
  TokenStream.prototype.get_fkrdnv_k$ = function (offset) {
    while (this.tokens_1.get_size_woubt6_k$() <= (this.index_1 + offset | 0)) {
      this.tokens_1.add_1j60pz_k$(this.$this_1.lexer_1.lexToken_ykb8py_k$());
    }
    return this.tokens_1.get_fkrdnv_k$(this.index_1 + offset | 0);
  };
  TokenStream.prototype.advance_2wh99t_k$ = function () {
    this.$this_1.require_9xm5ng_k$(!(this.get_fkrdnv_k$(0) == null));
    var tmp0_this = this;
    var tmp1 = tmp0_this.index_1;
    tmp0_this.index_1 = tmp1 + 1 | 0;
  };
  TokenStream.$metadata$ = classMeta('TokenStream');
  function Parser$require$lambda(this$0) {
    return function () {
      var tmp = trimIndent('\n            This is an internal compiler error, please report this!\n            \n            ' + stackTraceToString(Exception_init_$Create$()) + '\n        ');
      return this$0.error$default_8prrdd_k$('Broken parser invariant.', tmp, null, 4, null);
    };
  }
  function Parser(lexer) {
    this.lexer_1 = lexer;
    this.tokens_1 = new TokenStream(this);
    this.context_1 = this.lexer_1.get_state_iypx7s_k$().second_1;
  }
  Parser.prototype.get_lexer_ium8yr_k$ = function () {
    return this.lexer_1;
  };
  Parser.prototype.get_tokens_k1vwdf_k$ = function () {
    return this.tokens_1;
  };
  Parser.prototype.get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  Parser.prototype.peek_t7gyox_k$ = function (objects) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp0_all = withIndex_0(objects);
      var tmp;
      if (isInterface(tmp0_all, Collection)) {
        tmp = tmp0_all.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = tmp0_all.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$3;
        // Inline function 'dev.rhovas.interpreter.parser.Parser.peek.<anonymous>' call
        var tmp0_safe_receiver = this.tokens_1.get_fkrdnv_k$(element.index_1);
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'dev.rhovas.interpreter.parser.Parser.peek.<anonymous>.<anonymous>' call
          tmp$ret$1 = test_0(this, element.value_1, tmp0_safe_receiver);
          tmp$ret$2 = tmp$ret$1;
          tmp_0 = tmp$ret$2;
        }
        tmp$ret$3 = tmp_0 === true;
        if (!tmp$ret$3) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  Parser.prototype.match_949ua1_k$ = function (objects) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.peek_t7gyox_k$(objects.slice());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.Parser.match.<anonymous>' call
    if (tmp0_also) {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = objects.length;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'dev.rhovas.interpreter.parser.Parser.match.<anonymous>.<anonymous>' call
          this.tokens_1.advance_2wh99t_k$();
        }
         while (inductionVariable < tmp0_repeat);
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Parser.prototype.require_9xm5ng_k$ = function (condition) {
    this.require_3pbn9x_k$(condition, Parser$require$lambda(this));
  };
  Parser.prototype.require_3pbn9x_k$ = function (condition, error) {
    if (!condition) {
      throw error();
    }
  };
  Parser.prototype.error_5d2tv3_k$ = function (summary, details, range) {
    return new ParseException(summary, details, range, toList_2(this.context_1));
  };
  Parser.prototype.error$default_8prrdd_k$ = function (summary, details, range, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      var tmp0_elvis_lhs = this.tokens_1.get_fkrdnv_k$(0);
      range = ensureNotNull(tmp0_elvis_lhs == null ? this.tokens_1.get_fkrdnv_k$(-1) : tmp0_elvis_lhs).range_1;
    }
    return this.error_5d2tv3_k$(summary, details, range);
  };
  Parser.$metadata$ = classMeta('Parser');
  function Type_1() {
  }
  Type_1.$metadata$ = interfaceMeta('Type');
  function Token(type, literal, value, range) {
    this.type_1 = type;
    this.literal_1 = literal;
    this.value_1 = value;
    this.range_1 = range;
  }
  Token.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Token.prototype.get_literal_4a6pja_k$ = function () {
    return this.literal_1;
  };
  Token.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Token.prototype.get_range_ixu978_k$ = function () {
    return this.range_1;
  };
  Token.prototype.component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  Token.prototype.component2_7eebsb_k$ = function () {
    return this.literal_1;
  };
  Token.prototype.component3_7eebsa_k$ = function () {
    return this.value_1;
  };
  Token.prototype.component4_7eebs9_k$ = function () {
    return this.range_1;
  };
  Token.prototype.copy_wy5ln1_k$ = function (type, literal, value, range) {
    return new Token(type, literal, value, range);
  };
  Token.prototype.copy$default_mu1lo5_k$ = function (type, literal, value, range, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.type_1;
    if (!(($mask0 & 2) === 0))
      literal = this.literal_1;
    if (!(($mask0 & 4) === 0))
      value = this.value_1;
    if (!(($mask0 & 8) === 0))
      range = this.range_1;
    return this.copy_wy5ln1_k$(type, literal, value, range);
  };
  Token.prototype.toString = function () {
    return 'Token(type=' + this.type_1 + ', literal=' + this.literal_1 + ', value=' + toString_0(this.value_1) + ', range=' + this.range_1 + ')';
  };
  Token.prototype.hashCode = function () {
    var result = hashCode(this.type_1);
    result = imul(result, 31) + getStringHashCode(this.literal_1) | 0;
    result = imul(result, 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
    result = imul(result, 31) + this.range_1.hashCode() | 0;
    return result;
  };
  Token.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Token))
      return false;
    var tmp0_other_with_cast = other instanceof Token ? other : THROW_CCE();
    if (!equals(this.type_1, tmp0_other_with_cast.type_1))
      return false;
    if (!(this.literal_1 === tmp0_other_with_cast.literal_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!this.range_1.equals(tmp0_other_with_cast.range_1))
      return false;
    return true;
  };
  Token.$metadata$ = classMeta('Token');
  function Source_0(literals, arguments_0) {
    DslAst.call(this);
    this.literals_1 = literals;
    this.arguments_1 = arguments_0;
  }
  Source_0.prototype.get_literals_9ag49f_k$ = function () {
    return this.literals_1;
  };
  Source_0.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  Source_0.prototype.component1_7eebsc_k$ = function () {
    return this.literals_1;
  };
  Source_0.prototype.component2_7eebsb_k$ = function () {
    return this.arguments_1;
  };
  Source_0.prototype.copy_8xqc0a_k$ = function (literals, arguments_0) {
    return new Source_0(literals, arguments_0);
  };
  Source_0.prototype.copy$default_v70ad5_k$ = function (literals, arguments_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      literals = this.literals_1;
    if (!(($mask0 & 2) === 0))
      arguments_0 = this.arguments_1;
    return this.copy_8xqc0a_k$(literals, arguments_0);
  };
  Source_0.prototype.toString = function () {
    return 'Source(literals=' + this.literals_1 + ', arguments=' + this.arguments_1 + ')';
  };
  Source_0.prototype.hashCode = function () {
    var result = hashCode(this.literals_1);
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    return result;
  };
  Source_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Source_0))
      return false;
    var tmp0_other_with_cast = other instanceof Source_0 ? other : THROW_CCE();
    if (!equals(this.literals_1, tmp0_other_with_cast.literals_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    return true;
  };
  Source_0.$metadata$ = classMeta('Source', undefined, undefined, undefined, undefined, DslAst.prototype);
  function DslAst() {
  }
  DslAst.prototype.set_context_8ca77u_k$ = function (_set____db54di) {
    this.context_1 = _set____db54di;
  };
  DslAst.prototype.get_context_h02k06_k$ = function () {
    var tmp = this.context_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('context');
    }
  };
  DslAst.$metadata$ = classMeta('DslAst');
  function lexIndent($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['[\n\r]']));
    var tmp;
    var tmp_0 = $this.chars_1.get_8san2r_k$(-1);
    if (equals(tmp_0 == null ? null : new Char(tmp_0), new Char(_Char___init__impl__6a9atx(10)))) {
      tmp = _Char___init__impl__6a9atx(13);
    } else {
      tmp = _Char___init__impl__6a9atx(10);
    }
    $this.match_949ua1_k$([new Char(tmp)]);
    $this.chars_1.newline_gne6yl_k$();
    while ($this.match_949ua1_k$(['[ \t]'])) {
    }
    var tmp_1 = DslTokenType_INDENT_getInstance();
    return $this.chars_1.emit$default_kfkhdo_k$(tmp_1, null, 2, null);
  }
  function lexOperator($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['[${}]']));
    var tmp = DslTokenType_OPERATOR_getInstance();
    return $this.chars_1.emit$default_kfkhdo_k$(tmp, null, 2, null);
  }
  function lexText($this) {
    var tmp = $this.chars_1.get_8san2r_k$(0);
    $this.require_9xm5ng_k$(!((tmp == null ? null : new Char(tmp)) == null));
    while ($this.match_949ua1_k$(['[^\n\r${}]'])) {
    }
    var tmp_0 = DslTokenType_TEXT_getInstance();
    return $this.chars_1.emit$default_kfkhdo_k$(tmp_0, null, 2, null);
  }
  function DslLexer(input) {
    Lexer.call(this, input);
  }
  DslLexer.prototype.lexToken_ykb8py_k$ = function () {
    var tmp;
    var tmp_0 = this.chars_1.get_8san2r_k$(0);
    if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
      tmp = null;
    } else {
      if (this.peek_t7gyox_k$(['[\n\r]'])) {
        tmp = lexIndent(this);
      } else {
        if (this.peek_t7gyox_k$(['[${}]'])) {
          tmp = lexOperator(this);
        } else {
          tmp = lexText(this);
        }
      }
    }
    return tmp;
  };
  DslLexer.$metadata$ = classMeta('DslLexer', undefined, undefined, undefined, undefined, Lexer.prototype);
  function parseSource($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['{']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var builder = StringBuilder_init_$Create$();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var literals = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    var arguments_0 = tmp$ret$1;
    if ($this.match_949ua1_k$([DslTokenType_INDENT_getInstance()])) {
      var indent = ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1;
      $l$loop: while (true) {
        if ($this.match_949ua1_k$([DslTokenType_INDENT_getInstance()])) {
          var literal = ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1;
          if (literal.length < indent.length ? !$this.peek_t7gyox_k$([DslTokenType_INDENT_getInstance()]) : false) {
            break $l$loop;
          }
          builder.append_ssq29y_k$('\n').append_ssq29y_k$(removePrefix(literal, indent));
        } else if ($this.match_949ua1_k$(['$', '{'])) {
          $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
          var parser = new RhovasParser($this.lexer_1.input_1);
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          var tmp0_let = $this.lexer_1.get_state_iypx7s_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'dev.rhovas.interpreter.parser.dsl.DslParser.parseSource.<anonymous>' call
          var tmp = tmp0_let.first_1.index_1 - 2 | 0;
          tmp$ret$2 = new Pair(tmp0_let.first_1.copy$default_ccxy8g_k$(tmp, 0, tmp0_let.first_1.column_1 - 2 | 0, 0, 2, null), tmp0_let.second_1);
          tmp$ret$3 = tmp$ret$2;
          parser.lexer_1.set_state_r90g5g_k$(tmp$ret$3);
          var argument = parser.parse_4mmrzm_k$('interpolation');
          var tmp$ret$5;
          // Inline function 'kotlin.let' call
          var tmp1_let = parser.lexer_1.get_state_iypx7s_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$4;
          // Inline function 'dev.rhovas.interpreter.parser.dsl.DslParser.parseSource.<anonymous>' call
          var tmp_0 = tmp1_let.first_1.index_1 - 1 | 0;
          tmp$ret$4 = new Pair(tmp1_let.first_1.copy$default_ccxy8g_k$(tmp_0, 0, tmp1_let.first_1.column_1 - 1 | 0, 0, 2, null), tmp1_let.second_1);
          tmp$ret$5 = tmp$ret$4;
          $this.lexer_1.set_state_r90g5g_k$(tmp$ret$5);
          $this.require_9xm5ng_k$($this.match_949ua1_k$(['}']));
          literals.add_1j60pz_k$(builder.toString());
          arguments_0.add_1j60pz_k$(argument);
          builder.clear_1keqml_k$();
          $this.context_1.removeLast_i5wx8a_k$();
        } else {
          var tmp_1 = !($this.tokens_1.get_fkrdnv_k$(0) == null);
          $this.require_3pbn9x_k$(tmp_1, DslParser$parseSource$lambda($this));
          $this.tokens_1.advance_2wh99t_k$();
          builder.append_ssq29y_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1);
        }
      }
    } else {
      while (!($this.tokens_1.get_fkrdnv_k$(0) == null) ? !$this.peek_t7gyox_k$([listOf_0([DslTokenType_INDENT_getInstance(), '{', '}'])]) : false) {
        $this.tokens_1.advance_2wh99t_k$();
        builder.append_ssq29y_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1);
      }
    }
    literals.add_1j60pz_k$(builder.toString());
    var tmp_2 = $this.match_949ua1_k$(['}']);
    $this.require_3pbn9x_k$(tmp_2, DslParser$parseSource$lambda_0($this));
    var tmp$ret$6;
    // Inline function 'kotlin.also' call
    var tmp2_also = new Source_0(literals, arguments_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.dsl.DslParser.parseSource.<anonymous>' call
    tmp2_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$6 = tmp2_also;
    return tmp$ret$6;
  }
  function DslParser$parseSource$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected input.', 'A DSL expression is terminated by a closing brace `}` (if defined inline) or a closing brace `}` at a lower indentation than the start (if defined multiline).', null, 4, null);
    };
  }
  function DslParser$parseSource$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing brace.', 'A DSL expression requires braces around the source, as in `#dsl ${ source }`.', null, 4, null);
    };
  }
  function DslParser(input) {
    Parser.call(this, new DslLexer(input));
  }
  DslParser.prototype.parse_4mmrzm_k$ = function (rule) {
    var tmp0_subject = rule;
    var tmp;
    if (tmp0_subject === 'source') {
      tmp = parseSource(this);
    } else {
      throw AssertionError_init_$Create$();
    }
    return tmp;
  };
  DslParser.$metadata$ = classMeta('DslParser', undefined, undefined, undefined, undefined, Parser.prototype);
  var DslTokenType_INDENT_instance;
  var DslTokenType_OPERATOR_instance;
  var DslTokenType_TEXT_instance;
  function values() {
    return [DslTokenType_INDENT_getInstance(), DslTokenType_OPERATOR_getInstance(), DslTokenType_TEXT_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'INDENT':
        return DslTokenType_INDENT_getInstance();
      case 'OPERATOR':
        return DslTokenType_OPERATOR_getInstance();
      case 'TEXT':
        return DslTokenType_TEXT_getInstance();
      default:
        DslTokenType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var DslTokenType_entriesInitialized;
  function DslTokenType_initEntries() {
    if (DslTokenType_entriesInitialized)
      return Unit_getInstance();
    DslTokenType_entriesInitialized = true;
    DslTokenType_INDENT_instance = new DslTokenType('INDENT', 0);
    DslTokenType_OPERATOR_instance = new DslTokenType('OPERATOR', 1);
    DslTokenType_TEXT_instance = new DslTokenType('TEXT', 2);
  }
  function DslTokenType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  DslTokenType.$metadata$ = classMeta('DslTokenType', [Type_1], undefined, undefined, undefined, Enum.prototype);
  function DslTokenType_INDENT_getInstance() {
    DslTokenType_initEntries();
    return DslTokenType_INDENT_instance;
  }
  function DslTokenType_OPERATOR_getInstance() {
    DslTokenType_initEntries();
    return DslTokenType_OPERATOR_instance;
  }
  function DslTokenType_TEXT_getInstance() {
    DslTokenType_initEntries();
    return DslTokenType_TEXT_instance;
  }
  function Struct_0(name, fields) {
    Component_2.call(this);
    this.name_1 = name;
    this.fields_1 = fields;
  }
  Struct_0.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Struct_0.prototype.get_fields_dbuqbm_k$ = function () {
    return this.fields_1;
  };
  Struct_0.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  Struct_0.prototype.component2_7eebsb_k$ = function () {
    return this.fields_1;
  };
  Struct_0.prototype.copy_2hv09h_k$ = function (name, fields) {
    return new Struct_0(name, fields);
  };
  Struct_0.prototype.copy$default_ec9aws_k$ = function (name, fields, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      fields = this.fields_1;
    return this.copy_2hv09h_k$(name, fields);
  };
  Struct_0.prototype.toString = function () {
    return 'Struct(name=' + this.name_1 + ', fields=' + this.fields_1 + ')';
  };
  Struct_0.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.fields_1) | 0;
    return result;
  };
  Struct_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Struct_0))
      return false;
    var tmp0_other_with_cast = other instanceof Struct_0 ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.fields_1, tmp0_other_with_cast.fields_1))
      return false;
    return true;
  };
  Struct_0.$metadata$ = classMeta('Struct', undefined, undefined, undefined, undefined, Component_2.prototype);
  function Conditional_0(cases, elseCase) {
    Match_0.call(this);
    this.cases_1 = cases;
    this.elseCase_1 = elseCase;
  }
  Conditional_0.prototype.get_cases_iplfyy_k$ = function () {
    return this.cases_1;
  };
  Conditional_0.prototype.get_elseCase_pga3ou_k$ = function () {
    return this.elseCase_1;
  };
  Conditional_0.prototype.component1_7eebsc_k$ = function () {
    return this.cases_1;
  };
  Conditional_0.prototype.component2_7eebsb_k$ = function () {
    return this.elseCase_1;
  };
  Conditional_0.prototype.copy_gh8y7f_k$ = function (cases, elseCase) {
    return new Conditional_0(cases, elseCase);
  };
  Conditional_0.prototype.copy$default_jind9h_k$ = function (cases, elseCase, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cases = this.cases_1;
    if (!(($mask0 & 2) === 0))
      elseCase = this.elseCase_1;
    return this.copy_gh8y7f_k$(cases, elseCase);
  };
  Conditional_0.prototype.toString = function () {
    return 'Conditional(cases=' + this.cases_1 + ', elseCase=' + this.elseCase_1 + ')';
  };
  Conditional_0.prototype.hashCode = function () {
    var result = hashCode(this.cases_1);
    result = imul(result, 31) + (this.elseCase_1 == null ? 0 : this.elseCase_1.hashCode()) | 0;
    return result;
  };
  Conditional_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Conditional_0))
      return false;
    var tmp0_other_with_cast = other instanceof Conditional_0 ? other : THROW_CCE();
    if (!equals(this.cases_1, tmp0_other_with_cast.cases_1))
      return false;
    if (!equals(this.elseCase_1, tmp0_other_with_cast.elseCase_1))
      return false;
    return true;
  };
  Conditional_0.$metadata$ = classMeta('Conditional', undefined, undefined, undefined, undefined, Match_0.prototype);
  function Structural_0(argument, cases, elseCase) {
    Match_0.call(this);
    this.argument_1 = argument;
    this.cases_1 = cases;
    this.elseCase_1 = elseCase;
  }
  Structural_0.prototype.get_argument_cxpwg6_k$ = function () {
    return this.argument_1;
  };
  Structural_0.prototype.get_cases_iplfyy_k$ = function () {
    return this.cases_1;
  };
  Structural_0.prototype.get_elseCase_pga3ou_k$ = function () {
    return this.elseCase_1;
  };
  Structural_0.prototype.component1_7eebsc_k$ = function () {
    return this.argument_1;
  };
  Structural_0.prototype.component2_7eebsb_k$ = function () {
    return this.cases_1;
  };
  Structural_0.prototype.component3_7eebsa_k$ = function () {
    return this.elseCase_1;
  };
  Structural_0.prototype.copy_ss26wm_k$ = function (argument, cases, elseCase) {
    return new Structural_0(argument, cases, elseCase);
  };
  Structural_0.prototype.copy$default_xvbqbv_k$ = function (argument, cases, elseCase, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      argument = this.argument_1;
    if (!(($mask0 & 2) === 0))
      cases = this.cases_1;
    if (!(($mask0 & 4) === 0))
      elseCase = this.elseCase_1;
    return this.copy_ss26wm_k$(argument, cases, elseCase);
  };
  Structural_0.prototype.toString = function () {
    return 'Structural(argument=' + this.argument_1 + ', cases=' + this.cases_1 + ', elseCase=' + this.elseCase_1 + ')';
  };
  Structural_0.prototype.hashCode = function () {
    var result = hashCode(this.argument_1);
    result = imul(result, 31) + hashCode(this.cases_1) | 0;
    result = imul(result, 31) + (this.elseCase_1 == null ? 0 : this.elseCase_1.hashCode()) | 0;
    return result;
  };
  Structural_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Structural_0))
      return false;
    var tmp0_other_with_cast = other instanceof Structural_0 ? other : THROW_CCE();
    if (!equals(this.argument_1, tmp0_other_with_cast.argument_1))
      return false;
    if (!equals(this.cases_1, tmp0_other_with_cast.cases_1))
      return false;
    if (!equals(this.elseCase_1, tmp0_other_with_cast.elseCase_1))
      return false;
    return true;
  };
  Structural_0.$metadata$ = classMeta('Structural', undefined, undefined, undefined, undefined, Match_0.prototype);
  function Catch_0(name, type, body) {
    RhovasAst.call(this);
    this.name_1 = name;
    this.type_1 = type;
    this.body_1 = body;
  }
  Catch_0.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Catch_0.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Catch_0.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  Catch_0.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  Catch_0.prototype.component2_7eebsb_k$ = function () {
    return this.type_1;
  };
  Catch_0.prototype.component3_7eebsa_k$ = function () {
    return this.body_1;
  };
  Catch_0.prototype.copy_wtyo4r_k$ = function (name, type, body) {
    return new Catch_0(name, type, body);
  };
  Catch_0.prototype.copy$default_z6xrc5_k$ = function (name, type, body, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      type = this.type_1;
    if (!(($mask0 & 4) === 0))
      body = this.body_1;
    return this.copy_wtyo4r_k$(name, type, body);
  };
  Catch_0.prototype.toString = function () {
    return 'Catch(name=' + this.name_1 + ', type=' + this.type_1 + ', body=' + this.body_1 + ')';
  };
  Catch_0.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + this.type_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  Catch_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Catch_0))
      return false;
    var tmp0_other_with_cast = other instanceof Catch_0 ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  Catch_0.$metadata$ = classMeta('Catch', undefined, undefined, undefined, undefined, RhovasAst.prototype);
  function Block_0(statements) {
    Statement_0.call(this);
    this.statements_1 = statements;
  }
  Block_0.prototype.get_statements_nqb5hv_k$ = function () {
    return this.statements_1;
  };
  Block_0.prototype.component1_7eebsc_k$ = function () {
    return this.statements_1;
  };
  Block_0.prototype.copy_dypsq1_k$ = function (statements) {
    return new Block_0(statements);
  };
  Block_0.prototype.copy$default_7uozh_k$ = function (statements, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      statements = this.statements_1;
    return this.copy_dypsq1_k$(statements);
  };
  Block_0.prototype.toString = function () {
    return 'Block(statements=' + this.statements_1 + ')';
  };
  Block_0.prototype.hashCode = function () {
    return hashCode(this.statements_1);
  };
  Block_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Block_0))
      return false;
    var tmp0_other_with_cast = other instanceof Block_0 ? other : THROW_CCE();
    if (!equals(this.statements_1, tmp0_other_with_cast.statements_1))
      return false;
    return true;
  };
  Block_0.$metadata$ = classMeta('Block', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Component_1(component) {
    Statement_0.call(this);
    this.component_1 = component;
  }
  Component_1.prototype.get_component_emy20c_k$ = function () {
    return this.component_1;
  };
  Component_1.prototype.component1_7eebsc_k$ = function () {
    return this.component_1;
  };
  Component_1.prototype.copy_wsuh0j_k$ = function (component) {
    return new Component_1(component);
  };
  Component_1.prototype.copy$default_hwzatf_k$ = function (component, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      component = this.component_1;
    return this.copy_wsuh0j_k$(component);
  };
  Component_1.prototype.toString = function () {
    return 'Component(component=' + this.component_1 + ')';
  };
  Component_1.prototype.hashCode = function () {
    return hashCode(this.component_1);
  };
  Component_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Component_1))
      return false;
    var tmp0_other_with_cast = other instanceof Component_1 ? other : THROW_CCE();
    if (!equals(this.component_1, tmp0_other_with_cast.component_1))
      return false;
    return true;
  };
  Component_1.$metadata$ = classMeta('Component', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Expression_1(expression) {
    Statement_0.call(this);
    this.expression_1 = expression;
  }
  Expression_1.prototype.get_expression_l5w7j5_k$ = function () {
    return this.expression_1;
  };
  Expression_1.prototype.component1_7eebsc_k$ = function () {
    return this.expression_1;
  };
  Expression_1.prototype.copy_qbvq60_k$ = function (expression) {
    return new Expression_1(expression);
  };
  Expression_1.prototype.copy$default_x88uuw_k$ = function (expression, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      expression = this.expression_1;
    return this.copy_qbvq60_k$(expression);
  };
  Expression_1.prototype.toString = function () {
    return 'Expression(expression=' + this.expression_1 + ')';
  };
  Expression_1.prototype.hashCode = function () {
    return hashCode(this.expression_1);
  };
  Expression_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Expression_1))
      return false;
    var tmp0_other_with_cast = other instanceof Expression_1 ? other : THROW_CCE();
    if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
      return false;
    return true;
  };
  Expression_1.$metadata$ = classMeta('Expression', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Function_2(name, generics, parameters, returns, throws, body) {
    Statement_0.call(this);
    this.name_1 = name;
    this.generics_1 = generics;
    this.parameters_1 = parameters;
    this.returns_1 = returns;
    this.throws_1 = throws;
    this.body_1 = body;
  }
  Function_2.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Function_2.prototype.get_generics_1v316j_k$ = function () {
    return this.generics_1;
  };
  Function_2.prototype.get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  Function_2.prototype.get_returns_jfk3fe_k$ = function () {
    return this.returns_1;
  };
  Function_2.prototype.get_throws_jy60ra_k$ = function () {
    return this.throws_1;
  };
  Function_2.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  Function_2.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  Function_2.prototype.component2_7eebsb_k$ = function () {
    return this.generics_1;
  };
  Function_2.prototype.component3_7eebsa_k$ = function () {
    return this.parameters_1;
  };
  Function_2.prototype.component4_7eebs9_k$ = function () {
    return this.returns_1;
  };
  Function_2.prototype.component5_7eebs8_k$ = function () {
    return this.throws_1;
  };
  Function_2.prototype.component6_7eebs7_k$ = function () {
    return this.body_1;
  };
  Function_2.prototype.copy_7j9iih_k$ = function (name, generics, parameters, returns, throws, body) {
    return new Function_2(name, generics, parameters, returns, throws, body);
  };
  Function_2.prototype.copy$default_i5fyqn_k$ = function (name, generics, parameters, returns, throws, body, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      generics = this.generics_1;
    if (!(($mask0 & 4) === 0))
      parameters = this.parameters_1;
    if (!(($mask0 & 8) === 0))
      returns = this.returns_1;
    if (!(($mask0 & 16) === 0))
      throws = this.throws_1;
    if (!(($mask0 & 32) === 0))
      body = this.body_1;
    return this.copy_7j9iih_k$(name, generics, parameters, returns, throws, body);
  };
  Function_2.prototype.toString = function () {
    return 'Function(name=' + this.name_1 + ', generics=' + this.generics_1 + ', parameters=' + this.parameters_1 + ', returns=' + this.returns_1 + ', throws=' + this.throws_1 + ', body=' + this.body_1 + ')';
  };
  Function_2.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.generics_1) | 0;
    result = imul(result, 31) + hashCode(this.parameters_1) | 0;
    result = imul(result, 31) + (this.returns_1 == null ? 0 : this.returns_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.throws_1) | 0;
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  Function_2.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Function_2))
      return false;
    var tmp0_other_with_cast = other instanceof Function_2 ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.generics_1, tmp0_other_with_cast.generics_1))
      return false;
    if (!equals(this.parameters_1, tmp0_other_with_cast.parameters_1))
      return false;
    if (!equals(this.returns_1, tmp0_other_with_cast.returns_1))
      return false;
    if (!equals(this.throws_1, tmp0_other_with_cast.throws_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  Function_2.$metadata$ = classMeta('Function', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Declaration_5(mutable, name, type, value) {
    Statement_0.call(this);
    this.mutable_1 = mutable;
    this.name_1 = name;
    this.type_1 = type;
    this.value_1 = value;
  }
  Declaration_5.prototype.get_mutable_on1kxp_k$ = function () {
    return this.mutable_1;
  };
  Declaration_5.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Declaration_5.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  Declaration_5.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Declaration_5.prototype.component1_7eebsc_k$ = function () {
    return this.mutable_1;
  };
  Declaration_5.prototype.component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  Declaration_5.prototype.component3_7eebsa_k$ = function () {
    return this.type_1;
  };
  Declaration_5.prototype.component4_7eebs9_k$ = function () {
    return this.value_1;
  };
  Declaration_5.prototype.copy_ulq516_k$ = function (mutable, name, type, value) {
    return new Declaration_5(mutable, name, type, value);
  };
  Declaration_5.prototype.copy$default_liskd4_k$ = function (mutable, name, type, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      mutable = this.mutable_1;
    if (!(($mask0 & 2) === 0))
      name = this.name_1;
    if (!(($mask0 & 4) === 0))
      type = this.type_1;
    if (!(($mask0 & 8) === 0))
      value = this.value_1;
    return this.copy_ulq516_k$(mutable, name, type, value);
  };
  Declaration_5.prototype.toString = function () {
    return 'Declaration(mutable=' + this.mutable_1 + ', name=' + this.name_1 + ', type=' + this.type_1 + ', value=' + this.value_1 + ')';
  };
  Declaration_5.prototype.hashCode = function () {
    var result = this.mutable_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + (this.type_1 == null ? 0 : this.type_1.hashCode()) | 0;
    result = imul(result, 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
    return result;
  };
  Declaration_5.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Declaration_5))
      return false;
    var tmp0_other_with_cast = other instanceof Declaration_5 ? other : THROW_CCE();
    if (!(this.mutable_1 === tmp0_other_with_cast.mutable_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.type_1, tmp0_other_with_cast.type_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Declaration_5.$metadata$ = classMeta('Declaration', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Assignment_0(receiver, value) {
    Statement_0.call(this);
    this.receiver_1 = receiver;
    this.value_1 = value;
  }
  Assignment_0.prototype.get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  Assignment_0.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Assignment_0.prototype.component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  Assignment_0.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  Assignment_0.prototype.copy_6bmw3p_k$ = function (receiver, value) {
    return new Assignment_0(receiver, value);
  };
  Assignment_0.prototype.copy$default_cy0c0g_k$ = function (receiver, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      receiver = this.receiver_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    return this.copy_6bmw3p_k$(receiver, value);
  };
  Assignment_0.prototype.toString = function () {
    return 'Assignment(receiver=' + this.receiver_1 + ', value=' + this.value_1 + ')';
  };
  Assignment_0.prototype.hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    return result;
  };
  Assignment_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Assignment_0))
      return false;
    var tmp0_other_with_cast = other instanceof Assignment_0 ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Assignment_0.$metadata$ = classMeta('Assignment', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function If_0(condition, thenStatement, elseStatement) {
    Statement_0.call(this);
    this.condition_1 = condition;
    this.thenStatement_1 = thenStatement;
    this.elseStatement_1 = elseStatement;
  }
  If_0.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  If_0.prototype.get_thenStatement_8ukk7r_k$ = function () {
    return this.thenStatement_1;
  };
  If_0.prototype.get_elseStatement_u7gv77_k$ = function () {
    return this.elseStatement_1;
  };
  If_0.prototype.component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  If_0.prototype.component2_7eebsb_k$ = function () {
    return this.thenStatement_1;
  };
  If_0.prototype.component3_7eebsa_k$ = function () {
    return this.elseStatement_1;
  };
  If_0.prototype.copy_hseop3_k$ = function (condition, thenStatement, elseStatement) {
    return new If_0(condition, thenStatement, elseStatement);
  };
  If_0.prototype.copy$default_dvo8g2_k$ = function (condition, thenStatement, elseStatement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      condition = this.condition_1;
    if (!(($mask0 & 2) === 0))
      thenStatement = this.thenStatement_1;
    if (!(($mask0 & 4) === 0))
      elseStatement = this.elseStatement_1;
    return this.copy_hseop3_k$(condition, thenStatement, elseStatement);
  };
  If_0.prototype.toString = function () {
    return 'If(condition=' + this.condition_1 + ', thenStatement=' + this.thenStatement_1 + ', elseStatement=' + this.elseStatement_1 + ')';
  };
  If_0.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + hashCode(this.thenStatement_1) | 0;
    result = imul(result, 31) + (this.elseStatement_1 == null ? 0 : hashCode(this.elseStatement_1)) | 0;
    return result;
  };
  If_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof If_0))
      return false;
    var tmp0_other_with_cast = other instanceof If_0 ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.thenStatement_1, tmp0_other_with_cast.thenStatement_1))
      return false;
    if (!equals(this.elseStatement_1, tmp0_other_with_cast.elseStatement_1))
      return false;
    return true;
  };
  If_0.$metadata$ = classMeta('If', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Match_0() {
    Statement_0.call(this);
  }
  Match_0.$metadata$ = classMeta('Match', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function For_0(name, argument, body) {
    Statement_0.call(this);
    this.name_1 = name;
    this.argument_1 = argument;
    this.body_1 = body;
  }
  For_0.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  For_0.prototype.get_argument_cxpwg6_k$ = function () {
    return this.argument_1;
  };
  For_0.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  For_0.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  For_0.prototype.component2_7eebsb_k$ = function () {
    return this.argument_1;
  };
  For_0.prototype.component3_7eebsa_k$ = function () {
    return this.body_1;
  };
  For_0.prototype.copy_8qlflf_k$ = function (name, argument, body) {
    return new For_0(name, argument, body);
  };
  For_0.prototype.copy$default_4baw3d_k$ = function (name, argument, body, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      argument = this.argument_1;
    if (!(($mask0 & 4) === 0))
      body = this.body_1;
    return this.copy_8qlflf_k$(name, argument, body);
  };
  For_0.prototype.toString = function () {
    return 'For(name=' + this.name_1 + ', argument=' + this.argument_1 + ', body=' + this.body_1 + ')';
  };
  For_0.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.argument_1) | 0;
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  For_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof For_0))
      return false;
    var tmp0_other_with_cast = other instanceof For_0 ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.argument_1, tmp0_other_with_cast.argument_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  For_0.$metadata$ = classMeta('For', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function While_0(condition, body) {
    Statement_0.call(this);
    this.condition_1 = condition;
    this.body_1 = body;
  }
  While_0.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  While_0.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  While_0.prototype.component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  While_0.prototype.component2_7eebsb_k$ = function () {
    return this.body_1;
  };
  While_0.prototype.copy_9syilo_k$ = function (condition, body) {
    return new While_0(condition, body);
  };
  While_0.prototype.copy$default_8p9b7n_k$ = function (condition, body, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      condition = this.condition_1;
    if (!(($mask0 & 2) === 0))
      body = this.body_1;
    return this.copy_9syilo_k$(condition, body);
  };
  While_0.prototype.toString = function () {
    return 'While(condition=' + this.condition_1 + ', body=' + this.body_1 + ')';
  };
  While_0.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  While_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof While_0))
      return false;
    var tmp0_other_with_cast = other instanceof While_0 ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  While_0.$metadata$ = classMeta('While', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Try_0(body, catches, finallyStatement) {
    Statement_0.call(this);
    this.body_1 = body;
    this.catches_1 = catches;
    this.finallyStatement_1 = finallyStatement;
  }
  Try_0.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  Try_0.prototype.get_catches_agft1c_k$ = function () {
    return this.catches_1;
  };
  Try_0.prototype.get_finallyStatement_8c54l_k$ = function () {
    return this.finallyStatement_1;
  };
  Try_0.prototype.component1_7eebsc_k$ = function () {
    return this.body_1;
  };
  Try_0.prototype.component2_7eebsb_k$ = function () {
    return this.catches_1;
  };
  Try_0.prototype.component3_7eebsa_k$ = function () {
    return this.finallyStatement_1;
  };
  Try_0.prototype.copy_3gm2m8_k$ = function (body, catches, finallyStatement) {
    return new Try_0(body, catches, finallyStatement);
  };
  Try_0.prototype.copy$default_ptk1hz_k$ = function (body, catches, finallyStatement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      body = this.body_1;
    if (!(($mask0 & 2) === 0))
      catches = this.catches_1;
    if (!(($mask0 & 4) === 0))
      finallyStatement = this.finallyStatement_1;
    return this.copy_3gm2m8_k$(body, catches, finallyStatement);
  };
  Try_0.prototype.toString = function () {
    return 'Try(body=' + this.body_1 + ', catches=' + this.catches_1 + ', finallyStatement=' + this.finallyStatement_1 + ')';
  };
  Try_0.prototype.hashCode = function () {
    var result = hashCode(this.body_1);
    result = imul(result, 31) + hashCode(this.catches_1) | 0;
    result = imul(result, 31) + (this.finallyStatement_1 == null ? 0 : hashCode(this.finallyStatement_1)) | 0;
    return result;
  };
  Try_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Try_0))
      return false;
    var tmp0_other_with_cast = other instanceof Try_0 ? other : THROW_CCE();
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    if (!equals(this.catches_1, tmp0_other_with_cast.catches_1))
      return false;
    if (!equals(this.finallyStatement_1, tmp0_other_with_cast.finallyStatement_1))
      return false;
    return true;
  };
  Try_0.$metadata$ = classMeta('Try', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function With_0(name, argument, body) {
    Statement_0.call(this);
    this.name_1 = name;
    this.argument_1 = argument;
    this.body_1 = body;
  }
  With_0.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  With_0.prototype.get_argument_cxpwg6_k$ = function () {
    return this.argument_1;
  };
  With_0.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  With_0.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  With_0.prototype.component2_7eebsb_k$ = function () {
    return this.argument_1;
  };
  With_0.prototype.component3_7eebsa_k$ = function () {
    return this.body_1;
  };
  With_0.prototype.copy_vmcjdi_k$ = function (name, argument, body) {
    return new With_0(name, argument, body);
  };
  With_0.prototype.copy$default_4baw3d_k$ = function (name, argument, body, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      argument = this.argument_1;
    if (!(($mask0 & 4) === 0))
      body = this.body_1;
    return this.copy_vmcjdi_k$(name, argument, body);
  };
  With_0.prototype.toString = function () {
    return 'With(name=' + this.name_1 + ', argument=' + this.argument_1 + ', body=' + this.body_1 + ')';
  };
  With_0.prototype.hashCode = function () {
    var result = this.name_1 == null ? 0 : getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.argument_1) | 0;
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  With_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof With_0))
      return false;
    var tmp0_other_with_cast = other instanceof With_0 ? other : THROW_CCE();
    if (!(this.name_1 == tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.argument_1, tmp0_other_with_cast.argument_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  With_0.$metadata$ = classMeta('With', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Label_0(label, statement) {
    Statement_0.call(this);
    this.label_1 = label;
    this.statement_1 = statement;
  }
  Label_0.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  Label_0.prototype.get_statement_pyx5iy_k$ = function () {
    return this.statement_1;
  };
  Label_0.prototype.component1_7eebsc_k$ = function () {
    return this.label_1;
  };
  Label_0.prototype.component2_7eebsb_k$ = function () {
    return this.statement_1;
  };
  Label_0.prototype.copy_jn1ib4_k$ = function (label, statement) {
    return new Label_0(label, statement);
  };
  Label_0.prototype.copy$default_moqvev_k$ = function (label, statement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      label = this.label_1;
    if (!(($mask0 & 2) === 0))
      statement = this.statement_1;
    return this.copy_jn1ib4_k$(label, statement);
  };
  Label_0.prototype.toString = function () {
    return 'Label(label=' + this.label_1 + ', statement=' + this.statement_1 + ')';
  };
  Label_0.prototype.hashCode = function () {
    var result = getStringHashCode(this.label_1);
    result = imul(result, 31) + hashCode(this.statement_1) | 0;
    return result;
  };
  Label_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Label_0))
      return false;
    var tmp0_other_with_cast = other instanceof Label_0 ? other : THROW_CCE();
    if (!(this.label_1 === tmp0_other_with_cast.label_1))
      return false;
    if (!equals(this.statement_1, tmp0_other_with_cast.statement_1))
      return false;
    return true;
  };
  Label_0.$metadata$ = classMeta('Label', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Break_1(label) {
    Statement_0.call(this);
    this.label_1 = label;
  }
  Break_1.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  Break_1.prototype.component1_7eebsc_k$ = function () {
    return this.label_1;
  };
  Break_1.prototype.copy_o1ci45_k$ = function (label) {
    return new Break_1(label);
  };
  Break_1.prototype.copy$default_q3pzg4_k$ = function (label, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      label = this.label_1;
    return this.copy_o1ci45_k$(label);
  };
  Break_1.prototype.toString = function () {
    return 'Break(label=' + this.label_1 + ')';
  };
  Break_1.prototype.hashCode = function () {
    return this.label_1 == null ? 0 : getStringHashCode(this.label_1);
  };
  Break_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Break_1))
      return false;
    var tmp0_other_with_cast = other instanceof Break_1 ? other : THROW_CCE();
    if (!(this.label_1 == tmp0_other_with_cast.label_1))
      return false;
    return true;
  };
  Break_1.$metadata$ = classMeta('Break', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Continue_1(label) {
    Statement_0.call(this);
    this.label_1 = label;
  }
  Continue_1.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  Continue_1.prototype.component1_7eebsc_k$ = function () {
    return this.label_1;
  };
  Continue_1.prototype.copy_o1ci45_k$ = function (label) {
    return new Continue_1(label);
  };
  Continue_1.prototype.copy$default_q3pzg4_k$ = function (label, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      label = this.label_1;
    return this.copy_o1ci45_k$(label);
  };
  Continue_1.prototype.toString = function () {
    return 'Continue(label=' + this.label_1 + ')';
  };
  Continue_1.prototype.hashCode = function () {
    return this.label_1 == null ? 0 : getStringHashCode(this.label_1);
  };
  Continue_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Continue_1))
      return false;
    var tmp0_other_with_cast = other instanceof Continue_1 ? other : THROW_CCE();
    if (!(this.label_1 == tmp0_other_with_cast.label_1))
      return false;
    return true;
  };
  Continue_1.$metadata$ = classMeta('Continue', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Return_1(value) {
    Statement_0.call(this);
    this.value_1 = value;
  }
  Return_1.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Return_1.prototype.component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  Return_1.prototype.copy_yw2xhj_k$ = function (value) {
    return new Return_1(value);
  };
  Return_1.prototype.copy$default_x88uuw_k$ = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    return this.copy_yw2xhj_k$(value);
  };
  Return_1.prototype.toString = function () {
    return 'Return(value=' + this.value_1 + ')';
  };
  Return_1.prototype.hashCode = function () {
    return this.value_1 == null ? 0 : hashCode(this.value_1);
  };
  Return_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Return_1))
      return false;
    var tmp0_other_with_cast = other instanceof Return_1 ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Return_1.$metadata$ = classMeta('Return', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Throw_1(exception) {
    Statement_0.call(this);
    this.exception_1 = exception;
  }
  Throw_1.prototype.get_exception_x0n6w6_k$ = function () {
    return this.exception_1;
  };
  Throw_1.prototype.component1_7eebsc_k$ = function () {
    return this.exception_1;
  };
  Throw_1.prototype.copy_qbvq60_k$ = function (exception) {
    return new Throw_1(exception);
  };
  Throw_1.prototype.copy$default_x88uuw_k$ = function (exception, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      exception = this.exception_1;
    return this.copy_qbvq60_k$(exception);
  };
  Throw_1.prototype.toString = function () {
    return 'Throw(exception=' + this.exception_1 + ')';
  };
  Throw_1.prototype.hashCode = function () {
    return hashCode(this.exception_1);
  };
  Throw_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Throw_1))
      return false;
    var tmp0_other_with_cast = other instanceof Throw_1 ? other : THROW_CCE();
    if (!equals(this.exception_1, tmp0_other_with_cast.exception_1))
      return false;
    return true;
  };
  Throw_1.$metadata$ = classMeta('Throw', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Assert_0(condition, message) {
    Statement_0.call(this);
    this.condition_1 = condition;
    this.message_1 = message;
  }
  Assert_0.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  Assert_0.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Assert_0.prototype.component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  Assert_0.prototype.component2_7eebsb_k$ = function () {
    return this.message_1;
  };
  Assert_0.prototype.copy_h2misk_k$ = function (condition, message) {
    return new Assert_0(condition, message);
  };
  Assert_0.prototype.copy$default_cy0c0g_k$ = function (condition, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      condition = this.condition_1;
    if (!(($mask0 & 2) === 0))
      message = this.message_1;
    return this.copy_h2misk_k$(condition, message);
  };
  Assert_0.prototype.toString = function () {
    return 'Assert(condition=' + this.condition_1 + ', message=' + this.message_1 + ')';
  };
  Assert_0.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + (this.message_1 == null ? 0 : hashCode(this.message_1)) | 0;
    return result;
  };
  Assert_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Assert_0))
      return false;
    var tmp0_other_with_cast = other instanceof Assert_0 ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.message_1, tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  Assert_0.$metadata$ = classMeta('Assert', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Require_0(condition, message) {
    Statement_0.call(this);
    this.condition_1 = condition;
    this.message_1 = message;
  }
  Require_0.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  Require_0.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Require_0.prototype.component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  Require_0.prototype.component2_7eebsb_k$ = function () {
    return this.message_1;
  };
  Require_0.prototype.copy_h2misk_k$ = function (condition, message) {
    return new Require_0(condition, message);
  };
  Require_0.prototype.copy$default_cy0c0g_k$ = function (condition, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      condition = this.condition_1;
    if (!(($mask0 & 2) === 0))
      message = this.message_1;
    return this.copy_h2misk_k$(condition, message);
  };
  Require_0.prototype.toString = function () {
    return 'Require(condition=' + this.condition_1 + ', message=' + this.message_1 + ')';
  };
  Require_0.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + (this.message_1 == null ? 0 : hashCode(this.message_1)) | 0;
    return result;
  };
  Require_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Require_0))
      return false;
    var tmp0_other_with_cast = other instanceof Require_0 ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.message_1, tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  Require_0.$metadata$ = classMeta('Require', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Ensure_0(condition, message) {
    Statement_0.call(this);
    this.condition_1 = condition;
    this.message_1 = message;
  }
  Ensure_0.prototype.get_condition_5qa366_k$ = function () {
    return this.condition_1;
  };
  Ensure_0.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Ensure_0.prototype.component1_7eebsc_k$ = function () {
    return this.condition_1;
  };
  Ensure_0.prototype.component2_7eebsb_k$ = function () {
    return this.message_1;
  };
  Ensure_0.prototype.copy_h2misk_k$ = function (condition, message) {
    return new Ensure_0(condition, message);
  };
  Ensure_0.prototype.copy$default_cy0c0g_k$ = function (condition, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      condition = this.condition_1;
    if (!(($mask0 & 2) === 0))
      message = this.message_1;
    return this.copy_h2misk_k$(condition, message);
  };
  Ensure_0.prototype.toString = function () {
    return 'Ensure(condition=' + this.condition_1 + ', message=' + this.message_1 + ')';
  };
  Ensure_0.prototype.hashCode = function () {
    var result = hashCode(this.condition_1);
    result = imul(result, 31) + (this.message_1 == null ? 0 : hashCode(this.message_1)) | 0;
    return result;
  };
  Ensure_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ensure_0))
      return false;
    var tmp0_other_with_cast = other instanceof Ensure_0 ? other : THROW_CCE();
    if (!equals(this.condition_1, tmp0_other_with_cast.condition_1))
      return false;
    if (!equals(this.message_1, tmp0_other_with_cast.message_1))
      return false;
    return true;
  };
  Ensure_0.$metadata$ = classMeta('Ensure', undefined, undefined, undefined, undefined, Statement_0.prototype);
  function Scalar_0(value) {
    Literal_0.call(this);
    this.value_1 = value;
  }
  Scalar_0.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Scalar_0.prototype.component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  Scalar_0.prototype.copy_ec15o6_k$ = function (value) {
    return new Scalar_0(value);
  };
  Scalar_0.prototype.copy$default_y52g3z_k$ = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    return this.copy_ec15o6_k$(value);
  };
  Scalar_0.prototype.toString = function () {
    return 'Scalar(value=' + toString_0(this.value_1) + ')';
  };
  Scalar_0.prototype.hashCode = function () {
    return this.value_1 == null ? 0 : hashCode(this.value_1);
  };
  Scalar_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scalar_0))
      return false;
    var tmp0_other_with_cast = other instanceof Scalar_0 ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Scalar_0.$metadata$ = classMeta('Scalar', undefined, undefined, undefined, undefined, Literal_0.prototype);
  function String_1(literals, arguments_0) {
    Literal_0.call(this);
    this.literals_1 = literals;
    this.arguments_1 = arguments_0;
  }
  String_1.prototype.get_literals_9ag49f_k$ = function () {
    return this.literals_1;
  };
  String_1.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  String_1.prototype.component1_7eebsc_k$ = function () {
    return this.literals_1;
  };
  String_1.prototype.component2_7eebsb_k$ = function () {
    return this.arguments_1;
  };
  String_1.prototype.copy_swvqy7_k$ = function (literals, arguments_0) {
    return new String_1(literals, arguments_0);
  };
  String_1.prototype.copy$default_aeugr4_k$ = function (literals, arguments_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      literals = this.literals_1;
    if (!(($mask0 & 2) === 0))
      arguments_0 = this.arguments_1;
    return this.copy_swvqy7_k$(literals, arguments_0);
  };
  String_1.prototype.toString = function () {
    return 'String(literals=' + this.literals_1 + ', arguments=' + this.arguments_1 + ')';
  };
  String_1.prototype.hashCode = function () {
    var result = hashCode(this.literals_1);
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    return result;
  };
  String_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof String_1))
      return false;
    var tmp0_other_with_cast = other instanceof String_1 ? other : THROW_CCE();
    if (!equals(this.literals_1, tmp0_other_with_cast.literals_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    return true;
  };
  String_1.$metadata$ = classMeta('String', undefined, undefined, undefined, undefined, Literal_0.prototype);
  function List_1(elements) {
    Literal_0.call(this);
    this.elements_1 = elements;
  }
  List_1.prototype.get_elements_vxwh8g_k$ = function () {
    return this.elements_1;
  };
  List_1.prototype.component1_7eebsc_k$ = function () {
    return this.elements_1;
  };
  List_1.prototype.copy_zfnt32_k$ = function (elements) {
    return new List_1(elements);
  };
  List_1.prototype.copy$default_h8a1xu_k$ = function (elements, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      elements = this.elements_1;
    return this.copy_zfnt32_k$(elements);
  };
  List_1.prototype.toString = function () {
    return 'List(elements=' + this.elements_1 + ')';
  };
  List_1.prototype.hashCode = function () {
    return hashCode(this.elements_1);
  };
  List_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof List_1))
      return false;
    var tmp0_other_with_cast = other instanceof List_1 ? other : THROW_CCE();
    if (!equals(this.elements_1, tmp0_other_with_cast.elements_1))
      return false;
    return true;
  };
  List_1.$metadata$ = classMeta('List', undefined, undefined, undefined, undefined, Literal_0.prototype);
  function Object_2(properties) {
    Literal_0.call(this);
    this.properties_1 = properties;
  }
  Object_2.prototype.get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  Object_2.prototype.component1_7eebsc_k$ = function () {
    return this.properties_1;
  };
  Object_2.prototype.copy_p3fije_k$ = function (properties) {
    return new Object_2(properties);
  };
  Object_2.prototype.copy$default_9uw6rc_k$ = function (properties, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      properties = this.properties_1;
    return this.copy_p3fije_k$(properties);
  };
  Object_2.prototype.toString = function () {
    return 'Object(properties=' + this.properties_1 + ')';
  };
  Object_2.prototype.hashCode = function () {
    return hashCode(this.properties_1);
  };
  Object_2.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Object_2))
      return false;
    var tmp0_other_with_cast = other instanceof Object_2 ? other : THROW_CCE();
    if (!equals(this.properties_1, tmp0_other_with_cast.properties_1))
      return false;
    return true;
  };
  Object_2.$metadata$ = classMeta('Object', undefined, undefined, undefined, undefined, Literal_0.prototype);
  function Variable_3(qualifier, name) {
    Access_0.call(this);
    this.qualifier_1 = qualifier;
    this.name_1 = name;
  }
  Variable_3.prototype.get_qualifier_c4gvsv_k$ = function () {
    return this.qualifier_1;
  };
  Variable_3.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Variable_3.prototype.component1_7eebsc_k$ = function () {
    return this.qualifier_1;
  };
  Variable_3.prototype.component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  Variable_3.prototype.copy_ta9ep0_k$ = function (qualifier, name) {
    return new Variable_3(qualifier, name);
  };
  Variable_3.prototype.copy$default_6fdm9i_k$ = function (qualifier, name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      qualifier = this.qualifier_1;
    if (!(($mask0 & 2) === 0))
      name = this.name_1;
    return this.copy_ta9ep0_k$(qualifier, name);
  };
  Variable_3.prototype.toString = function () {
    return 'Variable(qualifier=' + this.qualifier_1 + ', name=' + this.name_1 + ')';
  };
  Variable_3.prototype.hashCode = function () {
    var result = this.qualifier_1 == null ? 0 : this.qualifier_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    return result;
  };
  Variable_3.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Variable_3))
      return false;
    var tmp0_other_with_cast = other instanceof Variable_3 ? other : THROW_CCE();
    if (!equals(this.qualifier_1, tmp0_other_with_cast.qualifier_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  Variable_3.$metadata$ = classMeta('Variable', undefined, undefined, undefined, undefined, Access_0.prototype);
  function Property_2(receiver, coalesce, name) {
    Access_0.call(this);
    this.receiver_1 = receiver;
    this.coalesce_1 = coalesce;
    this.name_1 = name;
  }
  Property_2.prototype.get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  Property_2.prototype.get_coalesce_nkfaeo_k$ = function () {
    return this.coalesce_1;
  };
  Property_2.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Property_2.prototype.component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  Property_2.prototype.component2_7eebsb_k$ = function () {
    return this.coalesce_1;
  };
  Property_2.prototype.component3_7eebsa_k$ = function () {
    return this.name_1;
  };
  Property_2.prototype.copy_avn329_k$ = function (receiver, coalesce, name) {
    return new Property_2(receiver, coalesce, name);
  };
  Property_2.prototype.copy$default_ahfa4y_k$ = function (receiver, coalesce, name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      receiver = this.receiver_1;
    if (!(($mask0 & 2) === 0))
      coalesce = this.coalesce_1;
    if (!(($mask0 & 4) === 0))
      name = this.name_1;
    return this.copy_avn329_k$(receiver, coalesce, name);
  };
  Property_2.prototype.toString = function () {
    return 'Property(receiver=' + this.receiver_1 + ', coalesce=' + this.coalesce_1 + ', name=' + this.name_1 + ')';
  };
  Property_2.prototype.hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + (this.coalesce_1 | 0) | 0;
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    return result;
  };
  Property_2.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Property_2))
      return false;
    var tmp0_other_with_cast = other instanceof Property_2 ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!(this.coalesce_1 === tmp0_other_with_cast.coalesce_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  Property_2.$metadata$ = classMeta('Property', undefined, undefined, undefined, undefined, Access_0.prototype);
  function Index_1(receiver, arguments_0) {
    Access_0.call(this);
    this.receiver_1 = receiver;
    this.arguments_1 = arguments_0;
  }
  Index_1.prototype.get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  Index_1.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  Index_1.prototype.component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  Index_1.prototype.component2_7eebsb_k$ = function () {
    return this.arguments_1;
  };
  Index_1.prototype.copy_xf4i91_k$ = function (receiver, arguments_0) {
    return new Index_1(receiver, arguments_0);
  };
  Index_1.prototype.copy$default_pc98pm_k$ = function (receiver, arguments_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      receiver = this.receiver_1;
    if (!(($mask0 & 2) === 0))
      arguments_0 = this.arguments_1;
    return this.copy_xf4i91_k$(receiver, arguments_0);
  };
  Index_1.prototype.toString = function () {
    return 'Index(receiver=' + this.receiver_1 + ', arguments=' + this.arguments_1 + ')';
  };
  Index_1.prototype.hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    return result;
  };
  Index_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Index_1))
      return false;
    var tmp0_other_with_cast = other instanceof Index_1 ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    return true;
  };
  Index_1.$metadata$ = classMeta('Index', undefined, undefined, undefined, undefined, Access_0.prototype);
  function Function_3(qualifier, name, arguments_0) {
    Invoke_0.call(this);
    this.qualifier_1 = qualifier;
    this.name_1 = name;
    this.arguments_1 = arguments_0;
  }
  Function_3.prototype.get_qualifier_c4gvsv_k$ = function () {
    return this.qualifier_1;
  };
  Function_3.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Function_3.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  Function_3.prototype.component1_7eebsc_k$ = function () {
    return this.qualifier_1;
  };
  Function_3.prototype.component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  Function_3.prototype.component3_7eebsa_k$ = function () {
    return this.arguments_1;
  };
  Function_3.prototype.copy_7w7vbl_k$ = function (qualifier, name, arguments_0) {
    return new Function_3(qualifier, name, arguments_0);
  };
  Function_3.prototype.copy$default_ps06uk_k$ = function (qualifier, name, arguments_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      qualifier = this.qualifier_1;
    if (!(($mask0 & 2) === 0))
      name = this.name_1;
    if (!(($mask0 & 4) === 0))
      arguments_0 = this.arguments_1;
    return this.copy_7w7vbl_k$(qualifier, name, arguments_0);
  };
  Function_3.prototype.toString = function () {
    return 'Function(qualifier=' + this.qualifier_1 + ', name=' + this.name_1 + ', arguments=' + this.arguments_1 + ')';
  };
  Function_3.prototype.hashCode = function () {
    var result = this.qualifier_1 == null ? 0 : this.qualifier_1.hashCode();
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    return result;
  };
  Function_3.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Function_3))
      return false;
    var tmp0_other_with_cast = other instanceof Function_3 ? other : THROW_CCE();
    if (!equals(this.qualifier_1, tmp0_other_with_cast.qualifier_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    return true;
  };
  Function_3.$metadata$ = classMeta('Function', undefined, undefined, undefined, undefined, Invoke_0.prototype);
  function Method_1(receiver, coalesce, cascade, name, arguments_0) {
    Invoke_0.call(this);
    this.receiver_1 = receiver;
    this.coalesce_1 = coalesce;
    this.cascade_1 = cascade;
    this.name_1 = name;
    this.arguments_1 = arguments_0;
  }
  Method_1.prototype.get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  Method_1.prototype.get_coalesce_nkfaeo_k$ = function () {
    return this.coalesce_1;
  };
  Method_1.prototype.get_cascade_afvv7v_k$ = function () {
    return this.cascade_1;
  };
  Method_1.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Method_1.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  Method_1.prototype.component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  Method_1.prototype.component2_7eebsb_k$ = function () {
    return this.coalesce_1;
  };
  Method_1.prototype.component3_7eebsa_k$ = function () {
    return this.cascade_1;
  };
  Method_1.prototype.component4_7eebs9_k$ = function () {
    return this.name_1;
  };
  Method_1.prototype.component5_7eebs8_k$ = function () {
    return this.arguments_1;
  };
  Method_1.prototype.copy_quh1xg_k$ = function (receiver, coalesce, cascade, name, arguments_0) {
    return new Method_1(receiver, coalesce, cascade, name, arguments_0);
  };
  Method_1.prototype.copy$default_e1b9wy_k$ = function (receiver, coalesce, cascade, name, arguments_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      receiver = this.receiver_1;
    if (!(($mask0 & 2) === 0))
      coalesce = this.coalesce_1;
    if (!(($mask0 & 4) === 0))
      cascade = this.cascade_1;
    if (!(($mask0 & 8) === 0))
      name = this.name_1;
    if (!(($mask0 & 16) === 0))
      arguments_0 = this.arguments_1;
    return this.copy_quh1xg_k$(receiver, coalesce, cascade, name, arguments_0);
  };
  Method_1.prototype.toString = function () {
    return 'Method(receiver=' + this.receiver_1 + ', coalesce=' + this.coalesce_1 + ', cascade=' + this.cascade_1 + ', name=' + this.name_1 + ', arguments=' + this.arguments_1 + ')';
  };
  Method_1.prototype.hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + (this.coalesce_1 | 0) | 0;
    result = imul(result, 31) + (this.cascade_1 | 0) | 0;
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    return result;
  };
  Method_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Method_1))
      return false;
    var tmp0_other_with_cast = other instanceof Method_1 ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!(this.coalesce_1 === tmp0_other_with_cast.coalesce_1))
      return false;
    if (!(this.cascade_1 === tmp0_other_with_cast.cascade_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    return true;
  };
  Method_1.$metadata$ = classMeta('Method', undefined, undefined, undefined, undefined, Invoke_0.prototype);
  function Pipeline_0(receiver, coalesce, cascade, qualifier, name, arguments_0) {
    Invoke_0.call(this);
    this.receiver_1 = receiver;
    this.coalesce_1 = coalesce;
    this.cascade_1 = cascade;
    this.qualifier_1 = qualifier;
    this.name_1 = name;
    this.arguments_1 = arguments_0;
  }
  Pipeline_0.prototype.get_receiver_puon20_k$ = function () {
    return this.receiver_1;
  };
  Pipeline_0.prototype.get_coalesce_nkfaeo_k$ = function () {
    return this.coalesce_1;
  };
  Pipeline_0.prototype.get_cascade_afvv7v_k$ = function () {
    return this.cascade_1;
  };
  Pipeline_0.prototype.get_qualifier_c4gvsv_k$ = function () {
    return this.qualifier_1;
  };
  Pipeline_0.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Pipeline_0.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  Pipeline_0.prototype.component1_7eebsc_k$ = function () {
    return this.receiver_1;
  };
  Pipeline_0.prototype.component2_7eebsb_k$ = function () {
    return this.coalesce_1;
  };
  Pipeline_0.prototype.component3_7eebsa_k$ = function () {
    return this.cascade_1;
  };
  Pipeline_0.prototype.component4_7eebs9_k$ = function () {
    return this.qualifier_1;
  };
  Pipeline_0.prototype.component5_7eebs8_k$ = function () {
    return this.name_1;
  };
  Pipeline_0.prototype.component6_7eebs7_k$ = function () {
    return this.arguments_1;
  };
  Pipeline_0.prototype.copy_3xd6ya_k$ = function (receiver, coalesce, cascade, qualifier, name, arguments_0) {
    return new Pipeline_0(receiver, coalesce, cascade, qualifier, name, arguments_0);
  };
  Pipeline_0.prototype.copy$default_vwgqks_k$ = function (receiver, coalesce, cascade, qualifier, name, arguments_0, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      receiver = this.receiver_1;
    if (!(($mask0 & 2) === 0))
      coalesce = this.coalesce_1;
    if (!(($mask0 & 4) === 0))
      cascade = this.cascade_1;
    if (!(($mask0 & 8) === 0))
      qualifier = this.qualifier_1;
    if (!(($mask0 & 16) === 0))
      name = this.name_1;
    if (!(($mask0 & 32) === 0))
      arguments_0 = this.arguments_1;
    return this.copy_3xd6ya_k$(receiver, coalesce, cascade, qualifier, name, arguments_0);
  };
  Pipeline_0.prototype.toString = function () {
    return 'Pipeline(receiver=' + this.receiver_1 + ', coalesce=' + this.coalesce_1 + ', cascade=' + this.cascade_1 + ', qualifier=' + this.qualifier_1 + ', name=' + this.name_1 + ', arguments=' + this.arguments_1 + ')';
  };
  Pipeline_0.prototype.hashCode = function () {
    var result = hashCode(this.receiver_1);
    result = imul(result, 31) + (this.coalesce_1 | 0) | 0;
    result = imul(result, 31) + (this.cascade_1 | 0) | 0;
    result = imul(result, 31) + (this.qualifier_1 == null ? 0 : this.qualifier_1.hashCode()) | 0;
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    return result;
  };
  Pipeline_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pipeline_0))
      return false;
    var tmp0_other_with_cast = other instanceof Pipeline_0 ? other : THROW_CCE();
    if (!equals(this.receiver_1, tmp0_other_with_cast.receiver_1))
      return false;
    if (!(this.coalesce_1 === tmp0_other_with_cast.coalesce_1))
      return false;
    if (!(this.cascade_1 === tmp0_other_with_cast.cascade_1))
      return false;
    if (!equals(this.qualifier_1, tmp0_other_with_cast.qualifier_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    return true;
  };
  Pipeline_0.$metadata$ = classMeta('Pipeline', undefined, undefined, undefined, undefined, Invoke_0.prototype);
  function Macro(name, arguments_0, dsl) {
    Invoke_0.call(this);
    this.name_1 = name;
    this.arguments_1 = arguments_0;
    this.dsl_1 = dsl;
  }
  Macro.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Macro.prototype.get_arguments_p5ddub_k$ = function () {
    return this.arguments_1;
  };
  Macro.prototype.get_dsl_18j73g_k$ = function () {
    return this.dsl_1;
  };
  Macro.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  Macro.prototype.component2_7eebsb_k$ = function () {
    return this.arguments_1;
  };
  Macro.prototype.component3_7eebsa_k$ = function () {
    return this.dsl_1;
  };
  Macro.prototype.copy_hwjlwg_k$ = function (name, arguments_0, dsl) {
    return new Macro(name, arguments_0, dsl);
  };
  Macro.prototype.copy$default_y1l9dh_k$ = function (name, arguments_0, dsl, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      arguments_0 = this.arguments_1;
    if (!(($mask0 & 4) === 0))
      dsl = this.dsl_1;
    return this.copy_hwjlwg_k$(name, arguments_0, dsl);
  };
  Macro.prototype.toString = function () {
    return 'Macro(name=' + this.name_1 + ', arguments=' + this.arguments_1 + ', dsl=' + toString_0(this.dsl_1) + ')';
  };
  Macro.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.arguments_1) | 0;
    result = imul(result, 31) + (this.dsl_1 == null ? 0 : hashCode(this.dsl_1)) | 0;
    return result;
  };
  Macro.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Macro))
      return false;
    var tmp0_other_with_cast = other instanceof Macro ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.arguments_1, tmp0_other_with_cast.arguments_1))
      return false;
    if (!equals(this.dsl_1, tmp0_other_with_cast.dsl_1))
      return false;
    return true;
  };
  Macro.$metadata$ = classMeta('Macro', undefined, undefined, undefined, undefined, Invoke_0.prototype);
  function Literal_0() {
    Expression_2.call(this);
  }
  Literal_0.$metadata$ = classMeta('Literal', undefined, undefined, undefined, undefined, Expression_2.prototype);
  function Group_0(expression) {
    Expression_2.call(this);
    this.expression_1 = expression;
  }
  Group_0.prototype.get_expression_l5w7j5_k$ = function () {
    return this.expression_1;
  };
  Group_0.prototype.component1_7eebsc_k$ = function () {
    return this.expression_1;
  };
  Group_0.prototype.copy_qbvq60_k$ = function (expression) {
    return new Group_0(expression);
  };
  Group_0.prototype.copy$default_x88uuw_k$ = function (expression, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      expression = this.expression_1;
    return this.copy_qbvq60_k$(expression);
  };
  Group_0.prototype.toString = function () {
    return 'Group(expression=' + this.expression_1 + ')';
  };
  Group_0.prototype.hashCode = function () {
    return hashCode(this.expression_1);
  };
  Group_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Group_0))
      return false;
    var tmp0_other_with_cast = other instanceof Group_0 ? other : THROW_CCE();
    if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
      return false;
    return true;
  };
  Group_0.$metadata$ = classMeta('Group', undefined, undefined, undefined, undefined, Expression_2.prototype);
  function Unary_0(operator, expression) {
    Expression_2.call(this);
    this.operator_1 = operator;
    this.expression_1 = expression;
  }
  Unary_0.prototype.get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  Unary_0.prototype.get_expression_l5w7j5_k$ = function () {
    return this.expression_1;
  };
  Unary_0.prototype.component1_7eebsc_k$ = function () {
    return this.operator_1;
  };
  Unary_0.prototype.component2_7eebsb_k$ = function () {
    return this.expression_1;
  };
  Unary_0.prototype.copy_eghmwn_k$ = function (operator, expression) {
    return new Unary_0(operator, expression);
  };
  Unary_0.prototype.copy$default_kbgedo_k$ = function (operator, expression, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      operator = this.operator_1;
    if (!(($mask0 & 2) === 0))
      expression = this.expression_1;
    return this.copy_eghmwn_k$(operator, expression);
  };
  Unary_0.prototype.toString = function () {
    return 'Unary(operator=' + this.operator_1 + ', expression=' + this.expression_1 + ')';
  };
  Unary_0.prototype.hashCode = function () {
    var result = getStringHashCode(this.operator_1);
    result = imul(result, 31) + hashCode(this.expression_1) | 0;
    return result;
  };
  Unary_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Unary_0))
      return false;
    var tmp0_other_with_cast = other instanceof Unary_0 ? other : THROW_CCE();
    if (!(this.operator_1 === tmp0_other_with_cast.operator_1))
      return false;
    if (!equals(this.expression_1, tmp0_other_with_cast.expression_1))
      return false;
    return true;
  };
  Unary_0.$metadata$ = classMeta('Unary', undefined, undefined, undefined, undefined, Expression_2.prototype);
  function Binary_0(operator, left, right) {
    Expression_2.call(this);
    this.operator_1 = operator;
    this.left_1 = left;
    this.right_1 = right;
  }
  Binary_0.prototype.get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  Binary_0.prototype.get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  Binary_0.prototype.get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  Binary_0.prototype.component1_7eebsc_k$ = function () {
    return this.operator_1;
  };
  Binary_0.prototype.component2_7eebsb_k$ = function () {
    return this.left_1;
  };
  Binary_0.prototype.component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  Binary_0.prototype.copy_cwwwee_k$ = function (operator, left, right) {
    return new Binary_0(operator, left, right);
  };
  Binary_0.prototype.copy$default_zdtol0_k$ = function (operator, left, right, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      operator = this.operator_1;
    if (!(($mask0 & 2) === 0))
      left = this.left_1;
    if (!(($mask0 & 4) === 0))
      right = this.right_1;
    return this.copy_cwwwee_k$(operator, left, right);
  };
  Binary_0.prototype.toString = function () {
    return 'Binary(operator=' + this.operator_1 + ', left=' + this.left_1 + ', right=' + this.right_1 + ')';
  };
  Binary_0.prototype.hashCode = function () {
    var result = getStringHashCode(this.operator_1);
    result = imul(result, 31) + hashCode(this.left_1) | 0;
    result = imul(result, 31) + hashCode(this.right_1) | 0;
    return result;
  };
  Binary_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Binary_0))
      return false;
    var tmp0_other_with_cast = other instanceof Binary_0 ? other : THROW_CCE();
    if (!(this.operator_1 === tmp0_other_with_cast.operator_1))
      return false;
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    return true;
  };
  Binary_0.$metadata$ = classMeta('Binary', undefined, undefined, undefined, undefined, Expression_2.prototype);
  function Access_0() {
    Expression_2.call(this);
  }
  Access_0.$metadata$ = classMeta('Access', undefined, undefined, undefined, undefined, Expression_2.prototype);
  function Invoke_0() {
    Expression_2.call(this);
  }
  Invoke_0.$metadata$ = classMeta('Invoke', undefined, undefined, undefined, undefined, Expression_2.prototype);
  function Lambda_1(parameters, body) {
    Expression_2.call(this);
    this.parameters_1 = parameters;
    this.body_1 = body;
  }
  Lambda_1.prototype.get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  Lambda_1.prototype.get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  Lambda_1.prototype.component1_7eebsc_k$ = function () {
    return this.parameters_1;
  };
  Lambda_1.prototype.component2_7eebsb_k$ = function () {
    return this.body_1;
  };
  Lambda_1.prototype.copy_ik57gc_k$ = function (parameters, body) {
    return new Lambda_1(parameters, body);
  };
  Lambda_1.prototype.copy$default_6h8cc5_k$ = function (parameters, body, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parameters = this.parameters_1;
    if (!(($mask0 & 2) === 0))
      body = this.body_1;
    return this.copy_ik57gc_k$(parameters, body);
  };
  Lambda_1.prototype.toString = function () {
    return 'Lambda(parameters=' + this.parameters_1 + ', body=' + this.body_1 + ')';
  };
  Lambda_1.prototype.hashCode = function () {
    var result = hashCode(this.parameters_1);
    result = imul(result, 31) + hashCode(this.body_1) | 0;
    return result;
  };
  Lambda_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Lambda_1))
      return false;
    var tmp0_other_with_cast = other instanceof Lambda_1 ? other : THROW_CCE();
    if (!equals(this.parameters_1, tmp0_other_with_cast.parameters_1))
      return false;
    if (!equals(this.body_1, tmp0_other_with_cast.body_1))
      return false;
    return true;
  };
  Lambda_1.$metadata$ = classMeta('Lambda', undefined, undefined, undefined, undefined, Expression_2.prototype);
  function Value_0(value) {
    Pattern_0.call(this);
    this.value_1 = value;
  }
  Value_0.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Value_0.prototype.component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  Value_0.prototype.copy_qbvq60_k$ = function (value) {
    return new Value_0(value);
  };
  Value_0.prototype.copy$default_x88uuw_k$ = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    return this.copy_qbvq60_k$(value);
  };
  Value_0.prototype.toString = function () {
    return 'Value(value=' + this.value_1 + ')';
  };
  Value_0.prototype.hashCode = function () {
    return hashCode(this.value_1);
  };
  Value_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value_0))
      return false;
    var tmp0_other_with_cast = other instanceof Value_0 ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Value_0.$metadata$ = classMeta('Value', undefined, undefined, undefined, undefined, Pattern_0.prototype);
  function Variable_4(name) {
    Pattern_0.call(this);
    this.name_1 = name;
  }
  Variable_4.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Variable_4.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  Variable_4.prototype.copy_3t26ic_k$ = function (name) {
    return new Variable_4(name);
  };
  Variable_4.prototype.copy$default_q3pzg4_k$ = function (name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    return this.copy_3t26ic_k$(name);
  };
  Variable_4.prototype.toString = function () {
    return 'Variable(name=' + this.name_1 + ')';
  };
  Variable_4.prototype.hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  Variable_4.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Variable_4))
      return false;
    var tmp0_other_with_cast = other instanceof Variable_4 ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  Variable_4.$metadata$ = classMeta('Variable', undefined, undefined, undefined, undefined, Pattern_0.prototype);
  function OrderedDestructure_0(patterns) {
    Pattern_0.call(this);
    this.patterns_1 = patterns;
  }
  OrderedDestructure_0.prototype.get_patterns_b73j2s_k$ = function () {
    return this.patterns_1;
  };
  OrderedDestructure_0.prototype.component1_7eebsc_k$ = function () {
    return this.patterns_1;
  };
  OrderedDestructure_0.prototype.copy_i270dm_k$ = function (patterns) {
    return new OrderedDestructure_0(patterns);
  };
  OrderedDestructure_0.prototype.copy$default_nj7cm6_k$ = function (patterns, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      patterns = this.patterns_1;
    return this.copy_i270dm_k$(patterns);
  };
  OrderedDestructure_0.prototype.toString = function () {
    return 'OrderedDestructure(patterns=' + this.patterns_1 + ')';
  };
  OrderedDestructure_0.prototype.hashCode = function () {
    return hashCode(this.patterns_1);
  };
  OrderedDestructure_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OrderedDestructure_0))
      return false;
    var tmp0_other_with_cast = other instanceof OrderedDestructure_0 ? other : THROW_CCE();
    if (!equals(this.patterns_1, tmp0_other_with_cast.patterns_1))
      return false;
    return true;
  };
  OrderedDestructure_0.$metadata$ = classMeta('OrderedDestructure', undefined, undefined, undefined, undefined, Pattern_0.prototype);
  function NamedDestructure_0(patterns) {
    Pattern_0.call(this);
    this.patterns_1 = patterns;
  }
  NamedDestructure_0.prototype.get_patterns_b73j2s_k$ = function () {
    return this.patterns_1;
  };
  NamedDestructure_0.prototype.component1_7eebsc_k$ = function () {
    return this.patterns_1;
  };
  NamedDestructure_0.prototype.copy_bqndoa_k$ = function (patterns) {
    return new NamedDestructure_0(patterns);
  };
  NamedDestructure_0.prototype.copy$default_o8o0au_k$ = function (patterns, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      patterns = this.patterns_1;
    return this.copy_bqndoa_k$(patterns);
  };
  NamedDestructure_0.prototype.toString = function () {
    return 'NamedDestructure(patterns=' + this.patterns_1 + ')';
  };
  NamedDestructure_0.prototype.hashCode = function () {
    return hashCode(this.patterns_1);
  };
  NamedDestructure_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NamedDestructure_0))
      return false;
    var tmp0_other_with_cast = other instanceof NamedDestructure_0 ? other : THROW_CCE();
    if (!equals(this.patterns_1, tmp0_other_with_cast.patterns_1))
      return false;
    return true;
  };
  NamedDestructure_0.$metadata$ = classMeta('NamedDestructure', undefined, undefined, undefined, undefined, Pattern_0.prototype);
  function TypedDestructure_0(type, pattern) {
    Pattern_0.call(this);
    this.type_1 = type;
    this.pattern_1 = pattern;
  }
  TypedDestructure_0.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  TypedDestructure_0.prototype.get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  TypedDestructure_0.prototype.component1_7eebsc_k$ = function () {
    return this.type_1;
  };
  TypedDestructure_0.prototype.component2_7eebsb_k$ = function () {
    return this.pattern_1;
  };
  TypedDestructure_0.prototype.copy_gbcp3g_k$ = function (type, pattern) {
    return new TypedDestructure_0(type, pattern);
  };
  TypedDestructure_0.prototype.copy$default_7lz3uo_k$ = function (type, pattern, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      type = this.type_1;
    if (!(($mask0 & 2) === 0))
      pattern = this.pattern_1;
    return this.copy_gbcp3g_k$(type, pattern);
  };
  TypedDestructure_0.prototype.toString = function () {
    return 'TypedDestructure(type=' + this.type_1 + ', pattern=' + this.pattern_1 + ')';
  };
  TypedDestructure_0.prototype.hashCode = function () {
    var result = this.type_1.hashCode();
    result = imul(result, 31) + (this.pattern_1 == null ? 0 : hashCode(this.pattern_1)) | 0;
    return result;
  };
  TypedDestructure_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypedDestructure_0))
      return false;
    var tmp0_other_with_cast = other instanceof TypedDestructure_0 ? other : THROW_CCE();
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    if (!equals(this.pattern_1, tmp0_other_with_cast.pattern_1))
      return false;
    return true;
  };
  TypedDestructure_0.$metadata$ = classMeta('TypedDestructure', undefined, undefined, undefined, undefined, Pattern_0.prototype);
  function VarargDestructure_0(pattern, operator) {
    Pattern_0.call(this);
    this.pattern_1 = pattern;
    this.operator_1 = operator;
  }
  VarargDestructure_0.prototype.get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  VarargDestructure_0.prototype.get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  VarargDestructure_0.prototype.component1_7eebsc_k$ = function () {
    return this.pattern_1;
  };
  VarargDestructure_0.prototype.component2_7eebsb_k$ = function () {
    return this.operator_1;
  };
  VarargDestructure_0.prototype.copy_gyg05q_k$ = function (pattern, operator) {
    return new VarargDestructure_0(pattern, operator);
  };
  VarargDestructure_0.prototype.copy$default_xe9zg2_k$ = function (pattern, operator, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      pattern = this.pattern_1;
    if (!(($mask0 & 2) === 0))
      operator = this.operator_1;
    return this.copy_gyg05q_k$(pattern, operator);
  };
  VarargDestructure_0.prototype.toString = function () {
    return 'VarargDestructure(pattern=' + this.pattern_1 + ', operator=' + this.operator_1 + ')';
  };
  VarargDestructure_0.prototype.hashCode = function () {
    var result = this.pattern_1 == null ? 0 : hashCode(this.pattern_1);
    result = imul(result, 31) + getStringHashCode(this.operator_1) | 0;
    return result;
  };
  VarargDestructure_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VarargDestructure_0))
      return false;
    var tmp0_other_with_cast = other instanceof VarargDestructure_0 ? other : THROW_CCE();
    if (!equals(this.pattern_1, tmp0_other_with_cast.pattern_1))
      return false;
    if (!(this.operator_1 === tmp0_other_with_cast.operator_1))
      return false;
    return true;
  };
  VarargDestructure_0.$metadata$ = classMeta('VarargDestructure', undefined, undefined, undefined, undefined, Pattern_0.prototype);
  function Predicate_0(pattern, predicate) {
    Pattern_0.call(this);
    this.pattern_1 = pattern;
    this.predicate_1 = predicate;
  }
  Predicate_0.prototype.get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  Predicate_0.prototype.get_predicate_ds2702_k$ = function () {
    return this.predicate_1;
  };
  Predicate_0.prototype.component1_7eebsc_k$ = function () {
    return this.pattern_1;
  };
  Predicate_0.prototype.component2_7eebsb_k$ = function () {
    return this.predicate_1;
  };
  Predicate_0.prototype.copy_pessdv_k$ = function (pattern, predicate) {
    return new Predicate_0(pattern, predicate);
  };
  Predicate_0.prototype.copy$default_dnqyc2_k$ = function (pattern, predicate, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      pattern = this.pattern_1;
    if (!(($mask0 & 2) === 0))
      predicate = this.predicate_1;
    return this.copy_pessdv_k$(pattern, predicate);
  };
  Predicate_0.prototype.toString = function () {
    return 'Predicate(pattern=' + this.pattern_1 + ', predicate=' + this.predicate_1 + ')';
  };
  Predicate_0.prototype.hashCode = function () {
    var result = hashCode(this.pattern_1);
    result = imul(result, 31) + hashCode(this.predicate_1) | 0;
    return result;
  };
  Predicate_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Predicate_0))
      return false;
    var tmp0_other_with_cast = other instanceof Predicate_0 ? other : THROW_CCE();
    if (!equals(this.pattern_1, tmp0_other_with_cast.pattern_1))
      return false;
    if (!equals(this.predicate_1, tmp0_other_with_cast.predicate_1))
      return false;
    return true;
  };
  Predicate_0.$metadata$ = classMeta('Predicate', undefined, undefined, undefined, undefined, Pattern_0.prototype);
  function Source_1(imports, statements) {
    RhovasAst.call(this);
    this.imports_1 = imports;
    this.statements_1 = statements;
  }
  Source_1.prototype.get_imports_x49mdh_k$ = function () {
    return this.imports_1;
  };
  Source_1.prototype.get_statements_nqb5hv_k$ = function () {
    return this.statements_1;
  };
  Source_1.prototype.component1_7eebsc_k$ = function () {
    return this.imports_1;
  };
  Source_1.prototype.component2_7eebsb_k$ = function () {
    return this.statements_1;
  };
  Source_1.prototype.copy_oum3xv_k$ = function (imports, statements) {
    return new Source_1(imports, statements);
  };
  Source_1.prototype.copy$default_wl6o4u_k$ = function (imports, statements, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      imports = this.imports_1;
    if (!(($mask0 & 2) === 0))
      statements = this.statements_1;
    return this.copy_oum3xv_k$(imports, statements);
  };
  Source_1.prototype.toString = function () {
    return 'Source(imports=' + this.imports_1 + ', statements=' + this.statements_1 + ')';
  };
  Source_1.prototype.hashCode = function () {
    var result = hashCode(this.imports_1);
    result = imul(result, 31) + hashCode(this.statements_1) | 0;
    return result;
  };
  Source_1.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Source_1))
      return false;
    var tmp0_other_with_cast = other instanceof Source_1 ? other : THROW_CCE();
    if (!equals(this.imports_1, tmp0_other_with_cast.imports_1))
      return false;
    if (!equals(this.statements_1, tmp0_other_with_cast.statements_1))
      return false;
    return true;
  };
  Source_1.$metadata$ = classMeta('Source', undefined, undefined, undefined, undefined, RhovasAst.prototype);
  function Import_0(path, alias) {
    RhovasAst.call(this);
    this.path_1 = path;
    this.alias_1 = alias;
  }
  Import_0.prototype.get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  Import_0.prototype.get_alias_iooo4n_k$ = function () {
    return this.alias_1;
  };
  Import_0.prototype.component1_7eebsc_k$ = function () {
    return this.path_1;
  };
  Import_0.prototype.component2_7eebsb_k$ = function () {
    return this.alias_1;
  };
  Import_0.prototype.copy_hqgxy6_k$ = function (path, alias) {
    return new Import_0(path, alias);
  };
  Import_0.prototype.copy$default_vyolcm_k$ = function (path, alias, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      path = this.path_1;
    if (!(($mask0 & 2) === 0))
      alias = this.alias_1;
    return this.copy_hqgxy6_k$(path, alias);
  };
  Import_0.prototype.toString = function () {
    return 'Import(path=' + this.path_1 + ', alias=' + this.alias_1 + ')';
  };
  Import_0.prototype.hashCode = function () {
    var result = hashCode(this.path_1);
    result = imul(result, 31) + (this.alias_1 == null ? 0 : getStringHashCode(this.alias_1)) | 0;
    return result;
  };
  Import_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Import_0))
      return false;
    var tmp0_other_with_cast = other instanceof Import_0 ? other : THROW_CCE();
    if (!equals(this.path_1, tmp0_other_with_cast.path_1))
      return false;
    if (!(this.alias_1 == tmp0_other_with_cast.alias_1))
      return false;
    return true;
  };
  Import_0.$metadata$ = classMeta('Import', undefined, undefined, undefined, undefined, RhovasAst.prototype);
  function Component_2() {
    RhovasAst.call(this);
  }
  Component_2.$metadata$ = classMeta('Component', undefined, undefined, undefined, undefined, RhovasAst.prototype);
  function Statement_0() {
    RhovasAst.call(this);
  }
  Statement_0.$metadata$ = classMeta('Statement', undefined, undefined, undefined, undefined, RhovasAst.prototype);
  function Expression_2() {
    RhovasAst.call(this);
  }
  Expression_2.$metadata$ = classMeta('Expression', undefined, undefined, undefined, undefined, RhovasAst.prototype);
  function Pattern_0() {
    RhovasAst.call(this);
  }
  Pattern_0.$metadata$ = classMeta('Pattern', undefined, undefined, undefined, undefined, RhovasAst.prototype);
  function Type_2(path, generics) {
    RhovasAst.call(this);
    this.path_1 = path;
    this.generics_1 = generics;
  }
  Type_2.prototype.get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  Type_2.prototype.get_generics_1v316j_k$ = function () {
    return this.generics_1;
  };
  Type_2.prototype.component1_7eebsc_k$ = function () {
    return this.path_1;
  };
  Type_2.prototype.component2_7eebsb_k$ = function () {
    return this.generics_1;
  };
  Type_2.prototype.copy_f22zr2_k$ = function (path, generics) {
    return new Type_2(path, generics);
  };
  Type_2.prototype.copy$default_72hhgu_k$ = function (path, generics, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      path = this.path_1;
    if (!(($mask0 & 2) === 0))
      generics = this.generics_1;
    return this.copy_f22zr2_k$(path, generics);
  };
  Type_2.prototype.toString = function () {
    return 'Type(path=' + this.path_1 + ', generics=' + this.generics_1 + ')';
  };
  Type_2.prototype.hashCode = function () {
    var result = hashCode(this.path_1);
    result = imul(result, 31) + (this.generics_1 == null ? 0 : hashCode(this.generics_1)) | 0;
    return result;
  };
  Type_2.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Type_2))
      return false;
    var tmp0_other_with_cast = other instanceof Type_2 ? other : THROW_CCE();
    if (!equals(this.path_1, tmp0_other_with_cast.path_1))
      return false;
    if (!equals(this.generics_1, tmp0_other_with_cast.generics_1))
      return false;
    return true;
  };
  Type_2.$metadata$ = classMeta('Type', undefined, undefined, undefined, undefined, RhovasAst.prototype);
  function Atom(name) {
    this.name_1 = name;
  }
  Atom.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Atom.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  Atom.prototype.copy_3t26ic_k$ = function (name) {
    return new Atom(name);
  };
  Atom.prototype.copy$default_q3pzg4_k$ = function (name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    return this.copy_3t26ic_k$(name);
  };
  Atom.prototype.toString = function () {
    return 'Atom(name=' + this.name_1 + ')';
  };
  Atom.prototype.hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  Atom.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Atom))
      return false;
    var tmp0_other_with_cast = other instanceof Atom ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  Atom.$metadata$ = classMeta('Atom');
  function Visitor_0() {
  }
  Visitor_0.$metadata$ = interfaceMeta('Visitor');
  function RhovasAst() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$0 = emptyList();
    tmp.context_1 = tmp$ret$0;
  }
  RhovasAst.prototype.set_context_8ca77u_k$ = function (_set____db54di) {
    this.context_1 = _set____db54di;
  };
  RhovasAst.prototype.get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  RhovasAst.$metadata$ = classMeta('RhovasAst');
  function lexIdentifier($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['[A-Za-z_]']));
    while ($this.match_949ua1_k$(['[A-Za-z0-9_]'])) {
    }
    var tmp = RhovasTokenType_IDENTIFIER_getInstance();
    return $this.chars_1.emit$default_kfkhdo_k$(tmp, null, 2, null);
  }
  function lexNumber($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['[0-9]']));
    var tmp;
    var tmp_0 = $this.chars_1.get_8san2r_k$(-1);
    if (equals(tmp_0 == null ? null : new Char(tmp_0), new Char(_Char___init__impl__6a9atx(48)))) {
      tmp = $this.peek_t7gyox_k$(['[box]']);
    } else {
      tmp = false;
    }
    if (tmp) {
      if ($this.match_949ua1_k$([new Char(_Char___init__impl__6a9atx(98)), '[0-1]']))
        return lexNumber$lexBase($this, 2, '[0-1]');
      else if ($this.match_949ua1_k$([new Char(_Char___init__impl__6a9atx(111)), '[0-7]']))
        return lexNumber$lexBase($this, 8, '[0-7]');
      else if ($this.match_949ua1_k$([new Char(_Char___init__impl__6a9atx(120)), '[0-9A-F]']))
        return lexNumber$lexBase($this, 16, '[0-9A-F]');
    }
    while ($this.match_949ua1_k$(['[0-9]'])) {
    }
    var tmp_1;
    if ($this.match_949ua1_k$([new Char(_Char___init__impl__6a9atx(46)), '[0-9]'])) {
      while ($this.match_949ua1_k$(['[0-9]'])) {
      }
      if ($this.match_949ua1_k$(['e', '[0-9]']) ? true : $this.match_949ua1_k$(['e', '[+\\-]', '[0-9]'])) {
        while ($this.match_949ua1_k$(['[0-9]'])) {
        }
      }
      tmp_1 = $this.chars_1.emit_nf85qv_k$(RhovasTokenType_DECIMAL_getInstance(), Companion_getInstance_0().parseString_osqjrx_k$($this.chars_1.literal_30mrhr_k$()));
    } else {
      var tmp_2 = RhovasTokenType_INTEGER_getInstance();
      var tmp_3 = Companion_getInstance();
      var tmp_4 = $this.chars_1.literal_30mrhr_k$();
      tmp_1 = $this.chars_1.emit_nf85qv_k$(tmp_2, tmp_3.parseString$default_thoqxr_k$(tmp_4, 0, 2, null));
    }
    return tmp_1;
  }
  function lexOperator_0($this) {
    var tmp = $this.chars_1.get_8san2r_k$(0);
    $this.require_9xm5ng_k$(!((tmp == null ? null : new Char(tmp)) == null));
    $this.chars_1.advance_2wh99t_k$();
    var tmp_0 = RhovasTokenType_OPERATOR_getInstance();
    return $this.chars_1.emit$default_kfkhdo_k$(tmp_0, null, 2, null);
  }
  function lexStringMode($this) {
    var tmp;
    var tmp_0 = $this.chars_1.get_8san2r_k$(0);
    if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
      tmp = null;
    } else {
      if ($this.match_949ua1_k$(['["\n\r]']) ? true : $this.match_949ua1_k$([new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(123))])) {
        var tmp_1 = RhovasTokenType_OPERATOR_getInstance();
        tmp = $this.chars_1.emit$default_kfkhdo_k$(tmp_1, null, 2, null);
      } else {
        var builder = StringBuilder_init_$Create$();
        while (!$this.peek_t7gyox_k$([new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(123))]) ? $this.match_949ua1_k$(['[^"\n\r]']) : false) {
          var tmp_2 = $this.chars_1.get_8san2r_k$(-1);
          if (equals(tmp_2 == null ? null : new Char(tmp_2), new Char(_Char___init__impl__6a9atx(92)))) {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            var tmp0_let = $this.chars_1.get_range_ixu978_k$();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasLexer.lexStringMode.<anonymous>' call
            var tmp_3 = (tmp0_let.index_1 + tmp0_let.length_1 | 0) - 1 | 0;
            tmp$ret$0 = tmp0_let.copy$default_ccxy8g_k$(tmp_3, 0, (tmp0_let.column_1 + tmp0_let.length_1 | 0) - 1 | 0, 1, 2, null);
            tmp$ret$1 = tmp$ret$0;
            var start = tmp$ret$1;
            var tmp_4 = $this.match_949ua1_k$(['[nrtu"$\\\\]']);
            $this.require_3pbn9x_k$(tmp_4, RhovasLexer$lexStringMode$lambda($this, start));
            var tmp_5 = $this.chars_1.get_8san2r_k$(-1);
            var tmp0_subject = ensureNotNull(tmp_5 == null ? null : new Char(tmp_5)).value_1;
            var tmp_6;
            if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(110)))) {
              tmp_6 = _Char___init__impl__6a9atx(10);
            } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(114)))) {
              tmp_6 = _Char___init__impl__6a9atx(13);
            } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(116)))) {
              tmp_6 = _Char___init__impl__6a9atx(9);
            } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(117)))) {
              var tmp$ret$6;
              // Inline function 'kotlin.Char' call
              var tmp$ret$3;
              // Inline function 'kotlin.collections.fold' call
              var tmp1_fold = numberRangeToNumber(1, 4);
              var accumulator = 0;
              var inductionVariable = tmp1_fold.first_1;
              var last = tmp1_fold.last_1;
              if (inductionVariable <= last)
                do {
                  var element = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var tmp$ret$2;
                  // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasLexer.lexStringMode.<anonymous>' call
                  var tmp2__anonymous__z9zvc9 = accumulator;
                  var tmp_7 = $this.match_949ua1_k$(['[0-9A-F]']);
                  $this.require_3pbn9x_k$(tmp_7, RhovasLexer$lexStringMode$lambda_0($this, start, element));
                  var tmp_8 = imul(16, tmp2__anonymous__z9zvc9);
                  var tmp_9 = $this.chars_1.get_8san2r_k$(-1);
                  tmp$ret$2 = tmp_8 + digitToInt(ensureNotNull(tmp_9 == null ? null : new Char(tmp_9)).value_1, 16) | 0;
                  accumulator = tmp$ret$2;
                }
                 while (!(element === last));
              tmp$ret$3 = accumulator;
              var tmp3_Char = tmp$ret$3;
              var tmp_10;
              var tmp$ret$4;
              // Inline function 'kotlin.code' call
              Companion_getInstance_1();
              var tmp0__get_code__88qj9g = _Char___init__impl__6a9atx(0);
              tmp$ret$4 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
              if (tmp3_Char < tmp$ret$4) {
                tmp_10 = true;
              } else {
                var tmp$ret$5;
                // Inline function 'kotlin.code' call
                Companion_getInstance_1();
                var tmp1__get_code__adl84j = _Char___init__impl__6a9atx(65535);
                tmp$ret$5 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
                tmp_10 = tmp3_Char > tmp$ret$5;
              }
              if (tmp_10) {
                throw IllegalArgumentException_init_$Create$('Invalid Char code: ' + tmp3_Char);
              }
              tmp$ret$6 = numberToChar(tmp3_Char);
              tmp_6 = tmp$ret$6;
            } else {
              var tmp_11 = $this.chars_1.get_8san2r_k$(-1);
              tmp_6 = ensureNotNull(tmp_11 == null ? null : new Char(tmp_11)).value_1;
            }
            builder.append_t8oh9e_k$(tmp_6);
          } else {
            var tmp_12 = $this.chars_1.get_8san2r_k$(-1);
            builder.append_t8oh9e_k$(ensureNotNull(tmp_12 == null ? null : new Char(tmp_12)).value_1);
          }
        }
        tmp = $this.chars_1.emit_nf85qv_k$(RhovasTokenType_STRING_getInstance(), builder.toString());
      }
    }
    return tmp;
  }
  function lexNumber$lexBase(this$0, base, digits) {
    while (this$0.match_949ua1_k$([digits])) {
    }
    var tmp = RhovasTokenType_INTEGER_getInstance();
    var tmp_0 = Companion_getInstance();
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this$0.chars_1.literal_30mrhr_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(2);
    return this$0.chars_1.emit_nf85qv_k$(tmp, tmp_0.parseString_d68ls2_k$(tmp$ret$1, base));
  }
  function RhovasLexer$lexStringMode$lambda(this$0, $start) {
    return function () {
      var tmp;
      var tmp_0 = this$0.chars_1.get_8san2r_k$(0);
      if (!((tmp_0 == null ? null : new Char(tmp_0)) == null)) {
        tmp = 2;
      } else {
        tmp = 1;
      }
      return this$0.error_5d2tv3_k$('Invalid character escape.', 'A character escape is in the form \\char, where char is one of [nrtu\'"\\]. If a literal backslash is desired, use an escape as in "abc\\\\123".', $start.copy$default_ccxy8g_k$(0, 0, 0, tmp, 7, null));
    };
  }
  function RhovasLexer$lexStringMode$lambda_0(this$0, $start, $element) {
    return function () {
      var tmp;
      var tmp_0 = this$0.chars_1.get_8san2r_k$(0);
      if (!((tmp_0 == null ? null : new Char(tmp_0)) == null)) {
        tmp = 2;
      } else {
        tmp = 1;
      }
      return this$0.error_5d2tv3_k$('Invalid unicode escape.', 'A unicode escape is in the form \\uXXXX, where X is a hexadecimal digit (one of [0-9A-F]). If a literal backslash is desired, use an escape as in "abc\\\\123".', $start.copy$default_ccxy8g_k$(0, 0, 0, $element + tmp | 0, 7, null));
    };
  }
  function RhovasLexer(input) {
    Lexer.call(this, input);
  }
  RhovasLexer.prototype.lexToken_ykb8py_k$ = function () {
    if (this.mode_1 === 'string') {
      return lexStringMode(this);
    }
    while (this.match_949ua1_k$(['/', '/']) ? true : this.match_949ua1_k$(['[ \t\n\r]'])) {
      var tmp0_subject = this.chars_1.get_8san2r_k$(-1);
      var tmp = tmp0_subject;
      if (equals(tmp == null ? null : new Char(tmp), new Char(_Char___init__impl__6a9atx(47))))
        while (this.match_949ua1_k$(['[^\n\r]'])) {
        }
       else {
        var tmp_0;
        var tmp_1 = tmp0_subject;
        if (equals(tmp_1 == null ? null : new Char(tmp_1), new Char(_Char___init__impl__6a9atx(10)))) {
          tmp_0 = true;
        } else {
          var tmp_2 = tmp0_subject;
          tmp_0 = equals(tmp_2 == null ? null : new Char(tmp_2), new Char(_Char___init__impl__6a9atx(13)));
        }
        if (tmp_0) {
          var tmp_3;
          var tmp_4 = this.chars_1.get_8san2r_k$(-1);
          if (equals(tmp_4 == null ? null : new Char(tmp_4), new Char(_Char___init__impl__6a9atx(10)))) {
            tmp_3 = _Char___init__impl__6a9atx(13);
          } else {
            tmp_3 = _Char___init__impl__6a9atx(10);
          }
          this.match_949ua1_k$([new Char(tmp_3)]);
          this.chars_1.newline_gne6yl_k$();
        }
      }
    }
    this.chars_1.consume_spbz2t_k$();
    var tmp_5;
    var tmp_6 = this.chars_1.get_8san2r_k$(0);
    if ((tmp_6 == null ? null : new Char(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      if (this.peek_t7gyox_k$(['[A-Za-z_]'])) {
        tmp_5 = lexIdentifier(this);
      } else {
        if (this.peek_t7gyox_k$(['[0-9]'])) {
          tmp_5 = lexNumber(this);
        } else {
          tmp_5 = lexOperator_0(this);
        }
      }
    }
    return tmp_5;
  };
  RhovasLexer.$metadata$ = classMeta('RhovasLexer', undefined, undefined, undefined, undefined, Lexer.prototype);
  function parseSource_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var imports = tmp$ret$0;
    while ($this.peek_t7gyox_k$(['import'])) {
      imports.add_1j60pz_k$(parseImport($this));
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    var statements = tmp$ret$1;
    while (!($this.tokens_1.get_fkrdnv_k$(0) == null)) {
      statements.add_1j60pz_k$(parseStatement($this));
    }
    var tmp$ret$5;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Source_1(imports, statements);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseSource.<anonymous>' call
    var tmp = tmp0_also;
    var tmp_0;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$2 = !imports.isEmpty_y1axqb_k$();
    if (tmp$ret$2) {
      tmp_0 = listOf_0([first(imports.get_fkrdnv_k$(0).context_1), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$3 = !statements.isEmpty_y1axqb_k$();
      if (tmp$ret$3) {
        tmp_0 = listOf_0([first(statements.get_fkrdnv_k$(0).context_1), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      } else {
        var tmp$ret$4;
        // Inline function 'kotlin.collections.listOf' call
        tmp$ret$4 = emptyList();
        tmp_0 = tmp$ret$4;
      }
    }
    tmp.context_1 = tmp_0;
    tmp$ret$5 = tmp0_also;
    return tmp$ret$5;
  }
  function parseImport($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['import']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var path = tmp$ret$0;
    do {
      path.add_1j60pz_k$(parseIdentifier($this, RhovasParser$parseImport$lambda));
    }
     while ($this.match_949ua1_k$(['.']));
    var tmp;
    if ($this.match_949ua1_k$(['as'])) {
      tmp = parseIdentifier($this, RhovasParser$parseImport$lambda_0);
    } else {
      tmp = null;
    }
    var alias = tmp;
    requireSemicolon($this, RhovasParser$parseImport$lambda_1);
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Import_0(path, alias);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseImport.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  }
  function parseComponent($this) {
    var tmp;
    if ($this.peek_t7gyox_k$(['struct'])) {
      tmp = parseStruct($this);
    } else {
      throw AssertionError_init_$Create$();
    }
    return tmp;
  }
  function parseStruct($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['struct']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var name = parseIdentifier($this, RhovasParser$parseStruct$lambda);
    var tmp = $this.match_949ua1_k$(['{']);
    $this.require_3pbn9x_k$(tmp, RhovasParser$parseStruct$lambda_0($this));
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var fields = tmp$ret$0;
    while (!$this.match_949ua1_k$(['}'])) {
      var tmp_0 = $this.peek_t7gyox_k$([listOf_0(['val', 'var'])]);
      $this.require_3pbn9x_k$(tmp_0, RhovasParser$parseStruct$lambda_1($this));
      fields.add_1j60pz_k$(parseDeclarationStatement($this));
    }
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Struct_0(name, fields);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseStruct.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  }
  function parseStatement($this) {
    var tmp;
    if ($this.peek_t7gyox_k$(['{'])) {
      tmp = parseBlockStatement($this);
    } else if ($this.peek_t7gyox_k$(['func'])) {
      tmp = parseFunctionStatement($this);
    } else if ($this.peek_t7gyox_k$([listOf_0(['val', 'var'])])) {
      tmp = parseDeclarationStatement($this);
    } else if ($this.peek_t7gyox_k$(['if'])) {
      tmp = parseIfStatement($this);
    } else if ($this.peek_t7gyox_k$(['match'])) {
      tmp = parseMatchStatement($this);
    } else if ($this.peek_t7gyox_k$(['for'])) {
      tmp = parseForStatement($this);
    } else if ($this.peek_t7gyox_k$(['while'])) {
      tmp = parseWhileStatement($this);
    } else if ($this.peek_t7gyox_k$(['try'])) {
      tmp = parseTryStatement($this);
    } else if ($this.peek_t7gyox_k$(['with'])) {
      tmp = parseWithStatement($this);
    } else if ($this.peek_t7gyox_k$(['break'])) {
      tmp = parseBreakStatement($this);
    } else if ($this.peek_t7gyox_k$(['continue'])) {
      tmp = parseContinueStatement($this);
    } else if ($this.peek_t7gyox_k$(['return'])) {
      tmp = parseReturnStatement($this);
    } else if ($this.peek_t7gyox_k$(['throw'])) {
      tmp = parseThrowStatement($this);
    } else if ($this.peek_t7gyox_k$(['assert'])) {
      tmp = parseAssertStatement($this);
    } else if ($this.peek_t7gyox_k$(['require'])) {
      tmp = parseRequireStatement($this);
    } else if ($this.peek_t7gyox_k$(['ensure'])) {
      tmp = parseEnsureStatement($this);
    } else if ($this.peek_t7gyox_k$([RhovasTokenType_IDENTIFIER_getInstance(), ':'])) {
      tmp = parseLabelStatement($this);
    } else if ($this.peek_t7gyox_k$([listOf('struct')])) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Component_1(parseComponent($this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseStatement.<anonymous>' call
      tmp0_also.context_1 = tmp0_also.component_1.context_1;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      var expression = parseExpression($this);
      var tmp_0;
      if ($this.match_949ua1_k$(['='])) {
        var value = parseExpression($this);
        requireSemicolon($this, RhovasParser$parseStatement$lambda);
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = new Assignment_0(expression, value);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseStatement.<anonymous>' call
        tmp1_also.context_1 = listOf_0([first(expression.context_1), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        requireSemicolon($this, RhovasParser$parseStatement$lambda_0);
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        var tmp2_also = new Expression_1(expression);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseStatement.<anonymous>' call
        tmp2_also.context_1 = listOf_0([first(expression.context_1), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
        tmp$ret$2 = tmp2_also;
        tmp_0 = tmp$ret$2;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function parseBlockStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['{']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var statements = tmp$ret$0;
    while (!$this.match_949ua1_k$(['}'])) {
      statements.add_1j60pz_k$(parseStatement($this));
    }
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Block_0(statements);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseBlockStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  }
  function parseFunctionStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['func']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var name = parseIdentifier($this, RhovasParser$parseFunctionStatement$lambda);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var generics = tmp$ret$0;
    if ($this.match_949ua1_k$(['<'])) {
      do {
        var name_0 = parseIdentifier($this, RhovasParser$parseFunctionStatement$lambda_0);
        $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
        var type = $this.match_949ua1_k$([':']) ? parseType($this) : null;
        generics.add_1j60pz_k$(new Pair(name_0, type));
        var tmp = $this.peek_t7gyox_k$(['>']) ? true : $this.match_949ua1_k$([',']);
        $this.require_3pbn9x_k$(tmp, RhovasParser$parseFunctionStatement$lambda_1($this));
        $this.context_1.removeLast_i5wx8a_k$();
      }
       while (!$this.match_949ua1_k$(['>']));
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    var parameters = tmp$ret$1;
    var tmp_0 = $this.match_949ua1_k$(['(']);
    $this.require_3pbn9x_k$(tmp_0, RhovasParser$parseFunctionStatement$lambda_2($this));
    while (!$this.match_949ua1_k$([')'])) {
      var name_1 = parseIdentifier($this, RhovasParser$parseFunctionStatement$lambda_3);
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var type_0 = $this.match_949ua1_k$([':']) ? parseType($this) : null;
      parameters.add_1j60pz_k$(new Pair(name_1, type_0));
      var tmp_1 = $this.peek_t7gyox_k$([')']) ? true : $this.match_949ua1_k$([',']);
      $this.require_3pbn9x_k$(tmp_1, RhovasParser$parseFunctionStatement$lambda_4($this));
      $this.context_1.removeLast_i5wx8a_k$();
    }
    var returns = $this.match_949ua1_k$([':']) ? parseType($this) : null;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    var throws = tmp$ret$2;
    if ($this.match_949ua1_k$(['throws'])) {
      do {
        throws.add_1j60pz_k$(parseType($this));
      }
       while ($this.match_949ua1_k$([',']));
    }
    var body = parseStatement($this);
    var tmp$ret$3;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Function_2(name, generics, parameters, returns, throws, body);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseFunctionStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$3 = tmp0_also;
    return tmp$ret$3;
  }
  function parseDeclarationStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$([listOf_0(['val', 'var'])]));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var mutable = ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1 === 'var';
    var name = parseIdentifier($this, RhovasParser$parseDeclarationStatement$lambda);
    var type = $this.match_949ua1_k$([':']) ? parseType($this) : null;
    var value = $this.match_949ua1_k$(['=']) ? parseExpression($this) : null;
    requireSemicolon($this, RhovasParser$parseDeclarationStatement$lambda_0);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Declaration_5(mutable, name, type, value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseDeclarationStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseIfStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['if']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var tmp = $this.match_949ua1_k$(['(']);
    $this.require_3pbn9x_k$(tmp, RhovasParser$parseIfStatement$lambda($this));
    var condition = parseExpression($this);
    var tmp_0 = $this.match_949ua1_k$([')']);
    $this.require_3pbn9x_k$(tmp_0, RhovasParser$parseIfStatement$lambda_0($this));
    var thenStatement = parseStatement($this);
    var tmp_1;
    if ($this.match_949ua1_k$(['else'])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var elseStatement = parseStatement($this);
      $this.context_1.removeLast_i5wx8a_k$();
      tmp_1 = elseStatement;
    } else {
      tmp_1 = null;
    }
    var elseStatement_0 = tmp_1;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new If_0(condition, thenStatement, elseStatement_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseIfStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseMatchStatement($this) {
    $this.require_9xm5ng_k$($this.peek_t7gyox_k$(['match']));
    var tmp;
    if ($this.peek_t7gyox_k$(['match', '{'])) {
      tmp = parseConditionalMatch($this);
    } else if ($this.peek_t7gyox_k$(['match', '('])) {
      tmp = parseStructuralMatch($this);
    } else {
      throw $this.error$default_8prrdd_k$('Expected opening brace or parenthesis.', 'A match statement must be followed by an opening brace `{` (conditional match) or an opening parenthesis `(` (structural match), as in `match { condition: ... }` or `match (argument) { pattern: ... }`.', null, 4, null);
    }
    return tmp;
  }
  function parseConditionalMatch($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['match', '{']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-2)).range_1);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var cases = tmp$ret$0;
    var elseCase = null;
    while (!$this.match_949ua1_k$(['}'])) {
      if ($this.match_949ua1_k$(['else'])) {
        $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
        var condition = !$this.peek_t7gyox_k$([':']) ? parseExpression($this) : null;
        var tmp = $this.match_949ua1_k$([':']);
        $this.require_3pbn9x_k$(tmp, RhovasParser$parseConditionalMatch$lambda($this));
        var statement = parseStatement($this);
        elseCase = new Pair(condition, statement);
        var tmp_0 = $this.peek_t7gyox_k$(['}']);
        $this.require_3pbn9x_k$(tmp_0, RhovasParser$parseConditionalMatch$lambda_0($this));
        $this.context_1.removeLast_i5wx8a_k$();
      } else {
        var tmp0_elvis_lhs = $this.tokens_1.get_fkrdnv_k$(0);
        $this.context_1.addLast_i401o4_k$((tmp0_elvis_lhs == null ? ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)) : tmp0_elvis_lhs).range_1);
        var condition_0 = parseExpression($this);
        var tmp_1 = $this.match_949ua1_k$([':']);
        $this.require_3pbn9x_k$(tmp_1, RhovasParser$parseConditionalMatch$lambda_1($this));
        var statement_0 = parseStatement($this);
        cases.add_1j60pz_k$(new Pair(condition_0, statement_0));
        $this.context_1.removeLast_i5wx8a_k$();
      }
    }
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Conditional_0(cases, elseCase);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseConditionalMatch.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  }
  function parseStructuralMatch($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['match', '(']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-2)).range_1);
    var argument = parseExpression($this);
    var tmp = $this.match_949ua1_k$([')']);
    $this.require_3pbn9x_k$(tmp, RhovasParser$parseStructuralMatch$lambda($this));
    var tmp_0 = $this.match_949ua1_k$(['{']);
    $this.require_3pbn9x_k$(tmp_0, RhovasParser$parseStructuralMatch$lambda_0($this));
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var cases = tmp$ret$0;
    var elseCase = null;
    while (!$this.match_949ua1_k$(['}'])) {
      if ($this.match_949ua1_k$(['else'])) {
        $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
        var pattern = !$this.peek_t7gyox_k$([':']) ? parsePattern($this) : null;
        var tmp_1 = $this.match_949ua1_k$([':']);
        $this.require_3pbn9x_k$(tmp_1, RhovasParser$parseStructuralMatch$lambda_1($this));
        var statement = parseStatement($this);
        elseCase = new Pair(pattern, statement);
        var tmp_2 = $this.peek_t7gyox_k$(['}']);
        $this.require_3pbn9x_k$(tmp_2, RhovasParser$parseStructuralMatch$lambda_2($this));
        $this.context_1.removeLast_i5wx8a_k$();
      } else {
        var tmp0_elvis_lhs = $this.tokens_1.get_fkrdnv_k$(0);
        $this.context_1.addLast_i401o4_k$(ensureNotNull(tmp0_elvis_lhs == null ? $this.tokens_1.get_fkrdnv_k$(-1) : tmp0_elvis_lhs).range_1);
        var condition = parsePattern($this);
        var tmp_3 = $this.match_949ua1_k$([':']);
        $this.require_3pbn9x_k$(tmp_3, RhovasParser$parseStructuralMatch$lambda_3($this));
        var statement_0 = parseStatement($this);
        cases.add_1j60pz_k$(new Pair(condition, statement_0));
        $this.context_1.removeLast_i5wx8a_k$();
      }
    }
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Structural_0(argument, cases, elseCase);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseStructuralMatch.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  }
  function parseForStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['for']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var tmp = $this.match_949ua1_k$(['(']);
    $this.require_3pbn9x_k$(tmp, RhovasParser$parseForStatement$lambda($this));
    var tmp_0 = $this.match_949ua1_k$(['val']);
    $this.require_3pbn9x_k$(tmp_0, RhovasParser$parseForStatement$lambda_0($this));
    var name = parseIdentifier($this, RhovasParser$parseForStatement$lambda_1);
    var tmp_1 = $this.match_949ua1_k$(['in']);
    $this.require_3pbn9x_k$(tmp_1, RhovasParser$parseForStatement$lambda_2($this));
    var iterable = parseExpression($this);
    var tmp_2 = $this.match_949ua1_k$([')']);
    $this.require_3pbn9x_k$(tmp_2, RhovasParser$parseForStatement$lambda_3($this));
    var body = parseStatement($this);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new For_0(name, iterable, body);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseForStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseWhileStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['while']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var tmp = $this.match_949ua1_k$(['(']);
    $this.require_3pbn9x_k$(tmp, RhovasParser$parseWhileStatement$lambda($this));
    var condition = parseExpression($this);
    var tmp_0 = $this.match_949ua1_k$([')']);
    $this.require_3pbn9x_k$(tmp_0, RhovasParser$parseWhileStatement$lambda_0($this));
    var body = parseStatement($this);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new While_0(condition, body);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseWhileStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseTryStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['try']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var body = parseStatement($this);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var catches = tmp$ret$0;
    while ($this.match_949ua1_k$(['catch'])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var tmp = $this.match_949ua1_k$(['(']);
      $this.require_3pbn9x_k$(tmp, RhovasParser$parseTryStatement$lambda($this));
      var tmp_0 = $this.match_949ua1_k$(['val']);
      $this.require_3pbn9x_k$(tmp_0, RhovasParser$parseTryStatement$lambda_0($this));
      var name = parseIdentifier($this, RhovasParser$parseTryStatement$lambda_1);
      var tmp_1 = $this.match_949ua1_k$([':']);
      $this.require_3pbn9x_k$(tmp_1, RhovasParser$parseTryStatement$lambda_2($this));
      var type = parseType($this);
      var tmp_2 = $this.match_949ua1_k$([')']);
      $this.require_3pbn9x_k$(tmp_2, RhovasParser$parseTryStatement$lambda_3($this));
      var body_0 = parseStatement($this);
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Catch_0(name, type, body_0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseTryStatement.<anonymous>' call
      tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$1 = tmp0_also;
      catches.add_1j60pz_k$(tmp$ret$1);
    }
    var tmp_3;
    if ($this.match_949ua1_k$(['finally'])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var finallyStatement = parseStatement($this);
      $this.context_1.removeLast_i5wx8a_k$();
      tmp_3 = finallyStatement;
    } else {
      tmp_3 = null;
    }
    var finallyStatement_0 = tmp_3;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp1_also = new Try_0(body, catches, finallyStatement_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseTryStatement.<anonymous>' call
    tmp1_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$2 = tmp1_also;
    return tmp$ret$2;
  }
  function parseWithStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['with']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var tmp = $this.match_949ua1_k$(['(']);
    $this.require_3pbn9x_k$(tmp, RhovasParser$parseWithStatement$lambda($this));
    var tmp_0;
    if ($this.match_949ua1_k$(['val'])) {
      var name = parseIdentifier($this, RhovasParser$parseWithStatement$lambda_0);
      var tmp_1 = $this.match_949ua1_k$(['=']);
      $this.require_3pbn9x_k$(tmp_1, RhovasParser$parseWithStatement$lambda_1($this));
      tmp_0 = name;
    } else {
      tmp_0 = null;
    }
    var name_0 = tmp_0;
    var argument = parseExpression($this);
    var tmp_2 = $this.match_949ua1_k$([')']);
    $this.require_3pbn9x_k$(tmp_2, RhovasParser$parseWithStatement$lambda_2($this));
    var body = parseStatement($this);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new With_0(name_0, argument, body);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseWithStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseLabelStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$([RhovasTokenType_IDENTIFIER_getInstance(), ':']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-2)).range_1);
    var label = ensureNotNull($this.tokens_1.get_fkrdnv_k$(-2)).literal_1;
    var statement = parseStatement($this);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Label_0(label, statement);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseLabelStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseBreakStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['break']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var label = $this.match_949ua1_k$([RhovasTokenType_IDENTIFIER_getInstance()]) ? ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1 : null;
    requireSemicolon($this, RhovasParser$parseBreakStatement$lambda);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Break_1(label);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseBreakStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseContinueStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['continue']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var label = $this.match_949ua1_k$([RhovasTokenType_IDENTIFIER_getInstance()]) ? ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1 : null;
    requireSemicolon($this, RhovasParser$parseContinueStatement$lambda);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Continue_1(label);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseContinueStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseReturnStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['return']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var value = !$this.peek_t7gyox_k$([';']) ? parseExpression($this) : null;
    requireSemicolon($this, RhovasParser$parseReturnStatement$lambda);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Return_1(value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseReturnStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseThrowStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['throw']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var exception = parseExpression($this);
    requireSemicolon($this, RhovasParser$parseThrowStatement$lambda);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Throw_1(exception);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseThrowStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseAssertStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['assert']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var condition = parseExpression($this);
    var message = $this.match_949ua1_k$([':']) ? parseExpression($this) : null;
    requireSemicolon($this, RhovasParser$parseAssertStatement$lambda);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Assert_0(condition, message);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseAssertStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseRequireStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['require']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var condition = parseExpression($this);
    var message = $this.match_949ua1_k$([':']) ? parseExpression($this) : null;
    requireSemicolon($this, RhovasParser$parseRequireStatement$lambda);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Require_0(condition, message);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseRequireStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseEnsureStatement($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['ensure']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var condition = parseExpression($this);
    var message = $this.match_949ua1_k$([':']) ? parseExpression($this) : null;
    requireSemicolon($this, RhovasParser$parseEnsureStatement$lambda);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Ensure_0(condition, message);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseEnsureStatement.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function parseExpression($this) {
    return parseLogicalOrExpression($this);
  }
  function parseLogicalOrExpression($this) {
    return parseBinaryExpression($this, RhovasParser$parseLogicalAndExpression$ref($this), ['||']);
  }
  function parseLogicalAndExpression($this) {
    return parseBinaryExpression($this, RhovasParser$parseEqualityExpression$ref($this), ['&&']);
  }
  function parseEqualityExpression($this) {
    return parseBinaryExpression($this, RhovasParser$parseComparisonExpression$ref($this), ['==', '!=', '===', '!==']);
  }
  function parseComparisonExpression($this) {
    return parseBinaryExpression($this, RhovasParser$parseAdditiveExpression$ref($this), ['<', '>', '<=', '>=']);
  }
  function parseAdditiveExpression($this) {
    return parseBinaryExpression($this, RhovasParser$parseMultiplicativeExpression$ref($this), ['+', '-']);
  }
  function parseMultiplicativeExpression($this) {
    return parseBinaryExpression($this, RhovasParser$parseUnaryExpression$ref($this), ['*', '/']);
  }
  function parseBinaryExpression($this, parser, operators) {
    var expression = parser();
    $this.context_1.addLast_i401o4_k$(first(expression.context_1));
    $l$loop: while (true) {
      $this.context_1.addLast_i401o4_k$(first(expression.context_1));
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.lastOrNull' call
        var inductionVariable = operators.length - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var element = operators[index];
            var tmp$ret$4;
            // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseBinaryExpression.<anonymous>' call
            var tmp$ret$3;
            // Inline function 'kotlin.collections.toTypedArray' call
            var tmp$ret$2;
            // Inline function 'kotlin.collections.map' call
            var tmp0_map = toCharArray(element);
            var tmp$ret$1;
            // Inline function 'kotlin.collections.mapTo' call
            var tmp0_mapTo = ArrayList_init_$Create$_0(tmp0_map.length);
            var indexedObject = tmp0_map;
            var inductionVariable_0 = 0;
            var last_0 = indexedObject.length;
            while (inductionVariable_0 < last_0) {
              var item = indexedObject[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var tmp$ret$0;
              // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseBinaryExpression.<anonymous>.<anonymous>' call
              tmp$ret$0 = toString_2(item);
              tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
            }
            tmp$ret$1 = tmp0_mapTo;
            tmp$ret$2 = tmp$ret$1;
            var tmp1_toTypedArray = tmp$ret$2;
            tmp$ret$3 = copyToArray(tmp1_toTypedArray);
            tmp$ret$4 = $this.match_949ua1_k$(tmp$ret$3.slice());
            if (tmp$ret$4) {
              tmp$ret$5 = element;
              break $l$block;
            }
          }
           while (0 <= inductionVariable);
        tmp$ret$5 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$5;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var operator = tmp;
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var right = parser();
      var tmp$ret$6;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Binary_0(operator, expression, right);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseBinaryExpression.<anonymous>' call
      tmp0_also.context_1 = listOf_0([$this.context_1.get_fkrdnv_k$($this.context_1.size_1 - 3 | 0), last(right.context_1)]);
      tmp$ret$6 = tmp0_also;
      expression = tmp$ret$6;
      $this.context_1.removeLast_i5wx8a_k$();
      $this.context_1.removeLast_i5wx8a_k$();
    }
    $this.context_1.removeLast_i5wx8a_k$();
    $this.context_1.removeLast_i5wx8a_k$();
    return expression;
  }
  function parseUnaryExpression($this) {
    var tmp;
    if ($this.match_949ua1_k$([listOf_0(['-', '!'])])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var operator = ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1;
      var expression = parseUnaryExpression($this);
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Unary_0(operator, expression);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseUnaryExpression.<anonymous>' call
      tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = parseSecondaryExpression($this);
    }
    return tmp;
  }
  function parseSecondaryExpression($this) {
    var expression = parsePrimaryExpression($this);
    $this.context_1.addLast_i401o4_k$(first(expression.context_1));
    $l$loop: while (true) {
      $this.context_1.addLast_i401o4_k$(first(expression.context_1));
      var tmp;
      if ($this.peek_t7gyox_k$(['.']) ? true : $this.peek_t7gyox_k$(['?', '.'])) {
        var coalesce = $this.match_949ua1_k$(['?']);
        $this.require_9xm5ng_k$($this.match_949ua1_k$(['.']));
        var cascade = $this.match_949ua1_k$(['.']);
        var tmp_0;
        if ($this.match_949ua1_k$(['|'])) {
          var tmp_1;
          var tmp_2;
          if ($this.peek_t7gyox_k$([RhovasTokenType_IDENTIFIER_getInstance()]) ? isUpperCase(charSequenceGet(ensureNotNull($this.tokens_1.get_fkrdnv_k$(0)).literal_1, 0)) : false) {
            var tmp0_safe_receiver = $this.tokens_1.get_fkrdnv_k$(1);
            tmp_2 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.literal_1) === '.';
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            var qualifier = parseType($this);
            $this.context_1.addLast_i401o4_k$(first(qualifier.context_1));
            var tmp_3 = $this.match_949ua1_k$(['.']);
            $this.require_3pbn9x_k$(tmp_3, RhovasParser$parseSecondaryExpression$lambda($this));
            tmp_1 = qualifier;
          } else {
            tmp_1 = null;
          }
          var qualifier_0 = tmp_1;
          var name = parseIdentifier($this, RhovasParser$parseSecondaryExpression$lambda_0);
          $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
          var tmp_4 = $this.peek_t7gyox_k$([listOf_0(['(', '|', '{'])]);
          $this.require_3pbn9x_k$(tmp_4, RhovasParser$parseSecondaryExpression$lambda_1($this));
          var arguments_0 = parseInvokeExpressionArguments($this);
          var tmp$ret$1;
          // Inline function 'kotlin.also' call
          var tmp0_also = new Pipeline_0(expression, coalesce, cascade, qualifier_0, name, arguments_0);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseSecondaryExpression.<anonymous>' call
          tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
          var tmp0_safe_receiver_0 = qualifier_0;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            var tmp$ret$0;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            $this.context_1.removeLast_i5wx8a_k$();
            tmp$ret$0 = Unit_getInstance();
          }
          tmp$ret$1 = tmp0_also;
          tmp_0 = tmp$ret$1;
        } else {
          var name_0 = parseIdentifier($this, RhovasParser$parseSecondaryExpression$lambda_2);
          $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
          var tmp_5;
          if ($this.peek_t7gyox_k$([listOf_0(['(', '|', '{'])])) {
            var arguments_1 = parseInvokeExpressionArguments($this);
            var tmp$ret$2;
            // Inline function 'kotlin.also' call
            var tmp1_also = new Method_1(expression, coalesce, cascade, name_0, arguments_1);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseSecondaryExpression.<anonymous>' call
            tmp1_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
            tmp$ret$2 = tmp1_also;
            tmp_5 = tmp$ret$2;
          } else {
            var tmp_6 = !cascade;
            $this.require_3pbn9x_k$(tmp_6, RhovasParser$parseSecondaryExpression$lambda_3($this));
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp2_also = new Property_2(expression, coalesce, name_0);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseSecondaryExpression.<anonymous>' call
            tmp2_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
            tmp$ret$3 = tmp2_also;
            tmp_5 = tmp$ret$3;
          }
          tmp_0 = tmp_5;
        }
        tmp = tmp_0;
      } else if ($this.match_949ua1_k$(['['])) {
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$4 = ArrayList_init_$Create$();
        var arguments_2 = tmp$ret$4;
        while (!$this.match_949ua1_k$([']'])) {
          arguments_2.add_1j60pz_k$(parseExpression($this));
          var tmp_7 = $this.peek_t7gyox_k$([']']) ? true : $this.match_949ua1_k$([',']);
          $this.require_3pbn9x_k$(tmp_7, RhovasParser$parseSecondaryExpression$lambda_4($this));
        }
        var tmp$ret$5;
        // Inline function 'kotlin.also' call
        var tmp3_also = new Index_1(expression, arguments_2);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseSecondaryExpression.<anonymous>' call
        tmp3_also.context_1 = listOf_0([$this.context_1.get_fkrdnv_k$($this.context_1.size_1 - 2 | 0), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
        tmp$ret$5 = tmp3_also;
        tmp = tmp$ret$5;
      } else {
        break $l$loop;
      }
      expression = tmp;
      $this.context_1.removeLast_i5wx8a_k$();
    }
    $this.context_1.removeLast_i5wx8a_k$();
    $this.context_1.removeLast_i5wx8a_k$();
    return expression;
  }
  function parsePrimaryExpression($this) {
    var tmp;
    if ($this.match_949ua1_k$(['null'])) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Scalar_0(null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePrimaryExpression.<anonymous>' call
      tmp0_also.context_1 = listOf(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else if ($this.match_949ua1_k$([listOf_0(['true', 'false'])])) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp1_also = new Scalar_0(toBooleanStrict(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePrimaryExpression.<anonymous>' call
      tmp1_also.context_1 = listOf(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      tmp$ret$1 = tmp1_also;
      tmp = tmp$ret$1;
    } else if ($this.match_949ua1_k$([listOf_0([RhovasTokenType_INTEGER_getInstance(), RhovasTokenType_DECIMAL_getInstance()])])) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp2_also = new Scalar_0(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).value_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePrimaryExpression.<anonymous>' call
      tmp2_also.context_1 = listOf(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      tmp$ret$2 = tmp2_also;
      tmp = tmp$ret$2;
    } else if ($this.match_949ua1_k$(['"'])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      $this.lexer_1.mode_1 = 'string';
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$3 = ArrayList_init_$Create$();
      var literals = tmp$ret$3;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$4 = ArrayList_init_$Create$();
      var arguments_0 = tmp$ret$4;
      if (!$this.peek_t7gyox_k$([RhovasTokenType_STRING_getInstance()])) {
        literals.add_1j60pz_k$('');
      }
      while (!$this.match_949ua1_k$(['"'])) {
        if ($this.match_949ua1_k$(['${'])) {
          $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
          $this.lexer_1.mode_1 = '';
          arguments_0.add_1j60pz_k$(parseExpression($this));
          var tmp_0 = $this.match_949ua1_k$(['}']);
          $this.require_3pbn9x_k$(tmp_0, RhovasParser$parsePrimaryExpression$lambda($this));
          $this.lexer_1.mode_1 = 'string';
          if (!$this.peek_t7gyox_k$([RhovasTokenType_STRING_getInstance()])) {
            literals.add_1j60pz_k$('');
          }
          $this.context_1.removeLast_i5wx8a_k$();
        } else {
          var tmp_1 = $this.match_949ua1_k$([RhovasTokenType_STRING_getInstance()]);
          $this.require_3pbn9x_k$(tmp_1, RhovasParser$parsePrimaryExpression$lambda_0($this));
          var tmp_2 = ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).value_1;
          literals.add_1j60pz_k$((!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : THROW_CCE());
        }
      }
      $this.lexer_1.mode_1 = '';
      var tmp$ret$5;
      // Inline function 'kotlin.also' call
      var tmp3_also = new String_1(literals, arguments_0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePrimaryExpression.<anonymous>' call
      tmp3_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$5 = tmp3_also;
      tmp = tmp$ret$5;
    } else if ($this.match_949ua1_k$([':', RhovasTokenType_IDENTIFIER_getInstance()])) {
      var tmp$ret$6;
      // Inline function 'kotlin.also' call
      var tmp4_also = new Scalar_0(new Atom(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePrimaryExpression.<anonymous>' call
      tmp4_also.context_1 = listOf_0([ensureNotNull($this.tokens_1.get_fkrdnv_k$(-2)).range_1, ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$6 = tmp4_also;
      tmp = tmp$ret$6;
    } else if ($this.match_949ua1_k$(['['])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var tmp$ret$7;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$7 = ArrayList_init_$Create$();
      var elements = tmp$ret$7;
      while (!$this.match_949ua1_k$([']'])) {
        elements.add_1j60pz_k$(parseExpression($this));
        $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
        var tmp_3 = $this.peek_t7gyox_k$([']']) ? true : $this.match_949ua1_k$([',']);
        $this.require_3pbn9x_k$(tmp_3, RhovasParser$parsePrimaryExpression$lambda_1($this));
        $this.context_1.removeLast_i5wx8a_k$();
      }
      var tmp$ret$8;
      // Inline function 'kotlin.also' call
      var tmp5_also = new List_1(elements);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePrimaryExpression.<anonymous>' call
      tmp5_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$8 = tmp5_also;
      tmp = tmp$ret$8;
    } else if ($this.match_949ua1_k$(['{'])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var tmp$ret$9;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$9 = LinkedHashMap_init_$Create$_0();
      var properties = tmp$ret$9;
      while (!$this.match_949ua1_k$(['}'])) {
        var key = parseIdentifier($this, RhovasParser$parsePrimaryExpression$lambda_2);
        $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
        // Inline function 'kotlin.collections.set' call
        var tmp_4;
        if ($this.match_949ua1_k$([':'])) {
          tmp_4 = parseExpression($this);
        } else {
          var tmp$ret$10;
          // Inline function 'kotlin.also' call
          var tmp6_also = new Variable_3(null, key);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePrimaryExpression.<anonymous>' call
          tmp6_also.context_1 = listOf(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
          tmp$ret$10 = tmp6_also;
          tmp_4 = tmp$ret$10;
        }
        var tmp7_set = tmp_4;
        properties.put_3mhbri_k$(key, tmp7_set);
        $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
        var tmp_5 = $this.peek_t7gyox_k$(['}']) ? true : $this.match_949ua1_k$([',']);
        $this.require_3pbn9x_k$(tmp_5, RhovasParser$parsePrimaryExpression$lambda_3($this));
        $this.context_1.removeLast_i5wx8a_k$();
        $this.context_1.removeLast_i5wx8a_k$();
      }
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp8_also = new Object_2(properties);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePrimaryExpression.<anonymous>' call
      tmp8_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$11 = tmp8_also;
      tmp = tmp$ret$11;
    } else if ($this.match_949ua1_k$(['('])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var expression = parseExpression($this);
      var tmp_6 = $this.match_949ua1_k$([')']);
      $this.require_3pbn9x_k$(tmp_6, RhovasParser$parsePrimaryExpression$lambda_4($this));
      var tmp$ret$12;
      // Inline function 'kotlin.also' call
      var tmp9_also = new Group_0(expression);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePrimaryExpression.<anonymous>' call
      tmp9_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$12 = tmp9_also;
      tmp = tmp$ret$12;
    } else if ($this.peek_t7gyox_k$([RhovasTokenType_IDENTIFIER_getInstance()])) {
      var tmp_7;
      var tmp_8;
      if (isUpperCase(charSequenceGet(ensureNotNull($this.tokens_1.get_fkrdnv_k$(0)).literal_1, 0))) {
        var tmp0_safe_receiver = $this.tokens_1.get_fkrdnv_k$(1);
        tmp_8 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.literal_1) === '.';
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        var qualifier = parseType($this);
        $this.context_1.addLast_i401o4_k$(first(qualifier.context_1));
        var tmp_9 = $this.match_949ua1_k$(['.']);
        $this.require_3pbn9x_k$(tmp_9, RhovasParser$parsePrimaryExpression$lambda_5($this));
        var tmp_10 = $this.peek_t7gyox_k$([RhovasTokenType_IDENTIFIER_getInstance()]);
        $this.require_3pbn9x_k$(tmp_10, RhovasParser$parsePrimaryExpression$lambda_6($this));
        tmp_7 = qualifier;
      } else {
        tmp_7 = null;
      }
      var qualifier_0 = tmp_7;
      $this.require_9xm5ng_k$($this.match_949ua1_k$([RhovasTokenType_IDENTIFIER_getInstance()]));
      var name = ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1;
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var tmp_11;
      if ($this.peek_t7gyox_k$([listOf_0(['(', '{'])]) ? true : $this.peek_t7gyox_k$(['|', RhovasTokenType_IDENTIFIER_getInstance()])) {
        var arguments_1 = parseInvokeExpressionArguments($this);
        var tmp$ret$14;
        // Inline function 'kotlin.also' call
        var tmp10_also = new Function_3(qualifier_0, name, arguments_1);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePrimaryExpression.<anonymous>' call
        tmp10_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
        var tmp0_safe_receiver_0 = qualifier_0;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          var tmp$ret$13;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          $this.context_1.removeLast_i5wx8a_k$();
          tmp$ret$13 = Unit_getInstance();
        }
        tmp$ret$14 = tmp10_also;
        tmp_11 = tmp$ret$14;
      } else {
        var tmp$ret$16;
        // Inline function 'kotlin.also' call
        var tmp11_also = new Variable_3(qualifier_0, name);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePrimaryExpression.<anonymous>' call
        tmp11_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
        var tmp0_safe_receiver_1 = qualifier_0;
        if (tmp0_safe_receiver_1 == null)
          null;
        else {
          var tmp$ret$15;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          $this.context_1.removeLast_i5wx8a_k$();
          tmp$ret$15 = Unit_getInstance();
        }
        tmp$ret$16 = tmp11_also;
        tmp_11 = tmp$ret$16;
      }
      tmp = tmp_11;
    } else if ($this.peek_t7gyox_k$(['#', RhovasTokenType_IDENTIFIER_getInstance()])) {
      tmp = parseMacroExpression($this);
    } else {
      throw $this.error$default_8prrdd_k$('Expected expression.', 'An expression must start with a literal (Null/Boolean/Integer/Decimal/String/Atom/List/Object), an opening parenthesis `(` for a group, an identifier for a variable/function, or a hashtag `#` followed by an identifier for a macro.', null, 4, null);
    }
    return tmp;
  }
  function parseInvokeExpressionArguments($this) {
    $this.require_9xm5ng_k$($this.peek_t7gyox_k$([listOf_0(['(', '|', '{'])]));
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var arguments_0 = tmp$ret$0;
    if ($this.match_949ua1_k$(['('])) {
      while (!$this.match_949ua1_k$([')'])) {
        arguments_0.add_1j60pz_k$(parseExpression($this));
        $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
        var tmp = $this.peek_t7gyox_k$([')']) ? true : $this.match_949ua1_k$([',']);
        $this.require_3pbn9x_k$(tmp, RhovasParser$parseInvokeExpressionArguments$lambda($this));
        $this.context_1.removeLast_i5wx8a_k$();
      }
    }
    if ($this.peek_t7gyox_k$(['|', RhovasTokenType_IDENTIFIER_getInstance()]) ? true : $this.peek_t7gyox_k$(['{'])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(0)).range_1);
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$1 = ArrayList_init_$Create$();
      var parameters = tmp$ret$1;
      if ($this.match_949ua1_k$(['|'])) {
        while (!$this.match_949ua1_k$(['|'])) {
          var name = parseIdentifier($this, RhovasParser$parseInvokeExpressionArguments$lambda_0);
          $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
          var type = $this.match_949ua1_k$([':']) ? parseType($this) : null;
          $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
          parameters.add_1j60pz_k$(new Pair(name, type));
          var tmp_0 = $this.peek_t7gyox_k$(['|']) ? true : $this.match_949ua1_k$([',']);
          $this.require_3pbn9x_k$(tmp_0, RhovasParser$parseInvokeExpressionArguments$lambda_1($this));
          $this.context_1.removeLast_i5wx8a_k$();
          $this.context_1.removeLast_i5wx8a_k$();
        }
      }
      var tmp_1 = $this.peek_t7gyox_k$(['{']);
      $this.require_3pbn9x_k$(tmp_1, RhovasParser$parseInvokeExpressionArguments$lambda_2($this));
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var body = parseStatement($this);
      $this.context_1.removeLast_i5wx8a_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Lambda_1(parameters, body);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseInvokeExpressionArguments.<anonymous>' call
      tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$2 = tmp0_also;
      arguments_0.add_1j60pz_k$(tmp$ret$2);
    }
    return arguments_0;
  }
  function parseMacroExpression($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['#', RhovasTokenType_IDENTIFIER_getInstance()]));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-2)).range_1);
    var name = ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1;
    var tmp = $this.peek_t7gyox_k$([listOf_0(['(', '{'])]);
    $this.require_3pbn9x_k$(tmp, RhovasParser$parseMacroExpression$lambda($this));
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var arguments_0 = tmp$ret$0;
    if ($this.match_949ua1_k$(['('])) {
      while (!$this.match_949ua1_k$([')'])) {
        var tmp0_elvis_lhs = $this.tokens_1.get_fkrdnv_k$(0);
        $this.context_1.addLast_i401o4_k$((tmp0_elvis_lhs == null ? ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)) : tmp0_elvis_lhs).range_1);
        arguments_0.add_1j60pz_k$(parseExpression($this));
        $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
        var tmp_0 = $this.peek_t7gyox_k$([')']) ? true : $this.match_949ua1_k$([',']);
        $this.require_3pbn9x_k$(tmp_0, RhovasParser$parseMacroExpression$lambda_0($this));
        $this.context_1.removeLast_i5wx8a_k$();
        $this.context_1.removeLast_i5wx8a_k$();
      }
    }
    var tmp_1;
    if ($this.match_949ua1_k$(['{'])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var parser = new DslParser($this.lexer_1.input_1);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = $this.lexer_1.get_state_iypx7s_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseMacroExpression.<anonymous>' call
      var tmp_2 = tmp0_let.first_1.index_1 - 1 | 0;
      tmp$ret$1 = new Pair(tmp0_let.first_1.copy$default_ccxy8g_k$(tmp_2, 0, tmp0_let.first_1.column_1 - 1 | 0, 0, 2, null), tmp0_let.second_1);
      tmp$ret$2 = tmp$ret$1;
      parser.lexer_1.set_state_r90g5g_k$(tmp$ret$2);
      var ast = parser.parse_4mmrzm_k$('source');
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      var tmp1_let = parser.lexer_1.get_state_iypx7s_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseMacroExpression.<anonymous>' call
      var tmp_3 = tmp1_let.first_1.index_1 - 1 | 0;
      tmp$ret$3 = new Pair(tmp1_let.first_1.copy$default_ccxy8g_k$(tmp_3, 0, tmp1_let.first_1.column_1 - 1 | 0, 0, 2, null), tmp1_let.second_1);
      tmp$ret$4 = tmp$ret$3;
      $this.lexer_1.set_state_r90g5g_k$(tmp$ret$4);
      $this.require_9xm5ng_k$($this.match_949ua1_k$(['}']));
      tmp_1 = ast;
    } else {
      tmp_1 = null;
    }
    var dsl = tmp_1;
    var tmp$ret$5;
    // Inline function 'kotlin.also' call
    var tmp2_also = new Macro(name, arguments_0, dsl);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseMacroExpression.<anonymous>' call
    tmp2_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$5 = tmp2_also;
    return tmp$ret$5;
  }
  function parsePattern($this) {
    var tmp;
    if (($this.peek_t7gyox_k$([listOf_0(['null', 'true', 'false', RhovasTokenType_INTEGER_getInstance(), RhovasTokenType_DECIMAL_getInstance()])]) ? true : $this.peek_t7gyox_k$(['"'])) ? true : $this.peek_t7gyox_k$([':', RhovasTokenType_IDENTIFIER_getInstance()])) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Value_0(parsePrimaryExpression($this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePattern.<anonymous>' call
      tmp0_also.context_1 = toMutableList(tmp0_also.value_1.context_1);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else if ($this.peek_t7gyox_k$([RhovasTokenType_IDENTIFIER_getInstance()])) {
      var tmp_0;
      if (isUpperCase(charSequenceGet(ensureNotNull($this.tokens_1.get_fkrdnv_k$(0)).literal_1, 0))) {
        $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(0)).range_1);
        var type = parseType($this);
        var pattern = $this.peek_t7gyox_k$([listOf_0([RhovasTokenType_IDENTIFIER_getInstance(), '[', '{', '$'])]) ? parsePattern($this) : null;
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = new TypedDestructure_0(type, pattern);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePattern.<anonymous>' call
        tmp1_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        $this.require_9xm5ng_k$($this.match_949ua1_k$([RhovasTokenType_IDENTIFIER_getInstance()]));
        var name = ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1;
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        var tmp2_also = new Variable_4(name);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePattern.<anonymous>' call
        tmp2_also.context_1 = listOf(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
        tmp$ret$2 = tmp2_also;
        tmp_0 = tmp$ret$2;
      }
      tmp = tmp_0;
    } else if ($this.match_949ua1_k$(['['])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$3 = ArrayList_init_$Create$();
      var patterns = tmp$ret$3;
      while (!$this.match_949ua1_k$([']'])) {
        patterns.add_1j60pz_k$(parsePattern($this));
        var tmp_1 = $this.peek_t7gyox_k$([']']) ? true : $this.match_949ua1_k$([',']);
        $this.require_3pbn9x_k$(tmp_1, RhovasParser$parsePattern$lambda($this));
      }
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp3_also = new OrderedDestructure_0(patterns);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePattern.<anonymous>' call
      tmp3_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$4 = tmp3_also;
      tmp = tmp$ret$4;
    } else if ($this.match_949ua1_k$(['{'])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var tmp$ret$5;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$5 = ArrayList_init_$Create$();
      var patterns_0 = tmp$ret$5;
      while (!$this.match_949ua1_k$(['}'])) {
        var tmp0_elvis_lhs = $this.tokens_1.get_fkrdnv_k$(0);
        $this.context_1.addLast_i401o4_k$((tmp0_elvis_lhs == null ? ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)) : tmp0_elvis_lhs).range_1);
        var key = $this.match_949ua1_k$([RhovasTokenType_IDENTIFIER_getInstance(), ':']) ? ensureNotNull($this.tokens_1.get_fkrdnv_k$(-2)).literal_1 : null;
        var pattern_0 = parsePattern($this);
        patterns_0.add_1j60pz_k$(new Pair(key, pattern_0));
        var tmp_2 = $this.peek_t7gyox_k$(['}']) ? true : $this.match_949ua1_k$([',']);
        $this.require_3pbn9x_k$(tmp_2, RhovasParser$parsePattern$lambda_0($this));
        $this.context_1.removeLast_i5wx8a_k$();
      }
      var tmp$ret$6;
      // Inline function 'kotlin.also' call
      var tmp4_also = new NamedDestructure_0(patterns_0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePattern.<anonymous>' call
      tmp4_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$6 = tmp4_also;
      tmp = tmp$ret$6;
    } else if ($this.peek_t7gyox_k$([listOf_0(['*', '+'])])) {
      tmp = null;
    } else if ($this.match_949ua1_k$(['$'])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var tmp_3 = $this.match_949ua1_k$(['{']);
      $this.require_3pbn9x_k$(tmp_3, RhovasParser$parsePattern$lambda_1($this));
      var value = parseExpression($this);
      var tmp_4 = $this.match_949ua1_k$(['}']);
      $this.require_3pbn9x_k$(tmp_4, RhovasParser$parsePattern$lambda_2($this));
      var tmp$ret$7;
      // Inline function 'kotlin.also' call
      var tmp5_also = new Value_0(value);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePattern.<anonymous>' call
      tmp5_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$7 = tmp5_also;
      tmp = tmp$ret$7;
    } else {
      throw $this.error$default_8prrdd_k$('Expected pattern.', 'A pattern must start with a literal (Null/Boolean/Integer/Decimal/String/Atom/List/Object), a star `*` or plus `+` for varargs, or a dollar sign `$` for interpolation.', null, 4, null);
    }
    var pattern_1 = tmp;
    if ($this.match_949ua1_k$([listOf_0(['*', '+'])])) {
      var operator = ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1;
      var tmp$ret$8;
      // Inline function 'kotlin.also' call
      var tmp6_also = new VarargDestructure_0(pattern_1, operator);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePattern.<anonymous>' call
      tmp6_also.context_1 = !(pattern_1 == null) ? listOf_0([first(ensureNotNull(pattern_1).context_1), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]) : listOf(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      tmp$ret$8 = tmp6_also;
      pattern_1 = tmp$ret$8;
    }
    if ($this.match_949ua1_k$(['$'])) {
      $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
      var tmp_5 = $this.match_949ua1_k$(['{']);
      $this.require_3pbn9x_k$(tmp_5, RhovasParser$parsePattern$lambda_3($this));
      var predicate = parseExpression($this);
      var tmp_6 = $this.match_949ua1_k$(['}']);
      $this.require_3pbn9x_k$(tmp_6, RhovasParser$parsePattern$lambda_4($this));
      var tmp$ret$9;
      // Inline function 'kotlin.also' call
      var tmp7_also = new Predicate_0(ensureNotNull(pattern_1), predicate);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parsePattern.<anonymous>' call
      tmp7_also.context_1 = listOf_0([first(ensureNotNull(pattern_1).context_1), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
      tmp$ret$9 = tmp7_also;
      pattern_1 = tmp$ret$9;
    }
    return ensureNotNull(pattern_1);
  }
  function parseType($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var path = tmp$ret$0;
    path.add_1j60pz_k$(parseIdentifier($this, RhovasParser$parseType$lambda));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    while ($this.peek_t7gyox_k$(['.', RhovasTokenType_IDENTIFIER_getInstance()]) ? isUpperCase(first_0(ensureNotNull($this.tokens_1.get_fkrdnv_k$(1)).literal_1)) : false) {
      $this.require_9xm5ng_k$($this.match_949ua1_k$(['.', RhovasTokenType_IDENTIFIER_getInstance()]));
      path.add_1j60pz_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1);
    }
    var generics = null;
    if ($this.match_949ua1_k$(['<'])) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$1 = ArrayList_init_$Create$();
      generics = tmp$ret$1;
      while (!$this.match_949ua1_k$(['>'])) {
        generics.add_1j60pz_k$(parseType($this));
        var tmp = $this.match_949ua1_k$([',']) ? true : $this.peek_t7gyox_k$(['>']);
        $this.require_3pbn9x_k$(tmp, RhovasParser$parseType$lambda_0($this));
      }
    }
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new Type_2(path, generics);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parseType.<anonymous>' call
    tmp0_also.context_1 = listOf_0([$this.context_1.removeLast_i5wx8a_k$(), ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1]);
    tmp$ret$2 = tmp0_also;
    return tmp$ret$2;
  }
  function parseInterpolation($this) {
    $this.require_9xm5ng_k$($this.match_949ua1_k$(['$', '{']));
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-2)).range_1);
    var expression = parseExpression($this);
    var tmp = $this.match_949ua1_k$(['}']);
    $this.require_3pbn9x_k$(tmp, RhovasParser$parseInterpolation$lambda($this));
    return expression;
  }
  function parseIdentifier($this, details) {
    var tmp = $this.match_949ua1_k$([RhovasTokenType_IDENTIFIER_getInstance()]);
    $this.require_3pbn9x_k$(tmp, RhovasParser$parseIdentifier$lambda($this, details));
    return ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).literal_1;
  }
  function requireSemicolon($this, details) {
    $this.context_1.addLast_i401o4_k$(ensureNotNull($this.tokens_1.get_fkrdnv_k$(-1)).range_1);
    var tmp = $this.match_949ua1_k$([';']);
    $this.require_3pbn9x_k$(tmp, RhovasParser$requireSemicolon$lambda($this, details));
    $this.context_1.removeLast_i5wx8a_k$();
  }
  function RhovasParser$parse$lambda(this$0, $rule) {
    return function () {
      var tmp = 'Parsing for the `' + $rule + '` rule completed without consuming all input. This is normally an implementation problem.';
      return this$0.error$default_8prrdd_k$('Expected end of input.', tmp, null, 4, null);
    };
  }
  function RhovasParser$parseImport$lambda() {
    return 'An import requires a name, as in `import Module.Type;`.';
  }
  function RhovasParser$parseImport$lambda_0() {
    return 'An import alias requires a name, as in `import Module.Type as Alias;`.';
  }
  function RhovasParser$parseImport$lambda_1() {
    return 'An import must be followed by a semicolon, as in `import Module.Type;`.';
  }
  function RhovasParser$parseStruct$lambda() {
    return 'A struct requires a name after `struct`, as in `struct Name { ... }`.';
  }
  function RhovasParser$parseStruct$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening brace.', 'A struct requires braces for defining members, as in `struct Name { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseStruct$lambda_1(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected variable declaration.', 'A struct requires variable declarations, as in `struct Name { val field: Type; }`.', null, 4, null);
    };
  }
  function RhovasParser$parseStatement$lambda() {
    return 'An assignment statement must be followed by a semicolon, as in `name = value;`.';
  }
  function RhovasParser$parseStatement$lambda_0() {
    return 'An expression statement must be followed by a semicolon, as in `expression;`';
  }
  function RhovasParser$parseFunctionStatement$lambda() {
    return 'A function declaration requires a name after `func`, as in `func name() { ... }`.';
  }
  function RhovasParser$parseFunctionStatement$lambda_0() {
    return 'A function generic type declaration requires a name, as in `func name<T>() { ... }` or `func name<X, Y, Z>() { ... }`.';
  }
  function RhovasParser$parseFunctionStatement$lambda_1(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing angle bracket or comma.', 'A function generic type declaration must be followed by a closing angle bracket `>` or comma `,`, as in `func name<T>() { ... }` or `func name<X, Y, Z>() { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseFunctionStatement$lambda_2(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening parenthesis.', 'A function declaration requires parenthesis after the name, as in `func name() { ... }` or `func name(x, y, z) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseFunctionStatement$lambda_3() {
    return 'A function parameter requires a name, as in `func f(name: Type) { ... }`.';
  }
  function RhovasParser$parseFunctionStatement$lambda_4(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing parenthesis or comma.', 'A function parameter must be followed by a closing parenthesis `)` or comma `,`, as in `func name() { ... }` or `func name(x, y, z) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseDeclarationStatement$lambda() {
    return 'A variable declaration requires a name after `val`/`var`, as in `val name = value;` or `var name: Type;`.';
  }
  function RhovasParser$parseDeclarationStatement$lambda_0() {
    return 'A variable declaration must be followed by a semicolon, as in `val name = value;` or `var name: Type;`.';
  }
  function RhovasParser$parseIfStatement$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening parenthesis.', 'An if statement requires parenthesis around the condition, as in `if (condition) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseIfStatement$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing parenthesis.', 'An if statement condition must be followed by a closing parenthesis, as in `if (condition) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseConditionalMatch$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected colon.', 'A match condition must be followed by a colon `:`, as in `match { condition: ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseConditionalMatch$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing brace.', 'A match else condition must be the last condition and thus must be followed by a closing brace `}`, as in `match { c1: ... else c2: ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseConditionalMatch$lambda_1(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected colon.', 'A match condition must be followed by a colon `:`, as in `match { condition: ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseStructuralMatch$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing parenthesis.', 'A structural match argument must be followed by a closing parenthesis `)`, as in `match (argument) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseStructuralMatch$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening brace.', 'A structural match argument must be followed by an opening brace `{`, as in `match (argument) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseStructuralMatch$lambda_1(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected colon.', 'A match pattern must be followed by a colon `:`, as in `match (argument) { condition: ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseStructuralMatch$lambda_2(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing brace.', 'A match else pattern must be the last pattern and thus must be followed by a closing brace `}`, as in `match { p1: ... else p2: ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseStructuralMatch$lambda_3(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected colon.', 'A match pattern must be followed by a colon `:`, as in `match (argument) { condition: ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseForStatement$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening parenthesis.', 'A for loop requires parenthesis around the argument, as in `for (val name in iterable) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseForStatement$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected `val`.', 'A for loop variable requires `val`, as in `for (val name in iterable) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseForStatement$lambda_1() {
    return 'A for loop variable requires a name, as in `for (val name in iterable) { ... }`.';
  }
  function RhovasParser$parseForStatement$lambda_2(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected `in`.', 'A for loop variable must be followed by `in`, as in `for (val name in iterable) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseForStatement$lambda_3(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing parenthesis.', 'A for loop requires parenthesis around the argument, as in `for (val name in iterable) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseWhileStatement$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening parenthesis.', 'A while loop requires parenthesis around the condition, as in `while (condition) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseWhileStatement$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing parenthesis.', 'A while loop requires parenthesis around the condition, as in `while (condition) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseTryStatement$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening parenthesis.', 'A catch block requires parenthesis around the argument, as in `try { ... } catch (val name: Type) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseTryStatement$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected `val`.', 'A catch block variable requires `val`, as in `try { ... } catch (val name: Type) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseTryStatement$lambda_1() {
    return 'A catch block variable requires a name, as in `try { ... } catch (val name: Type) { ... }`.';
  }
  function RhovasParser$parseTryStatement$lambda_2(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected colon.', 'A catch block variable a colon before the type, as in `try { ... } catch (val name: Type) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseTryStatement$lambda_3(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing parenthesis.', 'A catch block requires parenthesis around the argument, as in `try { ... } catch (val name: Type) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseWithStatement$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening parenthesis.', 'A with statement requires parenthesis around the argument, as in `with (argument) { ... }` or `with (val name = value) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseWithStatement$lambda_0() {
    return 'A with statement variable requires a name, as in `with (val name = value) { ... }`.';
  }
  function RhovasParser$parseWithStatement$lambda_1(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected equals.', 'A with statement argument must be followed by equals `=`, as in `with (val name = value) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseWithStatement$lambda_2(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing parenthesis.', 'A with statement requires parenthesis around the argument, as in `with (argument) { ... }` or `with (val name = value) { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseBreakStatement$lambda() {
    return 'A break statement must be followed by a semicolon, as in `break;` or `break label;`.';
  }
  function RhovasParser$parseContinueStatement$lambda() {
    return 'A continue statement must be followed by a semicolon, as in `continue;` or `continue label;`.';
  }
  function RhovasParser$parseReturnStatement$lambda() {
    return 'A return statement must be followed by a semicolon, as in `return;` or `return value;`.';
  }
  function RhovasParser$parseThrowStatement$lambda() {
    return 'A throw statement must be followed by a semicolon, as in `throw exception;`.';
  }
  function RhovasParser$parseAssertStatement$lambda() {
    return 'An assert statement must be followed by a semicolon, as in `assert condition;`.';
  }
  function RhovasParser$parseRequireStatement$lambda() {
    return 'A require statement must be followed by a semicolon, as in `require condition;`.';
  }
  function RhovasParser$parseEnsureStatement$lambda() {
    return 'An ensure statement must be followed by a semicolon, as in `ensure condition;`.';
  }
  function RhovasParser$parseLogicalAndExpression$ref($boundThis) {
    var l = function () {
      return parseLogicalAndExpression($boundThis);
    };
    l.callableName = 'parseLogicalAndExpression';
    return l;
  }
  function RhovasParser$parseEqualityExpression$ref($boundThis) {
    var l = function () {
      return parseEqualityExpression($boundThis);
    };
    l.callableName = 'parseEqualityExpression';
    return l;
  }
  function RhovasParser$parseComparisonExpression$ref($boundThis) {
    var l = function () {
      return parseComparisonExpression($boundThis);
    };
    l.callableName = 'parseComparisonExpression';
    return l;
  }
  function RhovasParser$parseAdditiveExpression$ref($boundThis) {
    var l = function () {
      return parseAdditiveExpression($boundThis);
    };
    l.callableName = 'parseAdditiveExpression';
    return l;
  }
  function RhovasParser$parseMultiplicativeExpression$ref($boundThis) {
    var l = function () {
      return parseMultiplicativeExpression($boundThis);
    };
    l.callableName = 'parseMultiplicativeExpression';
    return l;
  }
  function RhovasParser$parseUnaryExpression$ref($boundThis) {
    var l = function () {
      return parseUnaryExpression($boundThis);
    };
    l.callableName = 'parseUnaryExpression';
    return l;
  }
  function RhovasParser$parseSecondaryExpression$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected period.', 'A pipeline qualifier must be followed by a period, as in `receiver.|Qualifier.function()`.', null, 4, null);
    };
  }
  function RhovasParser$parseSecondaryExpression$lambda_0() {
    return 'A pipeline expression requires a name, as in `receiver.|function()` or `receiver.|Qualifier.function()`.';
  }
  function RhovasParser$parseSecondaryExpression$lambda_1(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening parenthesis, pipe, or brace.', 'A pipeline expression requires an invocation, as in `receiver.|function()`, `receiver.|function |name| { ... }`, or `receiver.|function { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseSecondaryExpression$lambda_2() {
    return 'A property or method expression requires a name, as in `receiver.property` or `receiver.method()`.';
  }
  function RhovasParser$parseSecondaryExpression$lambda_3(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening parenthesis, pipe, or brace.', 'A pipeline expression requires an invocation, as in `receiver.|function()`, `receiver.|function |name| { ... }`, or `receiver.|function { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseSecondaryExpression$lambda_4(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing bracket or comma.', 'An index expression must be followed by a closing bracket `]` or comma `,`, as in `expression[index]` or `expression[x, y, z]`.', null, 4, null);
    };
  }
  function RhovasParser$parsePrimaryExpression$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing brace.', 'An interpolated argument must be followed by a closing brace, as in `"variable = ${variable}"`.', null, 4, null);
    };
  }
  function RhovasParser$parsePrimaryExpression$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Unterminated string literal.', 'A string literal must end with a double quote (") and cannot span multiple lines.', null, 4, null);
    };
  }
  function RhovasParser$parsePrimaryExpression$lambda_1(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing bracket or comma.', 'A list literal element must be followed by a closing bracket `]` or comma `,`, as in `[element]` or `[x, y, z]`.', null, 4, null);
    };
  }
  function RhovasParser$parsePrimaryExpression$lambda_2() {
    return 'An object literal entry requires a key, as in `{key: value}` or `{x, y, z}`.';
  }
  function RhovasParser$parsePrimaryExpression$lambda_3(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing parenthesis or comma.', 'An object literal entry must be followed by a closing parenthesis `}` or comma `,`, as in `{key: value}` or `{x, y, z}`.', null, 4, null);
    };
  }
  function RhovasParser$parsePrimaryExpression$lambda_4(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing parenthesis.', 'A group expression must be followed by a closing parenthesis, as in `(expression)`.', null, 4, null);
    };
  }
  function RhovasParser$parsePrimaryExpression$lambda_5(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected period.', 'A function qualifier must be followed by a period, as in `Qualifier.function()`.', null, 4, null);
    };
  }
  function RhovasParser$parsePrimaryExpression$lambda_6(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected identifier.', 'A qualified variable/function expression requires a name, as in `Qualifier.variable` or `Qualifier.function()`.', null, 4, null);
    };
  }
  function RhovasParser$parseInvokeExpressionArguments$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing parenthesis or comma.', 'A function argument must be followed by a closing parenthesis `)` or comma `,`, as in `function(argument)` or `function(x, y, z)`.', null, 4, null);
    };
  }
  function RhovasParser$parseInvokeExpressionArguments$lambda_0() {
    return 'A lambda parameter requires a name, as in `lambda |name| { ... }`.';
  }
  function RhovasParser$parseInvokeExpressionArguments$lambda_1(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing pipe or comma.', 'A lambda parameter must be followed by a closing pipe `|` or comma `,`, as in `lambda |parameter| { ... }` or `lambda |x, y, z| { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseInvokeExpressionArguments$lambda_2(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening brace.', "A lambda's parameters must be followed by an opening brace `{`, as in `lambda |parameter| { ... }", null, 4, null);
    };
  }
  function RhovasParser$parseMacroExpression$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening parenthesis or brace.', 'A macro expression must be followed by an opening parenthesis `(` or brace `{`, as in `#macro()` or `#dsl { ... }`.', null, 4, null);
    };
  }
  function RhovasParser$parseMacroExpression$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing parenthesis or comma.', 'An macro argument must be followed by a closing parenthesis `}` or comma `,`, as in `function(argument)` or `function(x, y, z)`.', null, 4, null);
    };
  }
  function RhovasParser$parsePattern$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing bracket or comma.', 'An ordered destructuring element must be followed by a closing bracket `]` or comma `,`, as in `[argument]` or `[x, y, z]`.', null, 4, null);
    };
  }
  function RhovasParser$parsePattern$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing brace or comma.', 'A named destructuring entry must be followed by a closing brace `}` or comma `,`, as in `{key: value}` or `{x, y, z}`.', null, 4, null);
    };
  }
  function RhovasParser$parsePattern$lambda_1(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening brace.', 'A value pattern uses interpolation which requires braces around the expression, as in `${value}`.', null, 4, null);
    };
  }
  function RhovasParser$parsePattern$lambda_2(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening brace.', 'A value pattern uses interpolation which requires braces around the expression, as in `${value}`.', null, 4, null);
    };
  }
  function RhovasParser$parsePattern$lambda_3(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected opening brace.', 'A predicate pattern uses interpolation which requires braces around the expression, as in `${predicate}`.', null, 4, null);
    };
  }
  function RhovasParser$parsePattern$lambda_4(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing brace.', 'A predicate pattern uses interpolation which requires braces around the expression, as in `${predicate}`.', null, 4, null);
    };
  }
  function RhovasParser$parseType$lambda() {
    return 'A type requires a name, as in `Type`.';
  }
  function RhovasParser$parseType$lambda_0(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing bracket or comma.', 'A generic parameter must be followed by a closing bracket `>` or comma `,`, as in `Type<T>` or `Type<X, Y, Z>`', null, 4, null);
    };
  }
  function RhovasParser$parseInterpolation$lambda(this$0) {
    return function () {
      return this$0.error$default_8prrdd_k$('Expected closing brace.', 'An interpolated value requires braces around the expression, as in `${value}`.', null, 4, null);
    };
  }
  function RhovasParser$parseIdentifier$lambda(this$0, $details) {
    return function () {
      var tmp = $details();
      return this$0.error$default_8prrdd_k$('Expected identifier.', tmp, null, 4, null);
    };
  }
  function RhovasParser$requireSemicolon$lambda(this$0, $details) {
    return function () {
      var tmp = $details();
      return this$0.error$default_8prrdd_k$('Expected semicolon.', tmp, null, 4, null);
    };
  }
  function RhovasParser(input) {
    Parser.call(this, new RhovasLexer(input));
  }
  RhovasParser.prototype.parse_4mmrzm_k$ = function (rule) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_subject = rule;
    var tmp;
    switch (tmp0_subject) {
      case 'source':
        tmp = parseSource_0(this);
        break;
      case 'component':
        tmp = parseComponent(this);
        break;
      case 'statement':
        tmp = parseStatement(this);
        break;
      case 'expression':
        tmp = parseExpression(this);
        break;
      case 'pattern':
        tmp = parsePattern(this);
        break;
      case 'type':
        tmp = parseType(this);
        break;
      case 'interpolation':
        tmp = parseInterpolation(this);
        break;
      default:
        throw AssertionError_init_$Create$();
    }
    var tmp0_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.parser.rhovas.RhovasParser.parse.<anonymous>' call
    var tmp_0 = rule === 'interpolation' ? true : this.tokens_1.get_fkrdnv_k$(0) == null;
    this.require_3pbn9x_k$(tmp_0, RhovasParser$parse$lambda(this, rule));
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  RhovasParser.$metadata$ = classMeta('RhovasParser', undefined, undefined, undefined, undefined, Parser.prototype);
  var RhovasTokenType_IDENTIFIER_instance;
  var RhovasTokenType_INTEGER_instance;
  var RhovasTokenType_DECIMAL_instance;
  var RhovasTokenType_STRING_instance;
  var RhovasTokenType_OPERATOR_instance;
  function values_0() {
    return [RhovasTokenType_IDENTIFIER_getInstance(), RhovasTokenType_INTEGER_getInstance(), RhovasTokenType_DECIMAL_getInstance(), RhovasTokenType_STRING_getInstance(), RhovasTokenType_OPERATOR_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'IDENTIFIER':
        return RhovasTokenType_IDENTIFIER_getInstance();
      case 'INTEGER':
        return RhovasTokenType_INTEGER_getInstance();
      case 'DECIMAL':
        return RhovasTokenType_DECIMAL_getInstance();
      case 'STRING':
        return RhovasTokenType_STRING_getInstance();
      case 'OPERATOR':
        return RhovasTokenType_OPERATOR_getInstance();
      default:
        RhovasTokenType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var RhovasTokenType_entriesInitialized;
  function RhovasTokenType_initEntries() {
    if (RhovasTokenType_entriesInitialized)
      return Unit_getInstance();
    RhovasTokenType_entriesInitialized = true;
    RhovasTokenType_IDENTIFIER_instance = new RhovasTokenType('IDENTIFIER', 0);
    RhovasTokenType_INTEGER_instance = new RhovasTokenType('INTEGER', 1);
    RhovasTokenType_DECIMAL_instance = new RhovasTokenType('DECIMAL', 2);
    RhovasTokenType_STRING_instance = new RhovasTokenType('STRING', 3);
    RhovasTokenType_OPERATOR_instance = new RhovasTokenType('OPERATOR', 4);
  }
  function RhovasTokenType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  RhovasTokenType.$metadata$ = classMeta('RhovasTokenType', [Type_1], undefined, undefined, undefined, Enum.prototype);
  function RhovasTokenType_IDENTIFIER_getInstance() {
    RhovasTokenType_initEntries();
    return RhovasTokenType_IDENTIFIER_instance;
  }
  function RhovasTokenType_INTEGER_getInstance() {
    RhovasTokenType_initEntries();
    return RhovasTokenType_INTEGER_instance;
  }
  function RhovasTokenType_DECIMAL_getInstance() {
    RhovasTokenType_initEntries();
    return RhovasTokenType_DECIMAL_instance;
  }
  function RhovasTokenType_STRING_getInstance() {
    RhovasTokenType_initEntries();
    return RhovasTokenType_STRING_instance;
  }
  function RhovasTokenType_OPERATOR_getInstance() {
    RhovasTokenType_initEntries();
    return RhovasTokenType_OPERATOR_instance;
  }
  function main() {
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$0 = emptyList();
    var tmp = tmp$ret$0;
    var tmp_0 = listOf_0([new Declaration_4('literals', new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('String')))), false), new Declaration_4('arguments', new Reference(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('List')).get_base_wojaxm_k$(), listOf(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Dynamic')))), false)]);
    var tmp_1 = ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void'));
    var tmp$ret$1;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$1 = emptyList();
    var tmp0_also = new Definition(new Declaration_0('js', tmp, tmp_0, tmp_1, tmp$ret$1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.rhovas.interpreter.main.<anonymous>' call
    var tmp_2 = tmp0_also;
    tmp_2.implementation_1 = main$lambda;
    tmp$ret$2 = tmp0_also;
    var js = tmp$ret$2;
    var tmp_3 = Library_getInstance().SCOPE_1.functions_1;
    tmp_3.define$default_1vvya8_k$(js, null, 2, null);
  }
  function main$lambda(it) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp = it.get_fkrdnv_k$(0).value_1;
    var tmp0_map = (!(tmp == null) ? isInterface(tmp, List) : false) ? tmp : THROW_CCE();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'dev.rhovas.interpreter.main.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_0 = item.value_1;
      tmp$ret$0 = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var literals = tmp$ret$2;
    var tmp_1 = it.get_fkrdnv_k$(1).value_1;
    var arguments_0 = (!(tmp_1 == null) ? isInterface(tmp_1, List) : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = withIndex(literals);
    var source = joinToString$default(tmp_2, '', null, null, 0, null, main$lambda$lambda(arguments_0), 30, null);
    try {
      eval('eval?.(' + JSON.stringify(source) + ')');
    } catch ($p) {
      if ($p instanceof Exception) {
        var tmp_3 = get_EVALUATOR();
        var tmp0_elvis_lhs = $p.message;
        throw tmp_3.error_st682z_k$(null, 'DSL Evaluation Error', 'Failed to eval JavaScript source: ' + toString(tmp0_elvis_lhs == null ? $p : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
    return new Object_1(ensureNotNull(Library_getInstance().get_TYPES_ih6ofk_k$().get_4u8u51_k$('Void')), null);
  }
  function main$lambda$lambda($arguments) {
    return function (it) {
      var tmp0_safe_receiver = getOrNull($arguments, it.index_1);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'dev.rhovas.interpreter.main.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        tmp$ret$0 = JSON.stringify(tmp0_safe_receiver.value_1);
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp;
      return it.value_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    };
  }
  function eval_0(source, stdout) {
    var tmp;
    if (stdout === void 1) {
      tmp = println$ref_0();
    } else {
      tmp = stdout;
    }
    return eval_1(source, tmp);
  }
  function eval_1(source, stdout) {
    var input = new Input('eval', source);
    var print = (new Interpreter(stdout)).eval_mdzo8e_k$(input);
    var tmp0_safe_receiver = print;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = stdout(tmp0_safe_receiver);
    }
  }
  function eval$default(source, stdout, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      stdout = println$ref_0();
    }
    return eval_1(source, stdout);
  }
  function println$ref_0() {
    var l = function (p0) {
      println(p0);
      return Unit_getInstance();
    };
    l.callableName = 'println';
    return l;
  }
  //region block: post-declaration
  RhovasAnalyzer.prototype.visit_eysdh9_k$ = visit;
  Declaration_1.prototype.get_name_woqyms_k$ = get_name;
  Declaration_1.prototype.get_generics_1v316j_k$ = get_generics;
  Declaration_1.prototype.get_receiver_puon20_k$ = get_receiver;
  Declaration_1.prototype.get_parameters_cl4rkd_k$ = get_parameters;
  Declaration_1.prototype.get_returns_jfk3fe_k$ = get_returns;
  Declaration_1.prototype.get_throws_jy60ra_k$ = get_throws;
  Bound.prototype.get_name_woqyms_k$ = get_name;
  Bound.prototype.get_generics_1v316j_k$ = get_generics;
  Bound.prototype.get_receiver_puon20_k$ = get_receiver;
  Bound.prototype.get_parameters_cl4rkd_k$ = get_parameters;
  Bound.prototype.get_returns_jfk3fe_k$ = get_returns;
  Bound.prototype.get_throws_jy60ra_k$ = get_throws;
  Declaration_2.prototype.get_name_woqyms_k$ = get_name_0;
  Declaration_2.prototype.get_type_wovaf7_k$ = get_type;
  Declaration_2.prototype.get_mutable_on1kxp_k$ = get_mutable;
  Bound_0.prototype.get_name_woqyms_k$ = get_name_0;
  Bound_0.prototype.get_type_wovaf7_k$ = get_type;
  Bound_0.prototype.get_mutable_on1kxp_k$ = get_mutable;
  Evaluator.prototype.visit_iveuaz_k$ = visit_0;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $dev = _.dev || (_.dev = {});
    var $dev$rhovas = $dev.rhovas || ($dev.rhovas = {});
    var $dev$rhovas$interpreter = $dev$rhovas.interpreter || ($dev$rhovas.interpreter = {});
    $dev$rhovas$interpreter.eval = eval_0;
  }
  $jsExportAll$(_);
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=Interpreter.js.map
